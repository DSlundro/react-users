

const Form = () => {

    return (
        <form className="flex-col bg-white p-5 rounded-xl w-full max-w-xl font-bold">
            <div id="username" className='flex-col py-3'>
                <label>Username</label>
                <div>
                    <input type="text" />
                </div>
            </div>

            <div id="age" className='flex-col py-3'>
                <label>Age (Years)</label>
                <div>
                    <input type="text" />
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