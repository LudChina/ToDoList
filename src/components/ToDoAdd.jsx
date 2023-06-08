import React from "react";
import { useForm } from "../hooks/UseForm";

export const ToDoAdd = ({handleNewToDo}) => {


    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = e => {
        e.preventDefault();

        if (description.length <= 1) return

        let newToDo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        handleNewToDo(newToDo)
        onResetForm();
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text" 
            className="input-add" 
            name="description" 
            value={description} 
            onChange={onInputChange}
            placeholder="¿Que hay que hacer?" 
            />

            <button className="btn-task" type="submit">Agregar</button>
        </form>
    );
};

export default ToDoAdd