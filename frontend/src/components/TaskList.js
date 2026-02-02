import TaskItem from "./TaskItem";
 

function TaskList({ tasks, fetchTasks, setEditingTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 && <p className="empty">No tasks yet</p>}

      {tasks.map(task => (
        <TaskItem
          key={task._id}
          task={task}
          fetchTasks={fetchTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
