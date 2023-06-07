import React from "react";
import {FaTrash} from 'react-icons/fa';
import { ToDoUpdate } from "./ToDoUpdate";

export const ToDoItem = () => {
    return (
        <li>
            <span >
                <label htmlFor="" className="container-done"></label>
            </span>
            <ToDoUpdate />
            <button className="btn-delete"><FaTrash /></button>
        </li>
    )
}