import '../css/Login.css'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    async function handleLogin(){
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if(result.email){
            localStorage.setItem("user",JSON.stringify(result));
            alert("Hi, Welcome to Live-Ops");
            navigate("/offers");
        }
        else{
            alert("Invalid Credentials!");
        }
    }

    return(<>
        <Navbar />
        <div className='login'>
            <h1>Login</h1>
            
            <input type='text' placeholder='Enter E-Mail' onChange={(e)=>{
                setEmail(e.target.value);
            }} value={email}/>
            <input type='password' placeholder='Enter Password' onChange={(e)=>{
                setPassword(e.target.value);
            }} value={password}/>
            <button onClick={handleLogin}>Login</button>
            <br />
            <div className='info'>
                <p>Please use the following credentials for login</p>
                <h3>Email: test@test.com</h3>
                <h3>Password: test123</h3>
            </div>
            
        </div>
        <Footer />
    </>)
}