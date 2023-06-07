import { useEffect, useReducer } from "react"
import { toDoReducer } from "../toDoReducer"

export const useToDo = () => {

      const initialState = []

      const init = () =>{
        return JSON.parse(localStorage.getItem('ToDos')) || []
      }

      const [ToDos, dispatch] = useReducer(toDoReducer, initialState, init)

      const ToDosCount = ToDos.length
      const pendingToDosCount = ToDos.filter(ToDo => !ToDo.done).length


      useEffect(() =>{
        localStorage.setItem('ToDos', JSON.stringify(ToDos))
      }, [ToDos])

      const handleNewToDo = ToDo => {
        const action = {
            type: "Add ToDo",
            payload: ToDo,
        };

        dispatch(action)
      };

      const handleDeleteToDo = id => {
        const action = {
            type: "Delete ToDo",
            payload: id,
        };

        dispatch(action)
      };
      
      const handleCompleteToDo = id =>{
        const action = {
            type: "Complete ToDo",
            payload: id,
        };

        dispatch(action)
      };

      const handleUpdateToDo = (id, description) => {
        const action = {
            type: "Complete Todo",
            payload: {
                id,
                description
            }
        };

        dispatch(action);
      };

      return{
        ToDos,
        ToDosCount,
        pendingToDosCount,
        handleNewToDo,
        handleDeleteToDo,
        handleCompleteToDo,
        handleUpdateToDo
      }
};