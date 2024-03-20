import React from "react";


function Login() {
    return (
        <div>
            <h2>Enter</h2>
            <form>
                <label htmlFor="username">Log in: </label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password"/>
            </form>
        </div>
    )
}