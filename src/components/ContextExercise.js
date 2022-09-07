import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const UserListContext = createContext();

const App = props => {
    const [users, setUsers] = useState({
        Nicolas: true,
        Mary: true,
        Julia: true,
        John: true,
        Jorge: true
    });

    const numberOfOnlineUsers = Object.values(users).filter(x => x).length;

    const randomizeOneUser = (users) => {
        const names = Object.keys(users);
        const random = Math.floor(Math.random() * names.length);
        const newUsers = { ...users };
        newUsers[names[random]] = !users[names[random]];
        return newUsers;
    };

    const randomizeUsers = () => {
        setUsers(randomizeOneUser);
    };

    useEffect(() => {
        const interval = setTimeout(randomizeUsers, 5000);
        return;
    }, [users]);

    return (
        <div className="context">
            <div className="context__container">
                <h2 className="context__title">Context</h2>
                <UserListContext.Provider value={{
                    users: users,
                    numberOfOnlineUsers: numberOfOnlineUsers,
                    randomize: randomizeUsers,
                }}>
                    <div className="context__content">
                        <UserList />
                        <UserStatus />
                        <ActionButton />
                    </div>
                </UserListContext.Provider>
            </div>
        </div>
    );
}

const UserList = props => {
    const {users} = useContext(UserListContext);

    return (
        <div className="context__user-list">
            {Object.keys(users).map((key) => (
                <User key={key} name={key} />
            ))}
        </div>
    );
};

const User = ({name}) => {
    const {users, numberOfOnlineUsers} = useContext(UserListContext);
    const isOnline = users[name];
    const isAlone = isOnline && numberOfOnlineUsers == 1

    return (
        <p>{`${name}: ${isOnline ? "ONLINE" : "OFFLINE"}`}{isAlone && " and I'm all alone..."}</p>
    );
};

const UserStatus = props => {
    const {numberOfOnlineUsers} = useContext(UserListContext);

    return (
        <p>There {numberOfOnlineUsers === 1 ? "is" : "are"} currently {numberOfOnlineUsers} user{numberOfOnlineUsers !== 1 && "s"} online</p>
    );
};

const ActionButton = props => {
    const {randomize} = useContext(UserListContext);

    return (
        <button type="text" onClick={randomize}>
            Randomize now!
        </button>
    );
};

export default App;
