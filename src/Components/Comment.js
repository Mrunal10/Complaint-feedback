import React,{useEffect, useState} from 'react';
import { useNavigate, useLocation } from 'react-router';


import './Comment.css';
import Axios  from 'axios';

import Modal from "react-modal";
Modal.setAppElement('#root');


const Comment = () => {
   
   const [confirm , setConfirm] = useState("");
   const [ticket , setTicket] = useState("");
   const [adddetails,setAdddetails] = useState("");
   const[ error , setError] = useState(false);
   const [topping, setTopping] = useState("No");
   const [checkbox , setCheckbox] = useState(false);
   const [btnStatus , setbtnStatus] =useState(true);
   const [modalIsOpen,setModalIsOpen] = useState(false);

 const location = useLocation();


   useEffect( ()=>{
    if (location.state != null) {
    
      setAdddetails(location.state.adddetails);
      setConfirm(location.state.confirm);
      setTicket(location.state.ticket);
      setTopping(location.state.topping);
    }
   
    if (location.state !==null && location.state.data !== undefined && location.state.data[0] !== null && location.state.data[0].length !==0) {
      location.state.flynumber = location.state.data[0].flynumber;
      location.state.firstname = location.state.data[0].firstname;
      location.state.middlename = location.state.data[0].middlename;
      location.state.lastname = location.state.data[0].lastname;
      location.state.phonenumber = location.state.data[0].phonenumber;
      location.state.email = location.state.data[0].email;
      location.state.addressline1 = location.state.data[0].addressline1;
      location.state.addressline2 = location.state.data[0].addressline2;
      location.state.city = location.state.data[0].city;
      location.state.postal = location.state.data[0].postal;
      location.state.selected = location.state.data[0].selected;
      location.state.phonecountry = location.state.data[0].phonecountry;
      location.state.country = location.state.data[0].country;
      location.state.state = location.state.data[0].state;
      location.state.countryId = location.state.data[0].countryId;
      
      setAdddetails(location.state.data[0].adddetails);
      setConfirm(location.state.data[0].confirmationnumber);
      setTopping(location.state.data[0].topping);
      setTicket(location.state.data[0].ticket);
    }
   },[location.state])
  
  
  const navigate =useNavigate();
  const setModalIsOpenToTrue =() =>{

    setModalIsOpen(true);
    
      document.body.style.overflow = "hidden";
    
  }
  const setModalIsOpenToFalse =()=>{
    setModalIsOpen(false);
    document.body.style.overflow = "scroll";
}

  const handleReviewClick=()=>{
  
    if (
      (confirm.length === 0 && !checkbox) ||
      (ticket.length === 0  && !checkbox) ||
      adddetails.length === 0 
    ) {
      setError(true);
    }
    else{
    Axios.post("http://localhost:3001/insert",{
      
      flynumber: location.state.flynumber,
      firstname: location.state.firstname,
      middlename: location.state.middlename,
      lastname: location.state.lastname,
      phonenumber: location.state.phonenumber,
      email: location.state.email,
      addressline1: location.state.addressline1,
      addressline2:location.state.addressline2,
      city:location.state.city,
      postal: location.state.postal,
      selected: location.state.selected,
      phonecountry: location.state.phonecountry,
      country: location.state.country,
      state: location.state.state,
      countryId: location.state.countryId,
      confirm: confirm,
      ticket: ticket,
      adddetails: adddetails,
      topping: topping
    }).then(response=>{
      console.log(response)
      // this.setState({ feedbackId: response.data.insertedId })
      navigate("/review",{state:{feedbackId:response.data.insertedId}});
    })
   
  }
  }

  const handleBackClick =() =>{
   
    navigate("/personalinformation", {state:{data: [{
      flynumber: location.state.flynumber,
      firstname: location.state.firstname,
      middlename: location.state.middlename,
      lastname: location.state.lastname,
      phonenumber: location.state.phonenumber,
      email: location.state.email,
      addressline1: location.state.addressline1,
      addressline2:location.state.addressline2,
      city:location.state.city,
      postal: location.state.postal,
      selected: location.state.selected,
      phonecountry: location.state.phonecountry,
      country: location.state.country,
      state: location.state.state,
      countryId: location.state.countryId,
      confirmationnumber: confirm,
      ticket: ticket,
      adddetails: adddetails,
      topping: topping
    }]}})
  }
    

  return (
    <div>
    <div>
      <h1 className="h1comment">Leave Your Comment</h1>
      <p className="pcomment">Please provide as much detail as you can</p>
      <div className="stepsdiv">
        <ul className="stepul">
  <li className="licm1">&#10003;</li>
  <li className="licm2">2</li>
  <li className="licm3">3</li>
  <li className="licm4">4</li>
  
</ul> 
<p className="personallicm">Personalinfo</p>
<p className="commentlicm">Comment</p>
<p className="reviewlicm">Review</p>
<p className="confirmationlicm">Confirmation</p>
</div>
    </div>

    <div className="commentcontainer">
    <p className="paracomment">
      Inorder to assist you faster, please lookup your flight details by providing your Confirmation # and <br/>
       Ticket # . Your full name must watch your Ticket #. Don't have your Confirmation # or Ticket # ? <br/>
      Check the box below to continue with partial (or no) flight information.</p>
      <h6 className="allreq">All fields required unless noted.</h6>
      <label className="fullname">Full Name </label>
      <h5 className="dispname">{location.state !=null ? location.state.firstname : ""}</h5>

      
       <input type="text" placeholder="Confirmation #" className="confirmlabel"
         defaultValue={confirm}
       onChange={(event)=>{setConfirm(event.target.value)}}
       />
         {error && confirm.length <= 0  && !checkbox ? (
                        <label style={{ color: "red",  marginLeft: "-182px"}}>
                          Please Enter Confirmation
                        </label>
                      ) : (
                        ""
                      )}
       
     <input type="text" placeholder="Ticket #" className="ticketlabel"
       defaultValue={ticket}
     onChange={(event)=>{setTicket(event.target.value)}}/>
       {error && ticket.length <= 0  && !checkbox ? (
                        <label style={{ color: "red",  marginLeft: "-182px"}}>
                          Please Enter Ticket Number
                        </label>
                      ) : (
                        ""
                      )}<br/>
     <input type="checkbox"  className="checkbox" onChange={ (event)=>{
       setCheckbox(event.target.value);
      setbtnStatus(false);
     
       

     }}/>
       <label className="boxlabel"><b>I don't have my Confirmation # and/or Ticket #</b></label>
     
       <button className="flightdetails" onClick={setModalIsOpenToTrue} disabled={btnStatus}>Lookup Flight Details</button>
       <Modal  className="Modal" isOpen={modalIsOpen}>
                <button onClick={setModalIsOpenToFalse}>x</button>
                <div className="Overlay">
                <p>Your Ticket Number : Tick1234</p>
                <p>Your Confirmation Number : Confirm1234</p>
                </div>
            </Modal>

      </div>

      <div className="addcommentcontainer">
      <h6 className="allreq2">All fields required unless noted.</h6>
      <p className="secondpara">Please Provide additonal details below.(1500 Character limit)</p>
      <input className="feedbackinput"  defaultValue={adddetails}
      onChange={(event)=>{setAdddetails(event.target.value)}}/>
        {error && adddetails.length <= 0 ? (
                        <label style={{ color: "red"}}>
                          Please Provide additional details
                        </label>
                      ) : (
                        ""
                      )}
      
      <div className="attach">
      <p className="attachment">+ Add an attachment</p>
        <p className="attachfile">Maximum numbers of attachment: 5 items. Maximum file size:25MB. Accepted file types: JPG, JPEG, PNG, PDF, PPT, PPTX, CSV,
          DOCX, DOC ,XLSX, XLS 

        </p>
        </div>
        <p className="reply">Would you like a reply ?</p>






 <div className="form-check form-check-inline">
 

<input
 className="form-check-input1" 
        type="radio"
        name="topping"
        value="Yes"
        id="regular"
        checked={topping === "Yes"}
        onChange={(event)=>{setTopping(event.target.value)}}
      />
      <label  className="form-check-label1" htmlFor="regular">Yes</label>
      </div>
      <div className="form-check form-check-inline2">
      <input className="form-check-input2"
        type="radio"
        name="topping"
        value="No"
        id="medium"
        checked={topping === "No"}
        onChange={(event)=>{setTopping(event.target.value)}}
      />
       <label className="form-check-label2" htmlFor="regular">No</label>
      
      



</div>


        </div>
        
        <button className="ctrbutton" onClick={handleReviewClick}>Continue To Review</button>
        <button className="ctrbuttonback" onClick={handleBackClick}>Back</button>
     
    
    </div>
  )
}

export default Comment;



