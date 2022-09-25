import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from 'react';

function App() {
  const [usersList, setUsersList] = useState([]);

  const setUsersListHandler = (userName, userAge) => {
    setUsersList((user) => {
      return [...user, {name: userName, age: userAge, id: Math.ceil(Math.random()*1000000)}]
    })
  }



  return (
    <section className='flex-col'>
      <AddUser onAddUser={setUsersListHandler}/>
      <UsersList users={usersList}/>
    </section>
  );
}

export default App;
