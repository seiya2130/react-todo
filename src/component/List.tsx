import { Todo } from "./Todo";

type TaskListProps = {
    todos: Todo[];
  };

const List: React.FC<TaskListProps> = (props) => {
    return (
        <div>
            {props.todos.map(x => {
                return (
                    <div>
                        <span>{x.name} </span>
                        <span>{x.status} </span>
                        <span>{x.deadline.toLocaleDateString()}</span>
                    </div>
                )
            })}
        </div>
    )
};

export default List;