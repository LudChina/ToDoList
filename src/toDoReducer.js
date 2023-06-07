export const toDoReducer = (initialState, action) => {

       switch (action.type) {
        case 'Add ToDo':
            return [...initialState, action.payload]

        case 'Delete ToDo':
            return initialState.filter(ToDo => ToDo.id !== action.payload)

        case 'Complete ToDo':
            return initialState.map(ToDo =>{
                if(ToDo.id === action.payload){
                    return {
                        ...ToDo,
                        done: !ToDo.done
                    }
                }
                return ToDo;
            });
        case 'Update ToDo':
            return initialState.map(ToDo =>{
                if(ToDo.id === action.payload.id){
                    return {
                        ...ToDo,
                        description: action.payload.description,
                    }
                }
                return ToDo;
            });
       
        default:
            return initialState
       }



}