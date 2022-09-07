const UserCard = ({color, user}) => {

    const getFullName = () => user.name.first + " " + user.name.last

    return (
        <div style={{backgroundColor: color}} className="user-card">
            <div className="user-card__container">
                <img className="user-card__image" src={user.picture.large} alt={getFullName()}/>
                <div className="user-card__info">
                    <h2 className="user-card__name">{getFullName()}</h2>
                    <p>{"Age: "}{user.dob.age}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
