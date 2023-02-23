import { Todo } from "./Todo";

type TaskListProps = {
    todos: Todo[];
    deleteTodo: Function;
  };

const List: React.FC<TaskListProps> = (props) => {

    const complete = (id: number) => {
        props.deleteTodo(id)
    }

    return (
        <div>
            {props.todos.map(x => {
                return (
                    <div key={x.id}>
                        <span>{x.name} </span>
                        <span>{x.status} </span>
                        <span>{x.deadline.toLocaleDateString()}</span>
                        <button onClick={() => complete(x.id)}>削除</button>
                    </div>
                )
            })}
        </div>
    )
};

export default List;