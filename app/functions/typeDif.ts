import * as Y from "yjs";

export function applyDiff(ytext: Y.Text, newText: string) {
  const oldText = ytext.toString();
  if (oldText === newText) return;

  // find common prefix
  let start = 0;
  while (
    start < oldText.length &&
    start < newText.length &&
    oldText[start] === newText[start]
  ) {
    start++;
  }

  // find common suffix (not overlapping the prefix)
  let oldEnd = oldText.length;
  let newEnd = newText.length;
  while (
    oldEnd > start &&
    newEnd > start &&
    oldText[oldEnd - 1] === newText[newEnd - 1]
  ) {
    oldEnd--;
    newEnd--;
  }

  if (oldEnd > start) {
    ytext.delete(start, oldEnd - start);
  }
  if (newEnd > start) {
    ytext.insert(start, newText.slice(start, newEnd));
  }
}
