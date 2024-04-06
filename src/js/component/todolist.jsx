import React, {useState} from "react";

//include images into your bundle


//create your first component
const ToDoList = () => {
    
    


	return (
        <>
            <div className="container bg-info pb-5">
                <div className="row">
                    <div className="col text-center">
                        <h1>TODOS</h1>
                    </div> 
                </div> 
                <div className="row">
                    <div className="col text-center">
                        <div className="form-group">
                            <label for="formGroupExampleInput" className="fs-3"><i className="fa-solid fa-pencil"></i>Añade tu tarea a realizar<i className="fa-solid fa-pencil"></i></label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Escribe aquí tu tarea"/>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">Primera tarea<span><i className="fa-regular fs-3 fa-circle-xmark"></i></span></li>
                        </ul>
                    </div>
                </div>
                <div className="row pendiente">
                    <div className="col-3">
                        <ul className="list-group mt-3">
                            <li className="list-group-item counterTask fw-bold">23 Tareas pendientes</li>
                        </ul>
                    </div>
                </div>
            </div>   
        </>
	);
};

export default ToDoList;