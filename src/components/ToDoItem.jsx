import React from "react";
import {FaTrash} from 'react-icons/fa';
import { ToDoUpdate } from "./ToDoUpdate";

export const ToDoItem = ({ToDo, handleUpdateToDo, handleCompleteToDo, handleDeleteToDo}) => {
    return (
        <li>
            <span
                onClick={() => handleCompleteToDo(ToDo.id)} 
            >
    <label className={`container-done ${ToDo.done ? 'active' : ''}`}></label>
            </span>

            <ToDoUpdate ToDo={ToDo} handleUpdateToDo={handleUpdateToDo} />

            <button 
                className="btn-delete" 
                
                onClick={() => handleDeleteToDo(ToDo.id)}
            >
                <FaTrash />
            </button>
        </li>
    )
}