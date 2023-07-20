import React from 'react';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import '../index.css';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
import { Formik,Form as FormikForm } from 'formik';
 import * as Yup from 'yup';

 const SignupSchema = Yup.object().shape({
  emailId: Yup.string().email('Invalid email').required('Please enter a valid Email'),
});
const SignupSchema1 = Yup.object().shape({
  emailId: Yup.string().email('Invalid email').required('Please Enter a Valid Email'),
  password: Yup.string().required('Please Enter a Password')
  .min(8, "Pasword must be 8 or more characters")
  .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password should contain at least one uppercase and lowercase character")
  .matches(/\d/, "Password should contain at least one number")
  .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
  // .matches(/^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/,'Password should contain at least one special character')
  
});

function Login() {
  const [modalShow, setModalShow] =useState(false);
  const [loader,setLoader]=useState(false);
  
var navigate = useNavigate();
 
  function submit(values){       
            setLoader(true);

const proData={
  "businessId": "4",
  "emailId": values.emailId,
  "applicationId": "58",
  "password": values.password,
  "ipAddress": "string",
  "rememberMe":true,
  "isEmployee": true

}

    axios.post("https://rehntitapistaging.azurewebsites.net/api/Auth/Login", proData)
      .then((response) => {
        console.log(response);
        setLoader(false);
        navigate("/Passcode",
        
        );
        localStorage.setItem('message',response.data.responseMessage);
        
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        toast.error(error.response.data.responseMessage, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

          

      })
      

    
    

  }
  
  function submit1(values) {
    setLoader(true);
   
const profile={
  "businessId":"4",
  "emailId": values.emailId,

}
// setLoader(true);

axios.post('https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPassword',profile)
.then(function (response) {
  console.log(response);
  // setLoader(false);
  toast.success(response.data.responseMessage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  setModalShow(false);
  setLoader(false);

})
.catch(function (error) {
  console.log(error);
  toast.error(error.response.data.responseMessage, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  setLoader(false);

});
  // setEmail({emailId:''})
    // }
    
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
       
<Formik
       initialValues={{
         emailId: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={submit1}
     >
       {({ errors,values,handleChange }) => (
         <FormikForm className="px-3"  >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter email to reset password</Form.Label>
          
           <Form.Control
              
                placeholder="E-mail address"
                value={values.emailId}
               onChange={handleChange}
                name="emailId"
                 
              />
            <div style={{color:'red'}}>{errors.emailId}</div> 
           <span className='modalButton'> 
           <Button 
              type="submit"
              variant="danger"
              // onClick={handleClose}
              style={{height:'36px',width:'80px'}}
              className="forgetdiv rounded-pill px-3 mt-3 send "
            >
              {!loader ? <span>Send</span>:<Spinner style={{height:'20px',width:'20px',borderRadius:'50%'}}/>}
            </Button>
            </span>
           </Form.Group>
          </FormikForm>
       )}
     </Formik>



        </Modal.Body>
       
          
      </Modal>
    );
  }


//   useEffect(()=>{

//     let check  = false
//     const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
//     if( emailReg.test(data?.emailId) &&  data?.password){ 
//       check = true
//    }
// setValidatedRemember(check)

//   }, [data])
  
    
  return (
    <div className='login'>
    <Card style={{ width: '28rem',border:'0px',boxShadow:"3px 5px 23px 16px whitesmoke",borderRadius:'15px',cursor:'pointer' }}>
        <div className='image' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px'}}>
      <Card.Img variant="top" src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" style={{height:'80px',width:'80px'}} />
      </div>
      <Card.Body>
      <Formik
       initialValues={{
         emailId: '',
         password: ''
       }}
       validationSchema={SignupSchema1}
       onSubmit={submit}
     >
       {({ errors,values,handleChange }) => (
      
      <FormikForm className="px-3"  >
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Email Address" 
        style={{borderRadius:'30px'}}
        onChange={handleChange}
        name='emailId'
        value={values.emailId} 
        />
        <div style={{color:'red'}}>{errors.emailId}</div> 
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password </Form.Label>
        <Form.Control type="password" placeholder="Password"
        style={{borderRadius:'20px'}}
        onChange={handleChange} 
        name='password'
        value={values.password}
       
        />
        <div style={{color:'red'}}>{errors.password}</div> 
      </Form.Group>
      <Row >
            <Col sm={6} >
            <Form.Check
            type="checkbox"
            id="autoSizingCheck2"
            label="Remember me"
            // onClick={(e)=>{handleChange(e)}} 
            // name='rememberMe'
            // disabled={!validateRemember}
            // checked={values.rememberMe}
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
        <Button className='button'variant="danger" type="submit"  style={{borderRadius:'20px',width:'90px',height:"36px",border:'1px solid #f54952'}}>{!loader ? <span>Login</span> : 
        <Spinner style={{position:'absolute',bottom:'25px',left:'365px'}} animation="border" size="sm" />}</Button>
        </div>
            </Form.Group>
        </Col>
      </Row>
    {/* </Form> */}
    </FormikForm>
    )}
    </Formik>
      </Card.Body>
    </Card>
    <ToastContainer
position="bottom-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    
    </div>
  );
}

export default Login;
