import { create } from "zustand";
import * as Y from "yjs";
import { IndexeddbPersistence } from "y-indexeddb";
import { WebsocketProvider } from "y-websocket";

interface RoomState {
  roomId: string | null;
  ydoc: Y.Doc | null;
  ytext: Y.Text | null;
  connected: boolean;
  liveNum: number;
  _persistence: IndexeddbPersistence | null;
  _wsProvider: WebsocketProvider | null;

  initRoom: (roomId: string) => void;
  destroyRoom: () => void;
}

export const useRoomStore = create<RoomState>((set, get) => ({
  roomId: null,
  ydoc: null,
  ytext: null,
  _persistence: null,
  _wsProvider: null,
  connected: false,
  liveNum: 1,

  initRoom: (roomId) => {
    if (get().roomId === roomId && get().ydoc) return;

    get().destroyRoom();

    const ydoc = new Y.Doc();
    const ytext = ydoc.getText("markdown-text");
    const persistence = new IndexeddbPersistence(roomId, ydoc);
    const wsProvider = new WebsocketProvider(
      process.env.NEXT_PUBLIC_WS_URL ?? "ws://localhost:1234",
      roomId,
      ydoc,
    );

    wsProvider.on("status", (event: { status: string }) => {
      set({ connected: event.status === "connected" });
    });

    const updatePresence = () =>
      set({ liveNum: wsProvider.awareness.getStates().size });
    wsProvider.awareness.on("change", updatePresence);
    updatePresence();

    set({
      roomId,
      ydoc,
      ytext,
      _persistence: persistence,
      _wsProvider: wsProvider,
    });
  },

  destroyRoom: () => {
    const { _persistence, _wsProvider, ydoc } = get();
    _wsProvider?.destroy();
    _persistence?.destroy();
    ydoc?.destroy();
    set({
      roomId: null,
      ydoc: null,
      ytext: null,
      connected: false,
      liveNum: 1,
      _persistence: null,
      _wsProvider: null,
    });
  },
}));
