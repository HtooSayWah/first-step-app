import {useState} from 'react';
import axios from "axios";
import '../css/style.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
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
        console.log(" I am in the handleSubmit function ")
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
            <div>      
              <p> this is submitted value {submitted}</p>         
              {submitted?
                <Alert key="success" variant="success">
                  <h1>User {name} successfully registered</h1>
                </Alert>: <b></b>
              }
            </div>
            
            
        );
    }
    const errorMessage = ()=>{
        return(
            <div>   
              <p> this is submitted value {submitted} </p>               
            {error?
              <Alert key="danger" variant="danger">
                <h1>Please enter all the fields</h1>
              </Alert>: <b></b>
            }
          </div>
        );
    }

    return(
   
      <div className = "form">
      <div><h1> User Registration</h1></div>
      {/* calling to the methods*/}

      <div className = "messages">
        {successMessage()}
        {errorMessage()}
      </div>
      <form>
          {/* Labels and inputs for form data*/}
          <label className='label'>Name</label>
          <input onChange={handleName} className='input' value={name} type='text'></input>

          <label className='label'>Email</label>
          <input onChange={handleEmail} className='input' value={email} type='email'></input>

          <label className='label'>Password</label>
          <input onChange={handlePassword} className='input' value={password} type='password'></input>
      
          
          <Button onClick={handleSubmit} className='btn' type='submit' variant="primary">Submit</Button>{' '}
      </form>

  </div>


    );


}