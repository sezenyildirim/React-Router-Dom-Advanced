import { useEffect, useState } from "react";
import {NavLink, Routes, Route, useNavigate} from "react-router-dom";
import axios from "axios";
import User from "./User";

function Users() {
    const [users, setUsers]= useState([])
    const [loading, setLoading] = useState(true);

    const {path,url} = useNavigate();

    useEffect(() =>{
axios('https://jsonplaceholder.typicode.com/users')
.then(res => setUsers(res.data)
).finally(() => setLoading(false));
    },[]);

    return (
        <div>
            <h1>Users</h1>
            {loading && <div>...Loading</div>}
            <ul>
               {
                users.map((user)=> (
                    <li key={user.id}>
                        <NavLink to={`${url}/${user.id}`} className={(navData) => (navData.isActive ? 'active' : '')}>{user.name}</NavLink>
                    </li>
                    ))}
            </ul>


            <Routes>
        <Route path={path} element={<h3>Please select a user</h3>} />
        <Route path={`${path}/:id`} element={<User />} />
      </Routes>
        </div>
    )
  }

  export default Users;