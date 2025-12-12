import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [input, setInput] = useState({
  email:"",
  password:""
});

}
function onChangeHandler(event){
  const{name, value} = event.target;
  setInput(input=>({...input, [name]:value}));
  console.log(name, value);
}

function onSubmitHandler(event) {
  event.preventDefault();
  alert("Form Submited");
}
