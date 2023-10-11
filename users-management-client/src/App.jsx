import { useEffect, useState } from "react";

const App = () => {

  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5300/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])


  const handleAddUser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user);

    fetch('http://localhost:5300/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

  return (
    <div>
      <h1>Users Management System</h1>
      <h3>Nummbers of users: {users.length}</h3>

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="add user" />
      </form>

      <div>
        {
          users.map(user => <li key={user.id}>{user.id} : {user.name} : {user.email}</li>)
        }
      </div>
    </div>
  );
};

export default App;