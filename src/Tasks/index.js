import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`list__item ${task.done && hideDone
                    ? " list__item--hide"
                    : ""}`} key={task.id}
            >

                <button
                    className="list__button list__button--done "
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={
                    `list__paragraph ${task.done
                        ? " list__paragraph--done "
                        : ""}`}> {task.content}
                </span>
                <button
                    className="list__button list__button--remove"
                    onClick={() => removeTask(task.id)}
                >
                    🗑</button>

            </li>))}

    </ul >
);

export default Tasks;