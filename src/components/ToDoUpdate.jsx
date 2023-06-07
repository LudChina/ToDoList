import React from "react";
import { FaEdit } from "react-icons/fa";


export const ToDoUpdate = () => {
    return (
        <form>
        <input 
        type="text" 
        className="input-update" 
        name="description" 
        value="" 
        placeholder="¿Que hay que hacer?" 
        />

        <button className="btn-edit" type="submit"><FaEdit /></button>
    </form>
    )
}