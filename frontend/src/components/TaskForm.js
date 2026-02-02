import { useEffect, useState } from "react";
import API from "../api";


function TaskForm({ fetchTasks, editingTask, setEditingTask }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "Pending"
  });

  // Fill form when editing
  useEffect(() => {
    if (editingTask) {
      setTask(editingTask);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingTask) {
      // UPDATE
      await API.put(`/tasks/${editingTask._id}`, task);
      setEditingTask(null);
    } else {
      // CREATE
      await API.post("/tasks", task);
    }

    setTask({ title: "", description: "", status: "Pending" });
    fetchTasks();
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>{editingTask ? "Edit Task" : "Add New Task"}</h2>

      <input
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />

      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />

      <select
        value={task.status}
        onChange={(e) => setTask({ ...task, status: e.target.value })}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>

      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;
