import { useState } from "react";
import { updateFetch, deleteFetch } from "../utlis";
import { Link } from "react-router-dom";
import "../css/app.css";

const Account = ({ setter, user }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const updateObj = { username, email, password };
    for (const key in updateObj) {
      if (!updateObj[key]) {
        delete updateObj[key];
      }
    }
    await updateFetch({ username: user }, updateObj, setter);
  };

  return (
    <div classname="AppStyles">
      <div classname="ContentStyled">
        <h1>Account</h1>
        <form onSubmit={submitHandler}>
          <h2>Update Profile</h2>
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <button type="submit">Update</button>
        </form>
        <button onClick={() => deleteFetch(setter)}>Delete Account</button>

        <button
          onClick={() => {
            setter();
            localStorage.removeItem("myToken");
          }}
        >
          <Link to="/">Log Out</Link>
        </button>
      </div>
    </div>
  );
};

export default Account;
