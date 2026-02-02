import API from "../api";
 

function TaskItem({ task, fetchTasks, setEditingTask }) {

  const deleteTask = async () => {
    await API.delete(`/tasks/${task._id}`);
    fetchTasks();
  };

  return (
    <div className={`task-card ${task.status === "Completed" ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span className="status">{task.status}</span>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          style={{ background: "#e0e7ff", color: "#3730a3" }}
          onClick={() => setEditingTask(task)}
        >
          Edit
        </button>

        <button onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
