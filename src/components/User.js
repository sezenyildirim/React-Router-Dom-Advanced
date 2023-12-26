import { useParams, Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios  from "axios";

function User(){
    const [user,setUser] = useState({});
    const [loading, setLoading] = useState(true);


    const {id} = useParams();

    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data)
        ).finally(() => setLoading(false));
    },[id])
    return <div>
        <h1>User Detail</h1>
        {loading && <div>...Loading</div>}
{!loading && <code>
            {JSON.stringify(user)}
        </code>}
        
<br/>
<br/>
<br/>


       <Link to={`/users/${parseInt(id) + 1}`}>Next User</Link>
        </div>;
}
export default User;