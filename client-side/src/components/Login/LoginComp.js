import { Form, Button, Container} from "react-bootstrap";
import validateSignIn from "../../helpers/LoginHelper";
import { toast } from "react-toastify";

const notify = (message) => toast(message)
function Login({ clickHandler=f=>f}){
    return <Container>
        <h1>Login To Customers Management</h1>
        <p>Log in to our site with your account and create your cards!</p>
         <Form>
 <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email Address</Form.Label>
       <Form.Control type="email" />
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password"  />
     </Form.Group>
     <br></br>
     <Button variant="primary" type="submit"  onClick={(e)=>{
       
         e.preventDefault();
        var error = validateSignIn('formBasicEmail', 'formBasicPassword')
        if(typeof validateSignIn==='string')
        {
        
          notify(error)
        }
        else
        {
          
          clickHandler({
            email:document.getElementById('formBasicEmail').value,
            password:document.getElementById('formBasicPassword').value
          });
        }
         
     }}>
      Login
     </Button>
    
   </Form>
</Container>
}
export default Login;

