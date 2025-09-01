function UserCard({name , email , userRole}) {
      return (
        <div className="user-card">
          <h3 className="user-name">{name}</h3>
          <p className="user-email">{email}</p>
          <span className="user-role">{userRole}</span>
        </div>
      );
    }

export default UserCard;