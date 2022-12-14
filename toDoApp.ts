interface ToDo {
  id: number;
  title: string;
  status: ToDoStatus;
  completeOn?: Date;
}

enum ToDoStatus {
  ToDo = "to do",
  InProgress = "in-progress",
  Done = "done",
}

const todoItems: ToDo[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: ToDoStatus.Done,
    completeOn: new Date("2022-12-14"),
  },
  {
    id: 2,
    title: "Learn TypeScript",
    status: ToDoStatus.InProgress,
  },
  {
    id: 3,
    title: "Learn Java",
    status: ToDoStatus.ToDo,
  },
];

function addTodoItem(todo: string): ToDo {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: ToDoStatus.ToDo,
  };
  todoItems.push(newTodo);
  return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? max : x.id), 0) + 1;
}
