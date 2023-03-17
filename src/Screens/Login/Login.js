import './login.css';
import { Form, Input, Button, Typography } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Login() {
    const[username, usernameUpdate] = useState('');
    const[password, passwordUpdate] = useState('');

    const usernavigate=useNavigate();

    const proceedLogin = (e) =>{
        // e.preventdefault();
        if(validate()){
            console.log('Login succeeded');
            usernavigate('/dashboard');
        }
      }

    const validate=()=>{
        let result = true;
        if(username===''|| username ===null){
            result=false;
            alert('Please enter username');
        }
        if(password===''|| password === null){
            result=false;
            alert('Please enter password');
        }
        return result;
    }

    return (
        <div className="main">
            <div className='loginCard'>
                <h1 className='headerName'>Login</h1>
                <p className='content'>Enter your credentials for login</p>
                <div className='usernamePH'>
                <Input value={username} onChange={e=>usernameUpdate(e.target.value)} type='text' placeholder='Enter your username'/>
                </div>
                <div className='passwordPH'>
                <Input value={password} onChange={e=>passwordUpdate(e.target.value)} type='password' placeholder='Enter your password'/>
                </div>
                <div className='loginBtn'>
                    <button className='btn' onClick={proceedLogin}>Login</button>
                </div>
                

                
            </div>
           
         </div>
    );
}

