import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = ({ToDos, handleUpdateToDo, handleCompleteToDo, handleDeleteToDo}) => {
    return (
        <ul>
            {ToDos.map(ToDo =>(
           <ToDoItem
              key={ToDo.id}
              ToDo={ToDo}
              handleCompleteToDo={handleCompleteToDo}
              handleDeleteToDo={handleDeleteToDo}
              handleUpdateToDo={handleUpdateToDo} 
           />
            ))}
        </ul>
    )
}