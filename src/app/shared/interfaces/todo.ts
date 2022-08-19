export interface Todo {
  id: number,
  title: string,
  description: string,
  done: boolean,
}

export type TodoForFormEvent = Omit<Todo, 'id' | 'done'>;