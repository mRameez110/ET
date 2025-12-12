import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {

const [input, setInput] = useState({
  email:"",
  password:""
});


function onChangeHandler(event){

  const{name, value} = event.target;

  setInput(input=>({...input, [name]:value}));

  console.log(name, value);
}

function onSubmitHandler(event) {
  event.preventDefault();

  alert("Form Submited");
}

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: "#dedede" }}>
      <div className="w-100 p-4 border rounded shadow bg-white" style={{ maxWidth: "400px" }}>
        <Form onSubmit={onSubmitHandler}>
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="text" placeholder="Enter email" name='email' value={input.email} onChange={onChangeHandler}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' value={input.password} onChange={onChangeHandler}  />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;

