import axios from "axios";
export const getContacts = () => (dispatch) => {
    axios.get('/contacts').then((response) => {
        dispatch({
            type: "GET_CONTACTS",
            payload: response
        })
    })

}