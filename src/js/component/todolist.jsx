import React, { useState } from "react";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const handleTaskInputChange = event => {
        setTaskInput(event.target.value);
    };

    const handleKeyDown = event => {
        if (event.key === 'Enter' && taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const handleDeleteTask = index => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div className="container bg-info pb-5">
            <div className="row">
                <div className="col text-center">
                    <h1>TODOS</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <div className="form-group">
                        <label htmlFor="taskInput" className="fs-3">
                            <i className="fa-solid fa-pencil"></i>
                            Añade tu tarea a realizar
                            <i className="fa-solid fa-pencil"></i>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="taskInput"
                            placeholder="Escribe aquí tu tarea"
                            value={taskInput}
                            onChange={handleTaskInputChange}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {tasks.map((task, index) => (
                            <li className="list-group-item taskLi d-flex justify-content-between align-items-center fw-bold" key={index}>
                                {task}
                                <span onClick={() => handleDeleteTask(index)}>
                                    <i className="fa-regular fs-3 fa-circle-xmark iconX"></i>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul className="list-group mt-3">
                        <li className="list-group-item counterTask fw-bold">{tasks.length} Tareas pendientes</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;
