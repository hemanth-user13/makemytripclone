import { useState } from "react";
import React from "react";
import styled from "styled-components";



type Task = {
    id: number;
    title: string;
    priority: string;
    status: string;
    order:number
};

type Column = {
    name: string;
    items: Task[];
};

type Columns = {
    [key: string]: Column;
};


const TaskButton=styled.button`
  background-color: #125472;
  color: white;
  padding: 10px;
`
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

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Title) {
            const newTask: Task = {
                id: new Date().getTime(),
                title: Title,
                priority: taskPriority,
                status: "To Do",
                order:columns.todo.items.length+1
            };
            setColumns((prevColumns) => ({
                ...prevColumns,
                todo: { ...prevColumns.todo, items: [...prevColumns.todo.items, newTask] }
            }));
            setTaskTitle("");
            setTaskPriority("Medium");
            console.log(newTask);
        }
    };

    const onDragStart = (
        e: React.DragEvent<HTMLDivElement>,
        taskId: number,
        columnId: string
    ) => {
        e.dataTransfer.setData("taskId", taskId.toString());
        e.dataTransfer.setData("columnId", columnId);
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>, columnId: string) => {
        const taskId = e.dataTransfer.getData("taskId");
        const sourceColumnId = e.dataTransfer.getData("columnId");

        const taskToMove = columns[sourceColumnId].items.find(
            (item) => item.id === parseInt(taskId),
            console.log(taskId)
        );

        if (!taskToMove) return;

        const taskLreadyExists=columns[columnId].items.some(
          (item)=>item.id ===parseInt(taskId)
        )
        if(taskLreadyExists) return ;

        const updatedTask: Task = {
            ...taskToMove,
            status: columns[columnId].name,
            order:columns[columnId].items.length+1
        };

        const sourceColumnItems = columns[sourceColumnId].items.filter(
            (item) => item.id !== parseInt(taskId))
            .map((item,index)=>({
              ...item,
              order:index+1
            }))


      const targetColumnsItems=[
        ...columns[columnId].items,
        updatedTask
      ].map((item,index)=>({
        ...item,
        order:index+1
      }))

        setColumns((prevColumns) => ({
            ...prevColumns,
            [sourceColumnId]: {
                ...prevColumns[sourceColumnId],
                items: sourceColumnItems
            },
            [columnId]: {
                ...prevColumns[columnId],
                items: targetColumnsItems
            }
        }));
        console.log(updatedTask);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    
    const getPriorityColor=(priority:string)=>{
      switch(priority){
        case "High":
          return "bg-red-500"
        case "Medium":
          return "bg-yellow-500"
        case "Low":
          return "bg-green-500"
        default:
          return "bg-gray-200"
      }
    }

    return (
        <div>
            <div className="p-6 min-h-screen bg-gray-100">
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-4">Add a Task</h2>
                    <form onSubmit={handleAddTask} className="flex space-x-4">
                        <input
                            type="text"
                            value={Title}
                            onChange={(e) => setTaskTitle(e.target.value)}
                            placeholder="Task Title"
                            className="p-2 border rounded w-64"
                        />
                        <select
                            value={taskPriority}
                            onChange={(e) => setTaskPriority(e.target.value)}
                            className="p-2 border rounded"
                        >
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        <TaskButton
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                        >
                            Add Task
                        </TaskButton>
                    </form>
                </div>

                {/* columns */}
                <div className="grid grid-cols-4 gap-6">
                    {Object.entries(columns).map(([columnId, column]) => (
                        <div
                            key={columnId}
                            onDragOver={onDragOver}
                            onDrop={(e) => onDrop(e, columnId)}
                            className="bg-white p-4 rounded-lg shadow-md min-h-[400px]"
                        >
                            <h2 className="font-bold text-lg mb-4 text-center">
                                {column.name}
                            </h2>
                            <div>
                                {column.items.map((task) => (
                                    <div
                                        key={task.id}
                                        draggable
                                        onDragStart={(e) =>
                                            onDragStart(e, task.id, columnId)
                                        }
                                        className={`p-4 mb-4 text-white rounded-lg shadow-md ${getPriorityColor(task.priority)}`}
                                    >
                                        <p className="font-bold text-lg">
                                            {task.title}
                                        </p>
                                        <p className="text-base text-white">
                                            Priority: {task.priority}
                                        </p>
                                        <p className="text-base text-white italic">
                                            Status: {task.status}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OnDrag;
