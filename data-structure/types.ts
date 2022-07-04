export type Item = string | number;

export interface NodeObject {
  value: Item;
  next: NodeObject | null;
}
