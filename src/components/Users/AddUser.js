import { useState } from "react";


const Form = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (e) => {
        e.preventDefault();
        if(!enteredUsername.trim() || !enteredAge.trim()) return
        if(enteredAge < 1) return
        console.log(enteredUsername, enteredAge);
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

    return (
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
                    min='1'
                    value={enteredAge}
                    onChange={ageChangeHandler} />
                </div>
            </div>

            <div>
                <button
                className='bg-purple-800 text-white px-6 py-1 rounded-md'
                type="submit"
                >Add User</button>
            </div>
        </form>
    )
}
export default Form;