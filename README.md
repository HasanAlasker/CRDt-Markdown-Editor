# 📝 Collaborative Offline-First Markdown Editor

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Yjs](https://img.shields.io/badge/Yjs-CRDT-orange)
![WebSockets](https://img.shields.io/badge/WebSockets-Real--Time-green)
![IndexedDB](https://img.shields.io/badge/IndexedDB-Offline--First-purple)
![Zustand](https://img.shields.io/badge/Zustand-State%20Management-brown)

A modern collaborative Markdown editor built with an **offline-first architecture**. Users can create or join shared rooms, edit documents simultaneously in real time, and continue working even when the network connection is lost.

---

## 🎥 Demo

![Collaborative Editor Demo](./assets/demo.gif)

## 📸 Preview

![Dashboard Overview](https://media.licdn.com/dms/image/v2/D4D2DAQFXhfnDWOcVpQ/profile-treasury-image-shrink_1280_1280/B4DZ75pCphGwAY-/0/1782304746502?e=1782910800&v=beta&t=EIEngQW6HTbhW2999NiZF4vLon-N0oQFX4BAg-OhdI4)
![Dashboard Overview](https://media.licdn.com/dms/image/v2/D4D2DAQFhlqtJwFAvww/profile-treasury-image-shrink_1280_1280/B4DZ75pCn_KsAY-/0/1782304746226?e=1782910800&v=beta&t=N8JEbFmRNTerBk9_6Q9iAcsMgHExVtXMsKPR1pguNn4)

---

## ✨ Features

### 🔄 Real-Time Collaboration

* Concurrent editing with multiple users.
* Conflict-free synchronization powered by CRDTs.
* Instant updates across all connected peers.

### 📦 Offline-First Experience

* Documents are automatically persisted locally.
* Continue writing without an internet connection.
* Seamless synchronization when connectivity returns.

### 📝 Rich Markdown Editing

* Headings
* Bold & Italic
* Lists & Checklists
* Links & Images
* Live Markdown Preview
* Code Blocks

### 👥 Presence Awareness

* Track active collaborators in each room.
* Live participant count updates.

### 🔐 Room Management

* Public collaboration rooms.
* Private rooms with shareable URLs.
* Join sessions instantly without complex setup.

---

## 🏗️ Architecture

### CRDT-Based Synchronization (Yjs)

Traditional collaborative editors often rely on Operational Transformation (OT), requiring a central authority to resolve conflicts.

This project instead uses **Conflict-Free Replicated Data Types (CRDTs)** through Yjs.

Benefits:

* No manual conflict resolution
* Eventual consistency
* Reduced server complexity
* Better offline support
* Automatic merge handling

### Offline Persistence

Document state is persisted locally using **IndexedDB** via the Y-IndexedDB provider.

**Workflow:**

```text
User Types
      ↓
Yjs Document
      ↓
IndexedDB (Local Backup)
      ↓
WebSocket Provider
      ↓
Other Connected Peers
```

When the connection is restored, Yjs computes and synchronizes only the missing updates.

### State Management

The application separates collaborative document state from UI state:

| Responsibility               | Technology  |
| ---------------------------- | ----------- |
| Collaborative Document State | Yjs         |
| Offline Persistence          | IndexedDB   |
| Real-Time Networking         | Y-WebSocket |
| UI State                     | Zustand     |

This separation keeps the architecture maintainable and avoids unnecessary re-renders.

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* TypeScript
* Tailwind CSS

### Collaboration

* Yjs
* Y-WebSocket

### Storage

* IndexedDB
* Y-IndexedDB

### State Management

* Zustand

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm, pnpm, or yarn

### Clone Repository

```bash
git clone https://github.com/yourusername/repository-name.git
cd repository-name
```

### Install Dependencies

```bash
npm install
```

### Start Y-WebSocket Server

```bash
npx y-websocket
```

### Run Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🧠 What I Learned

Building this project provided hands-on experience with:

* Distributed systems concepts
* Conflict-Free Replicated Data Types (CRDTs)
* Offline-first application design
* Browser persistence using IndexedDB
* Real-time synchronization with WebSockets
* State isolation and performance optimization
* Collaborative software architecture

---

## 🔮 Future Improvements

* User authentication
* Cursor presence indicators
* Shared comments and annotations
* Document history & versioning
* End-to-end encryption
* Export to PDF and HTML

---

## 📄 License

MIT License

---

## 👨‍💻 Author

**Hasan Alasker**

Portfolio: https://alasker.dev

LinkedIn: https://www.linkedin.com/in/hasan-alasker/

Email: [hasanalasker.contact@gmail.com](mailto:hasanalasker.contact@gmail.com)
