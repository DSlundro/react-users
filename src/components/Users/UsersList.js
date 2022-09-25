
const UsersList = (props) => {

    return (
        <ul
        className="flex-col bg-white p-5 rounded-xl my-4 w-full max-w-xl font-medium"
        >
            {props.users.map( user => 
                <li
                key={user.id}
                className='border border-zinc-200 px-3 py-1 my-2'
                >
                    <span>{user.name}</span>
                    <span className='px-2'>({user.age} years old)</span>
                </li>
                )}
        </ul>
    )
}
export default UsersList;