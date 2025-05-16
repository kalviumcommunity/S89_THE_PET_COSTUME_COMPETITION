import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [user, setUserData] = useState({
        email: "",
        password: ""
    });

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setUserData({ ...user, [name]: value });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:3000/user/login",
                user,
                { withCredentials: true }
            );
            console.log(response.data);
            alert("User logged in successfully");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert("Something went wrong");
        }
    }

    async function handleLogout() {
        try {
            await axios.post(
                "http://localhost:3000/user/logout",
                {},
                { withCredentials: true }
            );
            alert("User logged out successfully");
        } catch (error) {
            console.error(error.response ? error.response.data : error.message);
            alert("Logout failed");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    placeholder="Enter email..."
                />
                <input
                    type="password"
                    name="password"
                    onChange={handleInput}
                    placeholder="Enter Password..."
                />
                <input type="submit" value="Login" />
            </form>
            <button onClick={handleLogout} style={{ marginTop: '10px' }}>
                Logout
            </button>
        </div>
    )
}

export default Login;