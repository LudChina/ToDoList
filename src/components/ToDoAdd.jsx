import React from "react";

export const ToDoAdd = () => {
    return (
        <form>
            <input 
            type="text" 
            className="input-add" 
            name="description" 
            value="" 
            placeholder="¿Que hay que hacer?" 
            />

            <button className="btn-task" type="submit">Agregar</button>
        </form>
    );
};

export default ToDoAdd