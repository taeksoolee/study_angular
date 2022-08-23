export interface Todo {
  id: number,
  title: string,
  description: string,
  done: boolean,
}

/** @description Todo Form에서 사용하는 Interface */
export type TodoForFormEvent = Omit<Todo, 'id' | 'done'>;


export type TodoForUpdate = Omit<Todo, 'id'>;
export type TodoForUpdateDone = Pick<Todo, 'done'>;