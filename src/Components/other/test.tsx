import { useState } from "react";
import React from "react";


type Task = {
    id: number;
    title: string;
    priority: string;
    status: string;
};

type Column = {
    name: string;
    items: Task[];
};

type Columns = {
    todo: Column;
    inProgress: Column;
    completed: Column;
    reviewed: Column;
};

function OnDrag() {
    const [Title, setTaskTitle] = useState<string>("");
    const [taskPriority, setTaskPriority] = useState<string>("Medium");
    const [columns, setColumns] = useState<Columns>({
        todo: {
            name: "To Do",
            items: []
        },
        inProgress: {
            name: "In Progress",
            items: []
        },
        completed: {
            name: "Completed",
            items: []
        },
        reviewed: {
            name: "Reviewed",
            items: []
        }
    });

    const handleAddTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (Title) {
            const newTask: Task = {
                id: new Date().getTime(),
                title: Title,
                priority: taskPriority,
                status: "To Do"
            };
            setColumns((prevColumns) => ({
                ...prevColumns,
                todo: { ...prevColumns.todo, items: [...prevColumns.todo.items, newTask] }
            }));
            setTaskTitle("");
            setTaskPriority("Medium");
        }
    };

    return (
        <div>
            <div className="p-6 min-h-screen bg-gray-100">
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-4">
                        Add a Task
                    </h2>
                    <form onSubmit={handleAddTask} className="flex space-x-4">
                        <input
                            type="text"
                            value={Title}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Task Title"
                            className="p-2 border  rounded w-64"
                        />
                        <select
                            value={taskPriority}
                            onChange={(e) => setTaskPriority(e.target.value)}
                            className="p-2 border rounded"
                        >
                            <option value="high">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >Add Task</button>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OnDrag;
