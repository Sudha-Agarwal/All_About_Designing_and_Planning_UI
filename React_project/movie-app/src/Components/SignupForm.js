import React, { useState, useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const navigate = useNavigate();

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[name,setName] = useState('');
    const[message,setMessage] = useState('');

    const handleSignup = async() => {
        try{

        if(!username || !password || !name){
            setMessage("Please fill in all required fields");
            return;
        }

        const response = await fetch('http://localhost:3000/signup', {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                username,
                password,
                name
            })
        });

        //parse the json response
        const data = await response.json();
        console.log(data);

        if(data.success){
            setMessage('User registered successfully');
            navigate('/login');
        }
        else{
            setMessage('User regiteration failed')
        }
    }
    catch(error){
        console.log('Error during signup ' + error)
    }
}

return(
    <div>
        <h2>SignUpForm</h2>
        <form>
            <div className='container'>
                <div className='mb-3'>
                    UserName: <input type='text' className='form-control'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    password: <input type='password' className='form-control'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    Name: <input type='text' className='form-control'
                    value={name}
                    onChange={(e) => setName(e.target.value)} required />
                </div>

                <button onClick={handleSignup}>Sign Up</button>

            </div>
        </form>
        {message && <p>{message}</p>}
    </div>
)
};
export default SignUpForm;