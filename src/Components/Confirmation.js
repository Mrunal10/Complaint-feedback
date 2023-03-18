import React from 'react';
import './Confirmation.css';
import airlinelogo from '../Components/airlinelogo.png';

const Confirmation = () => {
  return (
    <div>
      <h1 className="confirm">Confirmation</h1>
      <p className="comment">Your comments have been submitted</p>
      <div className="stepsdiv">
        <ul className="stepul">
  <li className="lic1">&#10003;</li>
  <li className="lic2">&#10003;</li>
  <li className="lic3">&#10003;</li>
  <li className="lic4">4</li>
  
</ul> 
<p className="personallic">Personalinfo</p>
<p className="commentlic">Comment</p>
<p className="reviewlic">Review</p>
<p className="confirmationlic">Confirmation</p>
</div>
      <div className="confirmcontainer">
        <img src={airlinelogo} alt="airlinelogo" className="airlinelogo"/>
          <h1 className="feedback"> Thank you for your <br/>feedback
          <hr className="line"/></h1>
         
          <div>
              <p className="ack">If you requested a reply, you will recieve a acknowledgement email with your <br/>
              case number and other important information. We appreciate your feedback,<br/> and
              thank you for flying Delta.</p>
          </div>
      </div>
    </div>
  )
}

export default Confirmation
