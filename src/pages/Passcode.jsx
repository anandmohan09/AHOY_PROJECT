import React from 'react';
import {useState} from 'react';
import '../index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {AiOutlineMail} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Passcode() {
  const [modalShow, setModalShow] =useState(false);
  const a=useNavigate();
  function submit(){
    // e.preventDefault();
    a("/Location");
    console.log("submitting passcode")
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
        <Form   >
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter email to reset passcode</Form.Label>
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
    <div className='passcode'>
    <Card style={{ width: '30rem',border:'0px',boxShadow:'3px 5px 23px 16px whitesmoke',borderRadius:'15px',cursor:'pointer' }}>
        <div className='image' style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100px'}}>
      <Card.Img variant="top" src="https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928" style={{height:'80px',width:'80px'}} />
      </div>
      <Card.Body>
        <Card.Title style={{textAlign:'center',fontSize:'15px',fontWeight:'normal'}}>Enter Passcode</Card.Title>
        <div classname='passcode'style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',opacity:'0.3'}}></div>
            <div style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',marginLeft:'10px',opacity:'0.3'}}></div>
            <div style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',marginLeft:'10px',opacity:'0.3'}}></div>
            <div style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',marginLeft:'10px',opacity:'0.3'}}></div>
            <div style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',marginLeft:'10px',opacity:'0.3'}}></div>
            <div style={{width:'15px',height:'15px',borderRadius:'50%',border:'1px solid black',marginLeft:'10px',opacity:'0.3'}}></div>
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%'}}>
                    <p style={{lineHeight:'50px',textAlign:'center'}}>1</p>
                    </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>2</p>
                </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>3</p>
                </div>
           
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%'}}>
                    <p style={{lineHeight:'50px',textAlign:'center'}}>4</p>
                    </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>5</p>
                </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>6</p>
                </div>
           
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%'}}>
                    <p style={{lineHeight:'50px',textAlign:'center'}}>7</p>
                    </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>8</p>
                </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>9</p>
                </div>
           
        </div>
        <div className='circle' style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                <div style={{width:'50px',height:'50px'}}>
                   <a href='/' style={{lineHeight:'50px',textDecoration:'none',color:'#f54952'}}>clear</a>
                    </div>
                <div className='circleButton' style={{width:'50px',height:'50px',border:'1px solid gainsBoro',borderRadius:'50%',marginLeft:'30px'}}>
                <p style={{lineHeight:'50px',textAlign:'center'}}>0</p>
                </div>
                <div style={{width:'50px',height:'50px',marginLeft:'30px'}}>
                <a href='/' style={{lineHeight:'50px',textDecoration:'none',color:'#f54952'}}>delete</a>
                </div>
        </div>
         <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
       <Link to='/Login'>  <Button type="submit" style={{backgroundColor:' #280659',borderRadius:'20px',width:'90px',border:'1px solid #280659'}}>Back</Button></Link>
         <Button type="submit" style={{backgroundColor:' #f54952',borderRadius:'20px',width:'90px',border:'1px solid #f54952',marginLeft:'30px'}} onClick={submit}>Confirm</Button>
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
        <a href='/' style={{textDecoration:'none',color:'#ae2d68'}}>Exit Main App</a>
       </div>
       </div>
       

      </Card.Body>
    </Card>
    </div>
  );
}

export default Passcode;