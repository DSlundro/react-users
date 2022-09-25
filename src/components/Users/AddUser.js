import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";


const Form = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    const addUserHandler = (e) => {
        e.preventDefault();
        if(!enteredUsername.trim() || !enteredAge.trim()) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            console.log(error);
            return;
        }
        if(+enteredAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a number > 0.'
            })
            console.log(error);
            return;
        }
        setEnteredUsername('');
        setEnteredAge('')
        props.onAddUser(enteredUsername, enteredAge)
    }

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div className='flex justify-center'>

            {
                error && 
                <ErrorModal 
                onErrorHandler={errorHandler}
                title={error.title} 
                message={error.message}/>
            }

            <form 
            onSubmit={addUserHandler}
            className="flex-col bg-white p-5 rounded-xl w-full max-w-xl font-bold">
                <div id="username" className='flex-col py-3'>
                    <label>Username</label>
                    <div>
                        <input type="text" 
                        value={enteredUsername}
                        onChange={usernameChangeHandler} />
                    </div>
                </div>

                <div id="age" className='flex-col py-3'>
                    <label>Age (Years)</label>
                    <div>
                        <input type="number" 
                        value={enteredAge}
                        onChange={ageChangeHandler} />
                    </div>
                </div>

                <div>
                    <button
                    className='bg-purple-800 hover:bg-purple-600 text-white px-6 py-1 rounded-md'
                    type="submit"
                    >Add User</button>
                </div>
            </form>
        </div>
    )
}
export default Form;