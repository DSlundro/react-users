import { useState } from "react";


const Form = () => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (e) => {
        e.preventDefault();
        console.log(enteredUsername, enteredAge);
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
        className="flex-col bg-white p-5  w-full max-w-xl font-bold">
            <div id="username" className='flex-col py-3'>
                <label>Username</label>
                <div>
                    <input type="text" onChange={usernameChangeHandler} />
                </div>
            </div>

            <div id="age" className='flex-col py-3'>
                <label>Age (Years)</label>
                <div>
                    <input type="text" onChange={ageChangeHandler} />
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