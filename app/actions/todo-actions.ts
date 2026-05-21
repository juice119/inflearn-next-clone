'use server'

var TODOS: string[] = [
    'Go To Market'
];

export const getTodos = async () => {
    return TODOS;
}

export const createTodo = async (data: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1_000));

    TODOS.push(data);
    return TODOS;
}