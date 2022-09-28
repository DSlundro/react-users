import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";


const Form = (props) => {

    let nameInputRef = useRef();
    let ageInputRef = useRef();

    const [error, setError] = useState()

    const addUserHandler = (e) => {
        e.preventDefault();
        
        // REFT
        let refName = nameInputRef.current.value;
        let refAge = ageInputRef.current.value;

        console.log(refName, refAge);

        if(!refName.trim() || !refAge.trim()) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            console.log(error);
            return;
        }
        if(+refAge < 1) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a number > 0.'
            })
            console.log(error);
            return;
        }

        props.onAddUser(refName, refAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div className='flex justify-center'>

            {
                error && 
                <ErrorModal 
                    title={error.title} 
                    message={error.message}
                    onConfirm={errorHandler}
                />
            }

            <form 
            onSubmit={addUserHandler}
            className="flex-col bg-white p-5 rounded-xl w-full max-w-xl font-bold">
                <div id="username" className='flex-col py-3'>
                    <label>Username</label>
                    <div>
                        <input 
                            type="text" 
                            ref={nameInputRef} 
                        />
                    </div>
                </div>

                <div id="age" className='flex-col py-3'>
                    <label>Age (Years)</label>
                    <div>
                        <input 
                            type="number" 
                            ref={ageInputRef}
                        />
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