import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "../hooks/UseForm";


export const ToDoUpdate = ({ToDo, handleUpdateToDo}) => {
    
    const {updateDescription, onInputChange} = useForm({
        updateDescription: ToDo.description
    })

    const [disable, setDisable] = useState(true)
    const focusInputRef = useRef()


    const onSubmitUpdate = e => {
        e.preventDefault()

        const id = ToDo.id
        const description = updateDescription

        handleUpdateToDo(id, description);

        setDisable(!disable)
        
        focusInputRef.current.focus()
    };

    return (
        <form onSubmit={onSubmitUpdate}>
        <input 
        type="text" 
        className={`input-update ${ToDo.done ? 'text.decoration-dashed' : ''}`} 
        name="updateDescription" 
        value={updateDescription}
        onChange={onInputChange}
        placeholder="¿Que hay que hacer?" 
        readOnly={disable}
        ref={focusInputRef}
        />

        <button className="btn-edit" type="submit"><FaEdit /></button>
    </form>
    )
}