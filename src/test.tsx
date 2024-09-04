import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
 
const TaskBoard = () => {
  const [tasks, setTasks] = useState([]);
  const [draggedTask, setDraggedTask] = useState(null);
 
  const addTask = (values, { resetForm }) => {
    const newTask = {
      title: values.task,
      status: "initial",
      priority: values.priority,
    };
    setTasks([...tasks, newTask]);
    resetForm();
  };
 
  const onDragStart = (taskIndex) => {
    setDraggedTask(tasks[taskIndex]);
  };
 
  const onDrop = (newStatus) => {
    if (draggedTask) {
      const updatedTasks = tasks.map((task) =>
        task.title === draggedTask.title ? { ...task, status: newStatus } : task
      );
      setTasks(updatedTasks);
      setDraggedTask(null);
    }
  };
 
  const handleConsoleData = () => {
    console.log(tasks);
  };
  console.log(tasks);
 
  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <Formik
          initialValues={{ task: "", priority: "low" }}
          onSubmit={addTask}
        >
          <Form style={styles.form}>
            <Field
              name="task"
              placeholder="Enter a task"
              style={styles.input}
            />
            <Field as="select" name="priority" style={styles.select}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <button type="submit" style={styles.addButton}>
              Add Task
            </button>
          </Form>
        </Formik>
        <button onClick={handleConsoleData} style={styles.consoleButton}>
          Console Data
        </button>
      </div>
 
      <div style={styles.board}>
        {["initial", "development", "testing", "production"].map((stage) => (
          <div
            key={stage}
            style={styles.column}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => onDrop(stage)}
          >
            <h3>{stage.charAt(0).toUpperCase() + stage.slice(1)} Stage</h3>
            {tasks
              .filter((task) => task.status === stage)
              .map((task, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.taskCard,
                    borderColor: priorityColors[task.priority],
                  }}
                  draggable
                  onDragStart={() => onDragStart(index)}
                >
                  <p>{task.title}</p>
                  <p>Priority: {task.priority}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
 
const priorityColors = {
  low: "#4CAF50",
  medium: "#FF9800",
  high: "#F44336",
};
 
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  select: {
    padding: "10px",
    marginRight: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  consoleButton: {
    padding: "10px 15px",
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  board: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    flex: 1,
    margin: "0 10px",
    padding: "10px",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
    minHeight: "300px",
  },
  taskCard: {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
    borderLeft: "5px solid",
    cursor: "grab",
  },
};
 
export default TaskBoard;
 
has context menu