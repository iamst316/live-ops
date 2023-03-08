import '../css/Login.css'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export default function(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    async function handleLogin(){
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body: JSON.stringify({email,password}),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        if(result.name){
            localStorage.setItem("user",JSON.stringify(result));
            alert("hi");
            // navigate("/offers",{replace: true});
        }
        else{
            alert("Invalid Credentials!");
        }
    }

    return(
        <div>
            <h1>Login</h1>
            
            <input type='text' placeholder='Enter E-Mail' onChange={(e)=>{
                setEmail(e.target.value);
            }} value={email}/>
            <input type='password' placeholder='Enter Password' onChange={(e)=>{
                setPassword(e.target.value);
            }} value={password}/>
            <button onClick={handleLogin}>Login</button>
            
        </div>
    )
}