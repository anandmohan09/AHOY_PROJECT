import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../index.css';
function Login() {
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] =useState(false);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const[handleClose,sethandleClose]=useState(false)
  const userdata={
    emailId:'',
    password:''
  }
  
  const[data,setData] =useState(userdata)
  // const navigate=useNavigate();
  function handleChange(e){
    const {name,value}=e.target;
    setData({...data,[name]:value});
    console.log(data);
  }
var navigate = useNavigate();
  // const n=useNavigate();

  function submit(event){
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation();
      setValidated(true);
      // return;
    }
    else {
      
            setValidated(true);
            navigate("/Passcode");
    //         const userdata1={
    //   EmailId : data.email,
    //   password:data.password
    // }
    // n("/Passcode");

const proData={
  "businessId": "4",
  "emailId": data.emailId,
  "applicationId": "58",
  "password": data.password,
  "ipAddress": "string",
  "rememberMe": true,
  "isEmployee": true

}

    axios.post("https://rehntitapistaging.azurewebsites.net/api/Auth/Login", proData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      })
      // console.log(userdata1)

    }


  }
  function submit1(event){
    
    const form1 = event.currentTarget;
    if (form1.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation();
      setValidated(true);
      // return;
    }
    else{
      event.preventDefault()
    setValidated(true);
    setModalShow(false)

    console.log("mohan")
    // navigate('/');

    }
    
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='popupHeader'>
          <Modal.Title id="contained-modal-title-vcenter">
            Reset Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  noValidate validated={validated} onSubmit={submit1}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter email to reset password</Form.Label>
        <Form.Control type="email" placeholder="E-mail Address" required />
      </Form.Group>
      <Button type='submit' variant='danger' style={{borderRadius:'30px'}} 
      // onClick={props.onHide}
      // onClick={handleClose}
      >Send</Button>
    </Form>
        </Modal.Body>
       
          
      </Modal>
    );
  }
    
  return (
    <div className='login'>
    <Card style={{ width: '28rem',border:'0px',boxShadow:"3px 5px 23px 16px whitesmoke",borderRadius:'15px',cursor:'pointer' }}>
        <div className='image' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px'}}>
      <Card.Img variant="top" src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" style={{height:'80px',width:'80px'}} />
      </div>
      <Card.Body>
      <Form noValidate validated={validated} onSubmit={submit}>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Email Address" 
        required
        style={{borderRadius:'30px'}}
        onChange={(e)=>{handleChange(e)}}
        name='emailId'
        value={data.emailId} 
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" placeholder="Password"
        required
        style={{borderRadius:'20px'}}
        onChange={(e)=>{handleChange(e)}} 
        name='password'
        value={data.password}
        />
      </Form.Group>
      <Row >
            <Col sm={6} >
            <Form.Check
            type="checkbox"
            id="autoSizingCheck2"
            label="Remember me"
          />
            </Col>
            <Col sm={6} style={{textAlign:'end'}} >
                {/* <a href='/' style={{textDecoration:'none',color:' #f54952'}}>Forgot Password?</a> */}
                <Button   onClick={() => setModalShow(true)} style={{textDecoration:'none',color:' #f54952',backgroundColor:'white',border:'0px'}}>
        Forgot Password?
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
            </Col>
        </Row>
      <Row>
        <Col sm={12} style={{textAlign:'end'}}>
        <Form.Group className="mt-4" controlId="exampleForm.ControlInput1">
          <div className='loginButton'>
        <Button className='button'variant="danger" type="submit" style={{borderRadius:'20px',width:'90px',border:'1px solid #f54952'}}>Log In</Button>
        </div>
            </Form.Group>
        </Col>
      </Row>
    </Form>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Login;

// function Login() {
//   return (
    
//   );
// }

// export default Login;