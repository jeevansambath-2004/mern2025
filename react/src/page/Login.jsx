import React,{ useState } from 'react'

const Login= ({ users }) => {
    const [name, setname] = useState('');
    const [password,setPassword] = useState('');        
    const [result,setResult] = useState('');
    
    function login() {
        if(name === users.username && password === users.password){
            setResult('Login Successful');
        } else {
            setResult('Login Failed');
        }   
    }

    return (
        <div>
            <h1>Login Form</h1>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={login}>Login</button>
            <h3>{result}</h3>
        </div>
    );
};
export default Login;