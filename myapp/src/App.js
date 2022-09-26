import "./App.css";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContacts } from './Actions/contactsActions'

function App() {
    const contacts = useSelector(state => state.contactsReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
    }, [])
    return (
        <div className="App">
            {
                contacts.map(el => {
                    <div>
                        <h6>{el.firstName}</h6>
                        <h6>{el.lastName}</h6>
                        <h6>{el.email}</h6>
                        <h6>{el.password}</h6>

                    </div>

                })
            }
        </div>
    );

}
export default App;
