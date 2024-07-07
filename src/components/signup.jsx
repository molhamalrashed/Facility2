import React, { useState} from 'react';
import { getUsersData, addNewUser } from '../DummyData';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    const usersData = getUsersData();

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailExists = usersData.some(user => user.email === email);
        if (emailExists) {
            setMessage('Email is already used. Please use a different email.');
            eraseInput();
            return;
        }

        const userIds = usersData.map(user => user.userId);
        const maxId = Math.max(...userIds, 0); // Ensure the initial maxId is 0 if no users exist
        const newUserId = maxId + 1;

        const newUser = {
            userId: newUserId,
            firstName,
            lastName,
            gender,
            nationality,
            email,
            password
        };

    
        addNewUser(newUser);
        console.log(usersData);
        setMessage('SignUp successful!');
        eraseInput();
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    };

    const eraseInput = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
        setFirstName('');
        setLastName('');
        setGender('');
        setNationality('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="card p-4 shadow-sm" style={{ backgroundColor: "#7de5fa", maxWidth: '600px', width: '100%' }}>
                <h1 className="mb-4 p-2 text-white">Join WISH</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <select
                                className="form-control"
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nationality"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center py-3">
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            style={{ width: '50%' }}
                        >
                            SignUp
                        </button>
                    </div>
                    <div className="d-flex justify-content-between">
                        <a href="/" className="btn btn-link">Login</a>
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
};

export default SignUp;
