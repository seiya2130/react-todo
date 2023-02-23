import { useState } from "react";
import List from "./List";

const Todo = () => {

    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, name: 'タスク1', status: 0, deadline: new Date(2023, 2, 1)},
        { id: 2, name: 'タスク2', status: 1, deadline: new Date(2023, 2, 2)}
    ])

    const deleteTodo = (id: number) => {
        setTodos(
            todos.filter(x => x.id != id)
        );
    }

    return (
        <>
            <h1>Todo</h1>
            <List todos={todos} deleteTodo={deleteTodo}/>
        </>
    )
}

export type Todo = {
    id: number;
    name: string;
    status: number;
    deadline: Date;
};

export default Todo;