import { v4 as uuid } from "uuid";

export type Counter = {
  id: string;
  value: number;
};

export const createCounter = (): Counter => ({
  id: uuid(),
  value: 0,
});
