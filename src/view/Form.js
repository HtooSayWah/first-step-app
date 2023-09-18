import {useState} from 'react';
import axios from "axios";
import '../css/style.css';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';


export default function SignUP(){
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
        
        <p>this is name {name} and {email} and {password}</p>
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
 
      
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" onChange={handleName} value={name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email"onChange={handleEmail}  value={email} placeholder="Your Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Your Password" value={password}   onChange={handlePassword} />
            </Form.Group>
            
          </Form>
          <Button onClick={handleSubmit} className='btn' type='submit' variant="primary">Submit</Button>{' '}
      </form>

  </div>


    );


}