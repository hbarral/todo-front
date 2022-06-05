export interface ITodo {
  id: number,
  text: string,
}

export interface ITodoForm {
  onSubmit: (t: ITodo) => void
}

export interface ITodoProps {
  todos : ITodo[],
  removeTodo: (id: number) => void,
}

