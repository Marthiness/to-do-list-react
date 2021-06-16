import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`list__item ${task.done && hideDoneTasks
                    ? " list__item--hide"
                    : ""}`} key={task.id}
            >

                <button className="list__button list__button--done ">
                    {task.done ? "✔" : ""}
                </button>
                <span className={
                    `list__paragraph ${task.done
                        ? " list__paragraph--done "
                        : ""}`}> {task.content}
                </span>
                <button className="list__button list__button--remove">🗑</button>

            </li>))}

    </ul >
);

export default Tasks;