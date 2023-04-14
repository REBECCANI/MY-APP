import { useEffect, useState } from "react";
import DataList from "../list";

function Items(){
    const[userData, setUserData] = useState(null);

    useEffect(() => {

        const getUsers = async() => {
            try{
                const resp = await fetch('https://api.github.com/users');
                const data = await resp.json();
                setUserData(data)
                console.log(data)
    
            } catch (error){
                console.error(error)
            }
        };
    getUsers();
    }, []);

function displayProfile(){
    if(userData === null){
        return<div>Loading......</div>;
    }
return(
    <div>
    <DataList/>
    <div className="majordiv">
        <h1>Github users</h1>
        <div className="holder">
        {userData.map((user) =>
            <div className="usersdiv">
                <div key={user.id}>
                    <img src={user.avatar_url} alt={user.login}/>
                    <h1>{user.login}</h1>
                </div>
            </div>
        )}
        </div>   
    </div>    
    </div> 
);
}
return <div>{displayProfile()}</div>
}
export default Items;