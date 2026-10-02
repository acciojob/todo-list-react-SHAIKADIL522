import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addTask = () => {
    const t = text.trim();
    if (!t) return;
    setTasks([...tasks, t]);
    setText("");
  };

  const deleteTask = (i) => {
    setTasks(tasks.filter((_, idx) => idx !== i));
  };

  const startEdit = (i) => {
    setEditIndex(i);
    setEditText(tasks[i]);
  };

  const saveTask = (i) => {
    const t = editText.trim();
    if (!t) return;
    setTasks(tasks.map((task, idx) => (idx === i ? t : task)));
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <div className="add_tasks_section">
        <h2>To Do List</h2>
        <div className="add_row">
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      <div className="tasks_section">
        {tasks.map((task, i) => (
          <div className="task" key={i}>
            {editIndex === i ? (
              <>
                <textarea
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button className="save" onClick={() => saveTask(i)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <p>{task}</p>
                <div className="btns">
                  <button className="edit" onClick={() => startEdit(i)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => deleteTask(i)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;