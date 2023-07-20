import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ResetPassword(){
    return(
        <>
         <div className='resetPassword'>
    <Card style={{ width: '28rem',border:'0px',boxShadow:"3px 5px 23px 16px whitesmoke",borderRadius:'15px',cursor:'pointer' }}>
       <h4 style={{textAlign:'center',marginTop:'15px'}}>Reset Password</h4>
      <Card.Body>
      <Form>
      <Form.Group className="mb-3" controlId="validationCustom01">
        <Form.Label>New Password </Form.Label>
        <Form.Control type="password" placeholder="Enter Your New Password" 
        style={{borderRadius:'30px'}}

        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Confirm New Password </Form.Label>
        <Form.Control type="password" placeholder="Confirm Password"
        style={{borderRadius:'20px'}}
        
        />
      </Form.Group>

      <div className='loginButton' style={{display:'flex',justifyContent:'center'}}>
        <Button className='button'variant="danger" type="submit"  style={{borderRadius:'20px',width:'150px',height:"36px",border:'1px solid #f54952'}}>Reset Password</Button>
        </div>
      
      </Form>
    
      </Card.Body>
    </Card>
    
    
    </div>
        </>
    )
}

export default ResetPassword;