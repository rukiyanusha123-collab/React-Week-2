import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Profile() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Profile</h2>

      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;