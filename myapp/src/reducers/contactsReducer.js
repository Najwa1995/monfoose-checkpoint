const contactsReducer =(state=[],{type,payload})=>{
    switch (type){
        case "GET_CONTACTS":return payload
           
        default:
                return state
    }
}

export default contactsReducer