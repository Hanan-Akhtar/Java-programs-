import React, { useState } from 'react';
const Question14 = () => {
    const users = [
        { email: 'hanan@gmail.com', password: '1122' },
        { email: 'akhtar@gmail.com', password: '1122' },
      
    ];
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const HandleLogin = (e) => {
        e.preventDefault()
        const user = users.find((user) => user.email === email && user.password === password);
        if (user) {
            alert('Login successful!');

        } else {
            alert('Wrong email or password. Please try again.');
        }
    }
    return (
        <div>
            <h1></h1>
            <div >
                <form onSubmit={HandleLogin}>
                    <h2> Login to your Account</h2>
                    <input type="email" style={{ margin: 5 }} value={email} placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} required></input> <br />
                    <input type="password" style={{ margin: 5 }} value={password} placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required></input> <br />
                    <button className="btn btn-warning" type="submit" style={{ margin: 10 }}>submit</button>
                </form>
            </div>
            <hr />
        </div>
    );
}

export default Question14;