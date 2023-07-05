import React from 'react';
import { useState } from 'react';
import '../components/home.css';
import $ from 'jquery';

import Navbar from '../components/Navbar';

function App() {
  const [formData,setformData] = useState({fname:"",lname:"",email:"",password:""});    
  const handleFormChange = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setformData({...formData,[name]:value});
  }
  const handleFormSignUp = async (event) => {
        event.preventDefault();
        const {fname,lname,email,password} = formData;
        if (fname === '' || lname === '' || email === '' || password === '') {
          alert('One or more form fields are empty');
          return;
        }
        const res = await fetch("/home/signIn",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify({fname,lname,email,password})
        })
        const data = await res.json();
        if(data && res.status == 200)alert("You just Signed Up");
        else alert("Error while Signing!");
  };
  const handleFormLogIn = async (event) => {
    event.preventDefault();
    const {fname,lname,email,password} = formData;
    console.log(formData);
    if (fname === '' || lname === '' || email === '' || password === '') {
      alert('One or more form fields are empty');
      return;
    }
    const resp = await fetch('/home/logIn',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({fname,lname,email,password})
    })
    const data = await resp.json();
        if(data && resp.status === 200){
          alert("You just logged In");
          document.querySelector('#f').style.display = 'none';
        }
        else alert("Error while Logging In!")
  }
      // const handleHeartIconClick = () => {
      //   console.log('Added to favorites.');
      // };
    
      const handleTrashIconClick = (event) => {
        const parent = event.target.parentElement.parentElement;
        parent.innerHTML = '<h4>Thanks For letting us know about your Disliking</h4>';
      };
    
  return (
    <body>
    <Navbar/>
      <section className="poster">
        <div className="main-text">
          <h1>Offers <br />Never Seen Before</h1>
          <h5>Welcome To FindOnNet</h5>
          <a href="#trending" className="main-btn">Shop Now <i className='bx bx-right-arrow-alt' ></i></a>
        </div>
      </section>

      <div className="container">
        <form method='POST' id="f">
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleFormChange} placeholder="Your name.." />
            </div>
          </div>
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleFormChange} placeholder="Your last name.." />
            </div>
          </div>
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="email">E-mail</label>
            </div>
            <div className="col-75">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} placeholder="Your Email" />
            </div>
          </div>
          <div className="form-row">
            <div className="col-25">
              <label htmlFor="pass">Password</label>
            </div>
            <div className="col-75">
              <input type="password" id="pass" name="password" value={formData.password} onChange={handleFormChange} placeholder="Your Password" />
            </div>
          </div>
          <div className="form-row">
            <input value="Log In" type='Submit' onClick={handleFormLogIn}/>
            <input type="submit" value="Sign Up" onClick={handleFormSignUp}/>
          </div>
        </form>
      </div>

      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>Our Top Products For You</h2>
        </div>

        <div className="products">
          
          <div className="row">
            <img src="https://m.media-amazon.com/images/I/81-btS1UL3L._SL1500_.jpg" alt="" height="300px" />
            <div className="heart-icon">
              <i className='bx bx-heart'></i>
            </div>
            <div className="trash-icon" onClick={handleTrashIconClick}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </div>
            <div className="ratting">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bx-star'></i>
              <i className='bx bx-star'></i>
            </div>

            <div className="price">
              <h4>OnePlus 6 (Mirror Black, 8GB RAM, 128GB Storage)</h4>
              <p>Rs. 69999</p>
            </div>
          </div>

          <div className="row">
            <img src="https://m.media-amazon.com/images/I/41iXrVaOPcL._AC_SR400,600_.jpg" alt="" />
            <div className="heart-icon">
              <i className='bx bx-heart'></i>
            </div>
            <div className="trash-icon" onClick={handleTrashIconClick}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </div>
            <div className="ratting">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>

            <div className="price">
              <h4>32 Ltrs Grey Casual Backpack (AMT FIZZ SCH BAG 02 - GREY)</h4>
              <p>Rs. 2000</p>
            </div>
          </div>

          <div className="row">
            <img src="https://m.media-amazon.com/images/I/61SSVxTSs3L._AC_UL400_.jpg" alt="" />

            <div className="heart-icon">
              <i className='bx bx-heart'></i>
            </div>
            <div className="trash-icon" onClick={handleTrashIconClick}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </div>
            <div className="ratting">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>

            <div className="price">
              <h4>Noise Pulse 2 Max 1.85" Display, Bluetooth Calling Smart Watch, 10 Days Battery, 550 NITS Brightness, Smart DND, 100 Sports Modes</h4>
              <p>Rs. 5000</p>
            </div>
          </div>

          <div className="row">
            <img src="https://m.media-amazon.com/images/I/31b5TpeKIVL._AC_SR400,600_.jpg" alt="" />
            <div className="heart-icon">
              <i className='bx bx-heart'></i>
            </div>
            <div className="trash-icon" onClick={handleTrashIconClick}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </div>
            <div className="ratting">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>

            <div className="price">
              <h4>Men Max Black Formal Shoes</h4>
              <p>Rs. 2000</p>
            </div>
          </div>

          <div className="row">
            <img src="https://m.media-amazon.com/images/I/31O4nAWWyzL._AC_SR400,600_.jpg" alt="" />

            <div className="heart-icon">
              <i className='bx bx-heart'></i>
            </div>
            <div className="trash-icon" onClick={handleTrashIconClick}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </div>
            <div className="ratting">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>

            <div className="price">
              <h4>Puma-Men Track Pants</h4>
              <p>Rs. 4999</p>
            </div>
          </div>

          <div className="row">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/91za0xSj48L._AC_UL450_SR450,320_.jpg" alt="" />
            <div className="heart-icon">
              <i className='bx bx-heart'></i>
            </div>
            <div className="trash-icon" onClick={handleTrashIconClick}>
              <i className="fa-sharp fa-solid fa-trash"></i>
            </div>
            <div className="ratting">
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star-half'></i>
            </div>

            <div className="price">
              <h4>WildHorn Leather Wallet for Men</h4>
              <p>Rs. 599</p>
            </div>
          </div>
        </div>
      </section>

      {/* contact-section */}
      <section className="contact">
        <div className="contact-info">
          <div>
            <p>ABC BLock, XYZ City</p>
            <p>016013XXXX</p>
            <p><a href="mailto:kshitizsharma2632@gmail.com">Mail Us</a></p>
            <div className="social-icon">
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-youtube'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>

          {/* <div>
            <h4>Support</h4>
            <p>Contact us</p>
            <p>About page</p>
          </div>

          <div>
            <h4>Shop</h4>
            <p>Furniture</p>
            <p>Technology</p>
            <p>Clothing</p>
            <p>Jewellery</p>
          </div> */}
        </div>
      </section>
   </body>
  );
}

export default App;
