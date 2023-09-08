import {useState} from 'react';
import axios from "axios";
export default function Form(){
    //States for registration
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // States for checking the errors
    const[submitted, setSubmitted] = useState(false);
    const[error,setError]  = useState(false);

    //Handling the name change
    const handleName = (e)=>{
        setName(e.target.value);
        setSubmitted(false);
    }

    //Handling the Email change
    const handleEmail = (e)=>{
        setEmail(e.target.value);
        setSubmitted(false);
    }
    //Handling the Email change
    const handlePassword = (e)=>{
        setPassword(e.target.value);
        setSubmitted(false);
    }
    //Handling the Email change
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(name === '' || email === '' || password === ''){
            setError(true);
        }else{

            // connect with backend server
            axios
            .post("http://localhost:8080/user",{
                "userName": name,
                "email": email,
                "password":password,
            })
            .then((res) =>{
                console.log(res.data)
                setError(false);
                setSubmitted(true);
            });
            
        }
        
    }
    const successMessage = ()=>{
        return(
            <div className="success"
            style={{display:submitted?'':'none'}}>
                <h1>User {name} successfully registered</h1>

            </div>
        );
    }
    const errorMessage = ()=>{
        return(
            <div className="error"
            style={{display:error?'':'none'}}>
                <h1>Please enter all the fields</h1>

            </div>
        );
    }

    return(
        <div className = "form">
            <div><h1> User Registration</h1></div>
            {/* calling to the methods*/}

            <div className = "messages">
                {errorMessage()}
                {successMessage()}
            </div>
            <form>
                {/* Labels and inputs for form data*/}
                <label className='label'>Name</label>
                <input onChange={handleName} className='input' value={name} type='text'></input>

                <label className='label'>Email</label>
                <input onChange={handleEmail} className='input' value={email} type='email'></input>

                <label className='label'>Password</label>
                <input onChange={handlePassword} className='input' value={password} type='password'></input>
            
                <button onClick={handleSubmit} className='btn' type='submit'>Submit</button>
            </form>

        </div>

    );


}