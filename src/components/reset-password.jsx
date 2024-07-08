import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUsersData} from '../DummyData.js';
import '../App.css';

const ResetPassword = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const data = getUsersData();
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.length < 8){
            setMessage('Password must be at least 8 characters');
            displayMessage();
            return;
        }

        if(password !== confirmPassword){
            setMessage('Passwords do not match');
            displayMessage();
            return;
        }   
        
        
        const userIndex = data.findIndex((user) => user.email === email);
        if (userIndex !== -1) {
            data[userIndex].password = password;
            localStorage.setItem('usersData', JSON.stringify(data));
            setMessage('Password reset successful');
        } else {
            setMessage('User not found');
        }
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
        displayMessage();
    
        if(!localStorage.getItem('usersData')){
            localStorage.setItem('usersData', JSON.stringify(data));
        }
    }

    const displayMessage = () => {
        setEmail('');
        setPassword('');
        setConfirmPassword('');
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
                            placeholder="Enter a new Password"
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Confirm your Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            style={{ width: '50%' }}
                        >Reset
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <a href="/sign-up" className="btn btn-link">Sign Up</a>
                        <a href="/" className="btn btn-link">Login</a>
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

export default ResetPassword;
