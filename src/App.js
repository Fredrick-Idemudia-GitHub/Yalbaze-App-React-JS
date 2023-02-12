import logo from './images/heart.png';
import smallstar from './images/smallstar.png';
import bigstar from './images/bigstar.png';
import ellipsesmall from './images/ellipsesmall.png';
import ellipsehalf from './images/ellipsehalf.png';
import zig from './images/zig.png';



import './App.css';


function App(){
  return(
    <div className='container'>
      <div className='logo-container'>
        <div><span className='logo-text-i-love'>I</span>
          <span className='image-span'><img src={logo} className='logo' alt='yalbaze logo'/></span>
          <span className='logo-text-i-love'>Yalbaze</span>
        </div>
        <div>
          <p className='logo-text-request'>Request a call</p>
        </div>
      </div>
      <div className='header-div'>
        <h1 className='header-text'>Turn your best customers</h1>
        <h1 className='header-text'>into <span className='loyal-fans-text'>loyal fans</span></h1>
      </div>
      <div className='get-ready-div'>
        <p className='get-ready-text'>Get ready to revolutionize the way you interact with your customers and drive
          sales with loyalbaze. Join the waiting list now to be among the first to experience
          the future of custmer loyalty.
        </p>
      </div>
      <div className='input-dev'>
        <input className='input-box' placeholder='Tell us your name'/>
        <input className='input-box' placeholder='Enter your email' />
      </div>
      <div className='input-dev-get-early'>
        <input className='input-box-get-early' placeholder='Get early access'/>
      </div>
      <div className='circle-div-container'>
        <div className='circle-div-1'><p>G</p></div>
        <div className='circle-div-2'><p>O</p></div>
        <div className='circle-div-3'><p>U</p></div>
        <div className='circle-div-4'>M</div>
        <div className='circle-div-text'><p>+ 57 Joined</p></div>
      </div>
      <div className='body-div'>
        <div className='what-we-do-div'>
          <p className='what-we-do-text1'>Priority Access</p>
          <p className='what-we-do-text2'>Loyalbaze, empower business to offer
            digital, mobile-first loyalty program to their customers.
            With our AI Powered platform, you can easily create and manage customers
            loyalty and rewards programs. Track customer engagement, and gain
            valuable insights to improve your business.

          </p>

          
        </div>
        <div className='book-div'>
          <div className='consultation-div'><p>Book a Consultation with us</p></div>
          <input className='body-div-input-box' placeholder='Enter your name'/>
          <input className='body-div-input-box' placeholder='Enter your email'/>
          <input className='body-div-input-box' placeholder='Mobile number'/>
          <input className='body-div-input-box' placeholder='Company name'/>
          <select className='body-div-select-box'>
            <option>Select Country</option>
            <option>Nigeria</option>
            <option>United States</option>
            <option>UK</option>
            <option>Kenyan</option>
            <option>Ghana</option>
            <option>France</option>

          </select>
          <textarea className='body-div-textarea-box'>
            Drop a message ...
          </textarea>
            <button className='button-send'>Send Request</button>
        </div>
      </div>
      <div className='hr-line'></div>
      {/* <hr className='hr-line' /> */}
      <div className='address-div'>
        <div><p className='address1-text'>2 Floor, The Garnet Building,KM14</p><p className='address1-text'>Lekki Epe Expressway, Lagos, Nigeria</p></div>
        <div><h3 className='address2-text'>Loyalbaze is almost here.</h3></div>
        <div><p className='address1-text'>+234 9036189485</p></div>
      </div>
      <div className='star small-star1'><img src={smallstar} className='small-star1' alt='small-star logo'/></div>
      <div className='star small-star2'><img src={smallstar} className='small-star2' alt='small-star logo'/></div>
      <div className='star small-star3'><img src={smallstar} className='small-star3' alt='small-star logo'/></div>
      <div className='star big-star1'><img src={bigstar} className='big-star1' alt='big-star logo'/></div>
      <div className='star big-star2'><img src={bigstar} className='big-star2' alt='big-star logo'/></div>
      <div className='star big-star3'><img src={bigstar} className='big-star3' alt='big-star logo'/></div>
      <div className='star big-star4'><img src={bigstar} className='big-star4' alt='big-star logo'/></div>
      <div className='ellipse ellipse-small'><img src={ellipsesmall} className='ellipse-small' alt='ellipse logo'/></div>
      <div className='ellipse ellipse-small2'><img src={ellipsesmall} className='ellipse-small2' alt='ellipse logo'/></div>
      <div className='ellipse ellipse-small3'><img src={ellipsesmall} className='ellipse-small3' alt='ellipse logo'/></div>
      <div className='ellipse ellipse-half'><img src={ellipsehalf} className='ellipse-half' alt='ellipse logo'/></div>
      <div className='ellipse zig'><img src={zig} className='zig' alt='signature logo'/></div>











      <div className='footer'></div>

    </div>
  )
}

export default App;