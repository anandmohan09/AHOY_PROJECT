import React from 'react';
import '../index.css';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Location(){
    return (
        <>
            <div className='location'>
               <h3 style={{marginTop:'20px',color:'#f54952',textAlign:"center"}}>Welcome Andrew Adrian</h3>
               <div className='images' style={{display:'flex',justifyContent:'center'}}>
               <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/UserImage_89d8bc91-101b-465f-bdb4-0e8949177b03' alt='' style={{width:'90px',height:'90px',borderRadius:'50%',marginTop:'20px'}}/>
               </div>
               <p style={{textAlign:'center',marginTop:'15px'}}>Choose Location</p>
               <div className='cardLocation' style={{display:'flex',justifyContent:'center',marginTop:'80px'}}>
          <Link to='/Dashboard' style={{textDecoration:"none"}} >    <Card  style={{ width: '13rem',height:'150px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>St. Pete Beach</p>
          </div>
          
        </Card.Body>
      </Card></Link>
      <Card  style={{ width: '13rem',height:'150px',marginLeft:'100px' ,boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>Carlsbad Shop</p>
          </div>
          
        </Card.Body>
      </Card>
               </div>
               <div className='cardLocation' style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
               <Card  style={{ width: '13rem',height:'150px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>Encinitas Shop</p>
          </div>
          
        </Card.Body>
      </Card>
      <Card  style={{ width: '13rem',height:'150px',marginLeft:'100px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>Test Location</p>
          </div>
          
        </Card.Body>
      </Card>
               </div>
               <div className='cardLocation' style={{display:'flex',justifyContent:'center',marginTop:'40px'}}>
               <Card  style={{ width: '13rem',height:'150px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>Test Location2</p>
          </div>
          
        </Card.Body>
      </Card>
      <Card  style={{ width: '13rem',height:'150px',marginLeft:'100px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>New Location</p>
          </div>
          
        </Card.Body>
      </Card>
               </div>
               <div className='cardLocation' style={{display:'flex',justifyContent:'center',marginTop:'40px',marginBottom:'50px'}}>
               <Card  style={{ width: '13rem',height:'150px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>Stripe</p>
          </div>
          
        </Card.Body>
      </Card>
      <Card  style={{ width: '13rem',height:'150px',marginLeft:'100px',boxShadow:'5px 5px 5px 5px #F5F5F5',border:'0px' }}>
        <Card.Body>
          <div className='text'>
            <p>Stripe 2</p>
          </div>
          
        </Card.Body>
      </Card>
               </div>
            </div>
        </>
    )
}

export default Location;