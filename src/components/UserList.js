import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const COLORS = [
    "#0984e3",
    "#e17055",
    "#636e72",
    "#e84393",
    "#55efc4",
    "#6c5ce7",
];

const URL = "https://randomuser.me/api?results=12";

const UserList = props => {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getUsers = async () => {
            return await axios.get(URL);
        };
    
        getUsers().then(response => {
            setUsers(response.data.results);
        }).catch(error => {
            setError(true);
        });
    }, []);

    const getContent = () => {
        if (error) {
            return (<div className="error">Something went wrong fetching the users</div>);
        }

        if (users.length > 0) {
            return users.map((user, index) => <UserCard color={COLORS[index % 6]} key={index} user={user} />);
        } else {
            return (<div className="loading">Loading...</div>);
        }
    };

    return (
        <div className="user-list">
            {getContent()}
        </div>
    );
};

export default UserList;
