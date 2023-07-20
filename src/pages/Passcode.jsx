import React from 'react';
import {useState,useEffect} from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiOutlineMail} from 'react-icons/ai';
import { useNavigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import { Formik,Form as FormikForm } from 'formik';
 import * as Yup from 'yup';

 const SignupSchema2 = Yup.object().shape({
  emailId: Yup.string().email('Invalid email').required('Please enter a valid Email'),
});

function Passcode() {
  const [modalShow, setModalShow] =useState(false);
  const [modalsShow, setModalsShow] =useState(false);
  const [loader,setLoader]=useState(false);
 
  const [passCode, setPassCode] = useState('');
  const a=useNavigate();
  const navigator=useNavigate();
 
let b=localStorage.getItem('message');
console.log(b);
    useEffect(() => {
        toast.success(b, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        localStorage.clear();
      },[b])
  function submit2(values){
   setLoader(true);
const profile1={
  "businessId":"4",
  "emailId": values.emailId

}

axios.post('https://rehntitapistaging.azurewebsites.net/api/Auth/ForgotPasscode',profile1)
.then(function (response) {
  console.log(response);
  setLoader(false);
  setModalShow(false)
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
setLoader(false)
});
  // setEmail({emailId:''})
    
    
  }
  let passcodeVal = '';
  const handleClick = (val) => {
    if(passCode.length > 5) return;
    passcodeVal = passCode+val;
    setPassCode(passcodeVal)
   
  }

  const handleSubmit=()=>{
    setLoader(true);
    const payload = {
      businessId: 4,
      passcode: passCode, 
    }
    // console.log(payload)
  
    axios.post("https://rehntitapistaging.azurewebsites.net/api/Auth/Passcode",payload)
    .then((res)=>{
      setLoader(false);
      console.log(res);
      // toast.success("Submit Successfully")
      localStorage.setItem('keys',res.data.responseMessage);
      a("/Location");
      
    })
    
    .catch((error) =>{
      setLoader(false);
      if(error){
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
      }
    })
    
  }

  const passcodeTemplate = [];
  for(let i = 1; i <= 6; i++) {
    const length = passCode.length;
    console.log(passCode, length);
    let addClass = '';//(i === length || i < length) ? 'active' : '';
    if(i === length || i < length) {
      addClass = 'active';
    }else {
      addClass = '';
    }
    passcodeTemplate.push(
    <small className={`circles ${addClass}`}  ></small>
    // <div className='' style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',opacity:'0.3'}}></div>
    )
  };
  
  const reset = () => {
    setPassCode('')
  };

  function confirmed(){
    navigator('/Login');
    setModalsShow(false);

  }

  function MyVertically1CenteredModal(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className='popupHeader'>
          
        </Modal.Header>
        <Modal.Body>
         
          <p style={{color:'red'}}>
          Are you sure you want to log out of the main application? You will need the master account to re-login.
          </p>
          <div className='modalButton' style={{textAlign:'center'}}>
          <Button className='backButton' style={{borderRadius:'30px'}} variant='dark' onClick={props.onHide}>Cancel</Button>
          <Button onClick={confirmed} className='backsButton' variant='danger' style={{marginLeft:'20px',borderRadius:'30px'}}>Confirm</Button>
          </div>
        </Modal.Body>
      </Modal>
    );
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
            Reset Passcode
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <Form noValidate validated={validated} onSubmit={submit2}   >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter email to reset passcode</Form.Label>
        <Form.Control type="email" placeholder="E-mail Address" required onChange={(e)=>{handleChange1(e)}} name='emailId' value={email.emailId} />
      </Form.Group>
      <div className='modalButton'>
      <Button className='sendButton' type='submit' variant='danger' style={{borderRadius:'20px',height:'36px',width:'60px'}} >
        {!loader ? <span>Send</span> : 
        <Spinner style={{position:'absolute',bottom:'23px',left:'38px'}} animation="border" size="sm" />
          }
         </Button>
      </div>
    </Form> */}
    <Formik
       initialValues={{
         emailId: '',
       }}
       validationSchema={SignupSchema2}
       onSubmit={submit2}
     >
       {({ errors,values,handleChange }) => (
         <FormikForm className="px-3"  >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter email to reset password</Form.Label>
           {/* <Field  type="email" placeholder='E-mail Address' style={{width:'100%',borderRadius:'30px'}} onChange={(e)=>{handleChange1(e)}} name='emailId' value={email.emailId}  /> */}
           <Form.Control
              
                placeholder="E-mail address"
                value={values.emailId}
               onChange={handleChange}
                name="emailId"
                 
              />
            <div style={{color:'red'}}>{errors.emailId}</div> 
           {/* <button style={{backgroundColor:'#f54952',width:'60px',height:'30px',borderRadius:'30px',marginTop:'4px',border:'1px solid #f54952',color:'white'}}  type="submit">Send</button> */}
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
  
  return (
    <div className='passcode'>
    <Card style={{ width: '30rem',border:'0px',boxShadow:'3px 5px 23px 16px whitesmoke',borderRadius:'15px',cursor:'pointer' }}>
        <div className='image' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px'}}>
      <Card.Img variant="top" src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" style={{height:'80px',width:'80px'}} />
      </div>
      <Card.Body>
        <Card.Title style={{textAlign:'center',fontSize:'15px',fontWeight:'normal'}}>Enter Passcode</Card.Title>
        <div classname='passcode'style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
             {passcodeTemplate}
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',backgroundColor:'white'}} 
                name="1" onClick={() => handleClick('1')}>1
                    </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="2" onClick={() => handleClick('2')}>2
                </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="3" onClick={() => handleClick('3')}>3
                </button>
           
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',backgroundColor:'white'}}
                name="4" onClick={() => handleClick('4')}>4
                    </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="5" onClick={() => handleClick('5')}>5
                </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="6" onClick={() => handleClick('6')}>6
                </button>
           
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',backgroundColor:'white'}}  
                name="7" onClick={() => handleClick('7')}>7
                    </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="8" onClick={() => handleClick('8')}>8
                </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="9" onClick={() => handleClick('9')}>9
                </button>
           
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <button style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'white',border:'0px',color:'red'}} onClick={reset}>Clear
                    </button>
                <button className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px',backgroundColor:'white'}} 
                name="0" onClick={() => handleClick('0')}>0
                </button>
                <button style={{width:'60px',height:'60px',marginLeft:'30px',borderRadius:'50%',border:'0px',backgroundColor:'white',color:'red'}}>Delete
                </button>
        </div>
         <div className='back' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
        <Button className='backButton' variant='dark' type="submit" style={{borderRadius:'20px',width:'90px',border:'1px solid #280659'}}
        onClick={() => setModalsShow(true)}
        >Back</Button>
         <MyVertically1CenteredModal
        show={modalsShow}
        onHide={() => setModalsShow(false)}
      />
         <Button className='confirm' variant='danger' style={{borderRadius:'20px',width:'90px',border:'1px solid #f54952',marginLeft:'30px'}} type="button" onClick={()=>handleSubmit()} >
         {!loader ? <span>Confirm</span>:<Spinner style={{height:'20px',width:'20px',borderRadius:'50%'}}/>}
         </Button>
         </div>

         <div style={{display:'flex',justifyContent:'center',align:'center',marginTop:'15px'}}>
            {/* <a href='/' style={{textDecoration:'none',color:'#f54952'}}>Forgot Passcode?</a> */}
            <Button   onClick={() => setModalShow(true)} style={{textDecoration:'none',color:' #f54952',backgroundColor:'white',border:'0px'}}>
        Forgot Passcode?
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
         </div>
       <div style={{display:'flex',justifyContent:'space-between',marginTop:'30px'}}>
        <div>
        <AiOutlineMail/><a href='/' style={{marginLeft:5,textDecoration:'none',color:'black'}}>Email Login</a>
        </div>
        <div>
        <button  onClick={() => setModalsShow(true)} style={{color:'#ae2d68',border:'0px',backgroundColor:'white'}}>Exit Main App</button>
       </div>
       </div>
       

      </Card.Body>
    </Card>
    <ToastContainer
position="bottom-right"
autoClose={5000}
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

export default Passcode;