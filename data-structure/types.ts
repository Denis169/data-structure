export type Item = string | number;

export interface NodeObject {
  value: Item;
  next: object | null;
}
