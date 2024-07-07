import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUsersData} from '../DummyData.js';
import '../App.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const data = getUsersData();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = data.find((user) => user.email === email);
        if(user){
            if(user.password === password){
                setMessage('Login successful');
                window.location.href = '/landing';
            } else {
                setMessage('Incorrect password');
            }
        } else {
            setMessage('User not found');
        }
        setEmail('');
        setPassword('');
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="card p-4 shadow-sm" style={{ backgroundColor:"#7de5fa", maxWidth: '600px', width: '100%' }}>
                <h1 className="mb-4 p-2 text-white">WISH lite user</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="form-group">
                            <input 
                            type="email" 
                            className="form-control" 
                            id="exampleInputEmail1" 
                            placeholder="Enter email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <input 
                            type="password" 
                            className="form-control" 
                            id="exampleInputPassword1" 
                            placeholder="Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            style={{ width: '50%' }}
                        >Login
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <a href="/sign-up" className="btn btn-link">Sign Up</a>
                        <a href="/reset-password" className="btn btn-link">Forgot Password</a>
                    </div>
                </form>
                {showMessage && (
                    <div className="message-container">
                        <p className='message-text'>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Login;
