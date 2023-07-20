import React from 'react';
import { useEffect } from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdOutlineInventory2 } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { AiOutlineBorderBottom } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md';
import { BsCartPlus } from 'react-icons/bs';
import { GrAddCircle } from 'react-icons/gr';
import { IoIosSettings } from 'react-icons/io';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {VscLocation} from 'react-icons/vsc';
// import Button from 'react-bootstrap/Button';
// import { ToastContainer, toast } from 'react-toastify';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // let c=localStorage.getItem('key')
  // console.log(c)
  //   useEffect(() => {
  //     toast.success(c, {
  //         position: toast.POSITION.BOTTOM_RIGHT,
  //     });
  //     localStorage.clear();
  //   },[])



  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className='sidebar' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/BusinessLogo_4d836a7a-2ec5-43bd-8050-a9e0fbcbe928' alt='' style={{ width: '60px', marginLeft: 10 }} />
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </div>
        <div className='item' style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                label: 'Dashboard',
                key: '1',
                icon: <LuLayoutDashboard />,
              },
              {
                label: 'Inventory',
                key: '2',
                icon: <MdOutlineInventory2 />,

              },
              {
                label: 'Calender',
                key: '3',
                icon: <AiOutlineCalendar />,

              },
              {
                label: 'Order',
                key: '4',
                icon: <AiOutlineBorderBottom />,

              },
              {
                label: 'Customer',
                key: '5',
                icon: <MdPersonOutline />,

              },
            ]}
          />
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            // padding:0,
            height: '80px',
            width: '100%',
            background: colorBgContainer,
            position: 'sticky',
            top: '0',
            zIndex: '2',


          }}
        >
          <div className='header' style={{ display: "flex", justifyContent: 'space-between', marginLeft: '20px' }}>
            <div className='topHeader' style={{ marginTop: '20px' }}>
              <Form.Select aria-label="Default select example" style={{ width: '150px', border: '0px' }}>
                <option>St. Pete Beach</option>
                <option value="1">Carlsbad Shop</option>
                <option value="2">Encinitas Shop</option>
                <option value="3">Test location</option>
                <option value="3">Test location 2</option>
                <option value="3">New location </option>
                <option value="3">Stripe</option>
                <option value="3">Stripe 2</option>
              </Form.Select>
            </div>
            <div style={{ marginTop: '10px' }}>
              <ul >
                <li style={{}}>  <Form.Control type="search" style={{ borderRadius: '30px' }} /></li>
                <li style={{ marginLeft: '20px' }}> <BsCartPlus style={{ fontSize: '20px' }} /></li>
                <li style={{ marginLeft: '20px' }}><GrAddCircle style={{ fontSize: '20px' }} /> </li>
                <li style={{ marginLeft: '20px' }}><IoIosSettings style={{ fontSize: '20px' }} /> </li>
              </ul>
            </div>

          </div>

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <div className='card' style={{ width: '100%', height: '200px', boxShadow: '5px 5px 5px 5px #F5F5F5', border: '0px', borderRadius: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Form.Select aria-label="Default select example" style={{ width: '200px', marginTop: '15px', marginRight: '10px' }}>
                <option>Today</option>
                <option value="1">Current Week</option>
                <option value="2">Current Year</option>
                <option value="3">Last Month</option>
                <option value="3">Last Week</option>
                <option value="3">Last Year </option>
                <option value="3">Tomorrow</option>
                <option value="3">Yesterday</option>
              </Form.Select>
            </div>
            <div className='cards' style={{ marginTop: 10, display: 'flex' }}>
              <Card style={{ width: '14rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px' }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#660f56' }}>
                        <p style={{ lineHeight: '60px', textAlign: 'center', color: 'white' }}>0.00%</p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: '#999' }}>Rentals</h5>
                      <h6 style={{ color: '#660f56' }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card style={{ width: '14rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px' }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgb(40, 6, 89)' }}>
                        <p style={{ lineHeight: '60px', textAlign: 'center', color: 'white' }}>0.00%</p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: '#999' }}>Retail</h5>
                      <h6 style={{ color: 'rgb(40, 6, 89)' }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card style={{ width: '14rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px' }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgb(174, 45, 104)' }}>
                        <p style={{ lineHeight: '60px', textAlign: 'center', color: 'white' }}>0.00%</p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: '#999' }}>Activities</h5>
                      <h6 style={{ color: 'rgb(174, 45, 104)' }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card style={{ width: '14rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px' }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#660f56' }}>
                        <p style={{ lineHeight: '60px', textAlign: 'center', color: 'white' }}>0.00%</p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: '#999' }}>Passes</h5>
                      <h6 style={{ color: '#660f56' }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Card style={{ width: '14rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px' }}>
                <Card.Body>
                  <Row>
                    <Col md={4}>
                      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgb(245, 73, 82)' }}>
                        <p style={{ lineHeight: '60px', textAlign: 'center', color: 'white' }}>0.00%</p>
                      </div>
                    </Col>
                    <Col md={8}>
                      <h5 style={{ color: '#999' }}>Orders Total</h5>
                      <h6 style={{ color: 'rgb(245, 73, 82)' }}>$0.00</h6>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>

            </div>
          </div>

          <div className='card' style={{ width: '100%', height: '200px', boxShadow: '5px 5px 5px 5px #F5F5F5', border: '0px', borderRadius: '10px', marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <Form.Select aria-label="Default select example" style={{ width: '200px', marginTop: '15px', marginRight: '10px' }}>
                <option>Today</option>
                <option value="1">Current Week</option>
                <option value="2">Current Year</option>
                <option value="3">Last Month</option>
                <option value="3">Last Week</option>
                <option value="3">Last Year </option>
                <option value="3">Tomorrow</option>
                <option value="3">Yesterday</option>
              </Form.Select>
            </div>
            <div className='cards' style={{ marginTop: 10, display: 'flex' }}>
              <Card style={{ width: '12rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px', backgroundColor: '#341671', color: 'white' }}>
                <Card.Body>
                  <h5>ITEMS OUT</h5>
                  <h3>48</h3>
                </Card.Body>
              </Card>
              <Card style={{ width: '12rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px', backgroundColor: '#422680', color: 'white' }}>
                <Card.Body>
                  <h5>ACTIVITIES</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
              <Card style={{ width: '12rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px', backgroundColor: '#660f56', color: 'white' }}>
                <Card.Body>
                  <h5>UNPAID ORDERS</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
              <Card style={{ width: '12rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px', backgroundColor: '#280659', color: 'white' }}>
                <Card.Body>
                  <h5>ITEMS SOLD</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>
              <Card style={{ width: '12rem', borderRadius: '15px', border: '1px solid rgba(0,0,0,0.15)', boxShadow: '5px 5px 5px 5px #F5F5F5', marginLeft: '10px', backgroundColor: '#f54952', color: 'white' }}>
                <Card.Body>
                  <h5>ORDERS</h5>
                  <h3>0</h3>
                </Card.Body>
              </Card>


            </div>
          </div>

          <div className='card' style={{ width: '100%', height: '300px', boxShadow: '5px 5px 5px 5px #F5F5F5', border: '0px', borderRadius: '10px', marginTop: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Select aria-label="Default select example" style={{ width: '250px', marginTop: '15px', marginLeft: '10px' }}>
                <option>Top 10 Rented Items</option>
                <option value="1">Top 10 Items</option>
                <option value="2">Top 10 Items</option>
                <option value="3">Top 10 Rented Items</option>
                <option value="3">Top 10 Retail Items</option>
              </Form.Select>
              <div className="mt-3" style={{ fontSize: '17px' }}>
                <Form.Check
                  inline
                  label="Current Month"
                  name="group1"
                  type='radio'

                />
                <Form.Check
                  inline
                  label="Current Week"
                  name="group1"
                  type='radio'

                />
                <Form.Check
                  inline
                  label="Last Month"
                  name="group1"
                  type='radio'

                />
                <Form.Check
                  inline
                  label="Last Week"
                  name="group1"
                  type='radio'

                />
                <Form.Check
                  inline
                  label="Today"
                  name="group1"
                  type='radio'

                />
              </div>

            </div>
            <div className='cards' style={{ marginTop: 10 }}>
              <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1000} infinite={true}>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_3b9776b8-bcf0-4d65-b13a-80caa2bb97de' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p></div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_7259baf3-fc02-49cd-bc9e-d3b5fc91d9f5' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_c44056a2-e378-4a61-bc2d-de007244e945' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p></div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_5a58c4a4-d7ba-4a7c-9d3a-9773f3d253f1' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p></div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_3b9776b8-bcf0-4d65-b13a-80caa2bb97de' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p></div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductImages_7259baf3-fc02-49cd-bc9e-d3b5fc91d9f5' style={{ height: '180px', width: '180px' }} alt='' /></div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_c44056a2-e378-4a61-bc2d-de007244e945' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p></div>
                <div style={{ textAlign: 'center' }}>
                  <img src='https://rehntitimage.blob.core.windows.net/rehntitimage/ProductDefaultImages_5a58c4a4-d7ba-4a7c-9d3a-9773f3d253f1' style={{ height: '180px', width: '180px' }} alt='' />
                  <p style={{ color: 'red' }}>0 OUT | 14 IN</p></div>
              </Carousel>
            </div>
          </div>
          <div className='mt-4'>
       <Row>
        <Col md={8}>
          <div className='card'>
            <div style={{display:'flex',justifyContent:'space-between', marginLeft:'30px',marginTop:'10px'}}>
              <h6>Total Orders</h6>
              <Button  style={{marginRight:'40px',backgroundColor:'#f54952',color:'white',borderRadius:'30px'}}>Report</Button>

            </div>
            </div>
            


        </Col>
        <Col md={4}>
          <div className='card'>
            <div style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                <img src='https://cdn.weatherapi.com/weather/64x64/day/113.png' alt=''/><br/>
               <span style={{marginLeft:'10px'}}> <VscLocation style={{fontSize:'25px'}}/>Saint Petersburg</span>
              </div>
              <div style={{marginRight:'10px'}}>
                <h1 style={{fontSize:'50px'}}>80.1°F</h1>
              </div>
            </div>
            <hr style={{width:'90%',marginLeft:'20px'}}/>
            <div style={{display:'flex',justifyContent:'space-evenly',marginBottom:'15px'}}>
              <div>
                <span style={{marginLeft:'12px'}}>Wed</span><br/>
                <img src="https://cdn.weatherapi.com/weather/64x64/day/113.png"  alt=''/><br/>
                <span>81.9~94.5</span>
              </div>
              <div>
              <span style={{marginLeft:'12px'}}>Thu</span><br/>
                <img src="https://cdn.weatherapi.com/weather/64x64/day/176.png"  alt=''/><br/>
                <span>82.4~94.1</span>
              </div>
              <div>
              <span style={{marginLeft:'12px'}}>Fri</span><br/>
                <img src="https://cdn.weatherapi.com/weather/64x64/day/176.png"  alt=''/><br/>
                <span>83.8~90.9</span>
              </div>
            </div>
          </div>
          <div className='card mt-4'style={{height:'200px',overflowY:'scroll'}}>
            <div className="container">
          <div style={{position:'sticky',top:'0',left:'0',background:'white',height:'50px',}}>
            
            <h3 style={{lineHeight:'50px'}}>Actions View</h3>
          </div>
          <div style={{display:'flex'}}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAMAAADWOFNCAAAAVFBMVEUAAAD14uP1SVL2Ulv3goj2X2f7u7/3dXv129z0sbX1j5T93d/5jpP90tT+6er0zM/7sLT1naH1iI71eoH1Zm36pKn////3a3P+6On8x8n5mJ3+9PVSEINHAAAAAnRSTlMAoKBFbtAAAAGLSURBVEjHxZbRkoMgDEW3NwIqYrWrVtv//8+drtNSkyjd4WHPk6gXCAlJvv6bsqqdIYCMq6vyM0k/YMPQJ4XnAgrF+UhzumCHy2lXVBF2oWpHVOOQWhV9I8G3InJI4vSVkqulbUrbVuFDqnc/kfCr9dPkbSMc8Oa3C9fMtqBfbVtwd8cwYl86b56Pxlv28RVcbD5r5ShSPKOcvfbbcWDGlauqx4bWbMem3Z5Vv6oGdnpg2K0FA9ug+Eefp1Q8HEj4KHBPy2CaIJiUsHJJ1V0JfZPaoQls/FDRX0+DHir5D2Ph8ygqtMzQawtFxe1wfvOGvIOyQwNG4+ld1IjTWU9eyuKzFMHtpAzbva5aB0HNIkrEvWn3ckcJyegAO9vmNkJSxpvCVDcAVIzhCsHAb2X00XL3XWOg0ccMIDFN5+8LKRuM2YYT1pUcBAXLbHylebkpZp1jFpUqeqw0Blk0jzJ242errUSn4+pAbgytER7OqEQZVe/jCptRzTM6h5wuJd0R5XVf+Z1euqvM5wey7BmaogNllAAAAABJRU5ErkJggg==' alt=''/>
            <div>
            <span style={{marginLeft:'30px',marginTop:'10px'}}>Andrew Adrian booked Order #2542 .</span><br></br>
            <span style={{marginLeft:"30px",marginTop:'0'}}>4 months ago</span>
            </div>
          </div>
          <div style={{display:'flex',marginTop:"20px"}}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAMAAADWOFNCAAAAVFBMVEUAAAD14uP1SVL2Ulv3goj2X2f7u7/3dXv129z0sbX1j5T93d/5jpP90tT+6er0zM/7sLT1naH1iI71eoH1Zm36pKn////3a3P+6On8x8n5mJ3+9PVSEINHAAAAAnRSTlMAoKBFbtAAAAGLSURBVEjHxZbRkoMgDEW3NwIqYrWrVtv//8+drtNSkyjd4WHPk6gXCAlJvv6bsqqdIYCMq6vyM0k/YMPQJ4XnAgrF+UhzumCHy2lXVBF2oWpHVOOQWhV9I8G3InJI4vSVkqulbUrbVuFDqnc/kfCr9dPkbSMc8Oa3C9fMtqBfbVtwd8cwYl86b56Pxlv28RVcbD5r5ShSPKOcvfbbcWDGlauqx4bWbMem3Z5Vv6oGdnpg2K0FA9ug+Eefp1Q8HEj4KHBPy2CaIJiUsHJJ1V0JfZPaoQls/FDRX0+DHir5D2Ph8ygqtMzQawtFxe1wfvOGvIOyQwNG4+ld1IjTWU9eyuKzFMHtpAzbva5aB0HNIkrEvWn3ckcJyegAO9vmNkJSxpvCVDcAVIzhCsHAb2X00XL3XWOg0ccMIDFN5+8LKRuM2YYT1pUcBAXLbHylebkpZp1jFpUqeqw0Blk0jzJ242errUSn4+pAbgytER7OqEQZVe/jCptRzTM6h5wuJd0R5XVf+Z1euqvM5wey7BmaogNllAAAAABJRU5ErkJggg==' alt=''/>
            <div>
            <span style={{marginLeft:'30px',marginTop:'10px'}}>Andrew Adrian booked Order #2542 .</span><br></br>
            <span style={{marginLeft:"30px",marginTop:'0'}}>4 months ago</span>
            </div>
          </div>
          <div style={{display:'flex',marginTop:"20px"}}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAMAAADWOFNCAAAAVFBMVEUAAAD14uP1SVL2Ulv3goj2X2f7u7/3dXv129z0sbX1j5T93d/5jpP90tT+6er0zM/7sLT1naH1iI71eoH1Zm36pKn////3a3P+6On8x8n5mJ3+9PVSEINHAAAAAnRSTlMAoKBFbtAAAAGLSURBVEjHxZbRkoMgDEW3NwIqYrWrVtv//8+drtNSkyjd4WHPk6gXCAlJvv6bsqqdIYCMq6vyM0k/YMPQJ4XnAgrF+UhzumCHy2lXVBF2oWpHVOOQWhV9I8G3InJI4vSVkqulbUrbVuFDqnc/kfCr9dPkbSMc8Oa3C9fMtqBfbVtwd8cwYl86b56Pxlv28RVcbD5r5ShSPKOcvfbbcWDGlauqx4bWbMem3Z5Vv6oGdnpg2K0FA9ug+Eefp1Q8HEj4KHBPy2CaIJiUsHJJ1V0JfZPaoQls/FDRX0+DHir5D2Ph8ygqtMzQawtFxe1wfvOGvIOyQwNG4+ld1IjTWU9eyuKzFMHtpAzbva5aB0HNIkrEvWn3ckcJyegAO9vmNkJSxpvCVDcAVIzhCsHAb2X00XL3XWOg0ccMIDFN5+8LKRuM2YYT1pUcBAXLbHylebkpZp1jFpUqeqw0Blk0jzJ242errUSn4+pAbgytER7OqEQZVe/jCptRzTM6h5wuJd0R5XVf+Z1euqvM5wey7BmaogNllAAAAABJRU5ErkJggg==' alt=''/>
            <div>
            <span style={{marginLeft:'30px',marginTop:'10px'}}>Andrew Adrian booked Order #2542 .</span><br></br>
            <span style={{marginLeft:"30px",marginTop:'0'}}>4 months ago</span>
            </div>
          </div>
          <div style={{display:'flex',marginTop:"20px"}}>
            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAAA1CAMAAADWOFNCAAAAVFBMVEUAAAD14uP1SVL2Ulv3goj2X2f7u7/3dXv129z0sbX1j5T93d/5jpP90tT+6er0zM/7sLT1naH1iI71eoH1Zm36pKn////3a3P+6On8x8n5mJ3+9PVSEINHAAAAAnRSTlMAoKBFbtAAAAGLSURBVEjHxZbRkoMgDEW3NwIqYrWrVtv//8+drtNSkyjd4WHPk6gXCAlJvv6bsqqdIYCMq6vyM0k/YMPQJ4XnAgrF+UhzumCHy2lXVBF2oWpHVOOQWhV9I8G3InJI4vSVkqulbUrbVuFDqnc/kfCr9dPkbSMc8Oa3C9fMtqBfbVtwd8cwYl86b56Pxlv28RVcbD5r5ShSPKOcvfbbcWDGlauqx4bWbMem3Z5Vv6oGdnpg2K0FA9ug+Eefp1Q8HEj4KHBPy2CaIJiUsHJJ1V0JfZPaoQls/FDRX0+DHir5D2Ph8ygqtMzQawtFxe1wfvOGvIOyQwNG4+ld1IjTWU9eyuKzFMHtpAzbva5aB0HNIkrEvWn3ckcJyegAO9vmNkJSxpvCVDcAVIzhCsHAb2X00XL3XWOg0ccMIDFN5+8LKRuM2YYT1pUcBAXLbHylebkpZp1jFpUqeqw0Blk0jzJ242errUSn4+pAbgytER7OqEQZVe/jCptRzTM6h5wuJd0R5XVf+Z1euqvM5wey7BmaogNllAAAAABJRU5ErkJggg==' alt=''/>
            <div>
            <span style={{marginLeft:'30px',marginTop:'10px'}}>Andrew Adrian booked Order #2542 .</span><br></br>
            <span style={{marginLeft:"30px",marginTop:'0'}}>4 months ago</span>
            </div>
          </div>
          </div>
          </div>

        </Col>
       </Row>
       </div>

        </Content>
      </Layout>

    </Layout>


  );
};
export default Dashboard;