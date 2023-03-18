import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import "./PersonalInformation.css";
import csc from "country-state-city";

const PersonalInformation = () => {
  const navigate = useNavigate();
  const [flynumber, setFlynumber] = useState("");
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [addressline1, setAddressline1] = useState("");
  const [addressline2, setAddressline2] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [selected, setSelected] = useState("Delta Airlines/ SkyMiles");
  const [error, setError] = useState(false);
  const [phonecountry, setPhonecountry] = useState("India (91)");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [confirm , setConfirm] = useState("");
  const [ticket , setTicket] = useState("");
  const [adddetails,setAdddetails] = useState("");
  const [topping, setTopping] = useState("No");
  const [countryId, setCountryId] = useState(0);


  const location = useLocation();
  const countries = csc.getAllCountries();
 
  useEffect(() => {
    if (location.state !== null && location.state.data[0] !== null && location.state.data[0].length !== 0) {
      setFlynumber(location.state.data[0].flynumber);
      setFirstname(location.state.data[0].firstname);
      setMiddlename(location.state.data[0].middlename);
      setLastname(location.state.data[0].lastname);
      setPhonenumber(location.state.data[0].phonenumber);
      setEmail(location.state.data[0].email);
      setAddressline1(location.state.data[0].addressline1);
      setAddressline2(location.state.data[0].addressline2);
      setCity(location.state.data[0].city)
      setPostal(location.state.data[0].postal)
      setSelected(location.state.data[0].selected)
      setPhonecountry(location.state.data[0].phonecountry);
      setCountry(location.state.data[0].country);
      setCountryId(location.state.data[0].countryId);
      setState(location.state.data[0].state);
      setConfirm(location.state.data[0].confirmationnumber);
      setAdddetails(location.state.data[0].adddetails);
      setTopping(location.state.data[0].topping);
      setTicket(location.state.data[0].ticket);
   }
  }, [location.state])

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (
      flynumber.length === 0 ||
      firstname.length === 0 ||
     
      lastname.length === 0 ||
      phonenumber.length === 0 ||
      email.length === 0 ||
      phonenumber.length === 0 ||
      addressline1.length === 0 ||
    
      city.length === 0 ||
      postal.length === 0 ||
      country.length === 0 ||
      state.length === 0
    ) {
      setError(true);
      
    } else {
     
      navigate('/comment',{
        state:
        {
          flynumber: flynumber,
          firstname: firstname,
          middlename: middlename,
          lastname: lastname,
          phonenumber: phonenumber,
          email: email,
          addressline1: addressline1,
          addressline2: addressline2,
          city: city,
          postal: postal,
          selected: selected,
          phonecountry: phonecountry,
          country: country,
          state: state,
          countryId: countryId,
          confirm: confirm,
          adddetails: adddetails,
          topping: topping,
          ticket: ticket
        }});
    }
  };

  return (
    <>
      <div>
        <h3 className="pinfo">Personal Information</h3>
        <p className="perp">Please provide your contact information</p>
        <div className="stepsdiv">
        <ul className="stepul">
  <li className="li1">1</li>
  <li className="li2">2</li>
  <li className="li3">3</li>
  <li className="li4">4</li>
  
</ul> 
<p className="personalli">Personalinfo</p>
<p className="commentli">Comment</p>
<p className="reviewli">Review</p>
<p className="confirmationli">Confirmation</p>
</div>
      </div>
      <div className="container">
        <p className="underline">
          Are you a SkyMiles member? <b>Login</b> so we can help you faster.
        </p>
        <h6 className="h6pi">All fields required unless noted.</h6>

        <div>
          <p className="identity">
            Please Make sure your full name is entered exactly as it appears on
            your government-issued ID
            <br />
            (example:Jane Elizabeth Doe)
          </p>
        </div>

        <form className="row g-3" onSubmit={handleSubmit}
        >
          <b>Airline Program(optional)</b>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>

            <select
              value={selected}
              id="inputState"
              className="form-select"
              onChange={(event) => {
                setSelected(event.target.value);
              }}
              required
            >
              <option value>Delta Airlines/ SkyMiles</option>
              <option>Delta</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label"></label>
            <input
              type="text"
              placeholder="Frequent Fly Number"
              className="form-control"
              id="inputEmail4"
              defaultValue={flynumber}
              onChange={(event) => {
                setFlynumber(event.target.value);
              }}
            />
            {error && flynumber.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Fly Number can't be Empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              id="inputCity"
              defaultValue={firstname}
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
            />
            {error && firstname.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Name can't be Empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="MiddleName (opt)"
              className="form-control"
              id="inputCity"
              defaultValue={middlename}
              onChange={(event) => {
                setMiddlename(event.target.value);
              }}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              id="inputZip"
              defaultValue={lastname}
              onChange={(event) => {
                setLastname(event.target.value);
              }}
            />
            {error && lastname.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Last Name can't be Empty
              </label>
            ) : (
              ""
            )}
          </div>
          <br />
          <b>Phone Country/Region Code</b>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>
            <select
              id="inputState"
              className="form-select"
              value={phonecountry}
              defaultValue={phonecountry}
              onChange={(event) => {
                setPhonecountry(event.target.value);
              }}
            >
              <option>United States (1)</option>
              <option>India (91)</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              id="inputCity"
              defaultValue={phonenumber}
              onChange={(event) => {
                setPhonenumber(event.target.value);
              }}
            />
            {error && phonenumber.length !== 10 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your 10 digit mobile number
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="email"
              placeholder="Email address"
              className="form-control"
              id="inputZip"
              defaultValue={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            {error && email.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your Email
              </label>
            ) : (
              ""
            )}
          </div>

          <b>Country/Region</b>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>
            <select
              id="inputState"
              className="form-select"
              defaultValue={country}
              onChange={(event) => {
                setCountry(event.target.value.split('_')[0]);
                setCountryId(event.target.value.split('_')[1]);
              }}
            >
              <option value={country}>{country}</option>
              {countries.map((value, key) => {
               
                return (
                  <option value={value.name+'_'+value.id} key={value.id}>
                    {value.name}
                  </option>
                );
              })}
            </select>
            {error && country.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Select Country
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="Address Line 1"
              className="form-control"
              id="inputCity"
              defaultValue={addressline1}
              onChange={(event) => {
                setAddressline1(event.target.value);
              }}
            />
            {error && addressline1.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your Home Address
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="text"
              placeholder="Address Line 2"
              className="form-control"
              id="inputZip"
              defaultValue={addressline2}
              onChange={(event) => {
                setAddressline2(event.target.value);
              }}
            />
          </div>
      
          <b>State/Provience</b>
          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label"></label>
            <select
              id="inputState"
              className="form-select"
              defaultValue={state}
              onChange={(event) => {
                setState(event.target.value);
              }}
            >
              <option value={state}>{state}</option>
              { 
              csc.getStatesOfCountry(countryId).map((value, key) => {
            return (
              <option value={value.name} key={key}>
                {value.name}
              </option>
            );
            })}
            </select>
            {error && state.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Select State
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-4">
            <label htmlFor="inputCity" className="form-label"></label>
            <input
              type="text"
              placeholder="City"
              className="form-control"
              id="inputCity"
              defaultValue={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            {error && city.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your City
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label"></label>
            <input
              type="text"
              placeholder="Postal Code"
              className="form-control"
              id="inputZip"
              defaultValue={postal}
              onChange={(event) => {
                setPostal(event.target.value);
              }}
            />
            {error && postal.length <= 0 ? (
              <label style={{ color: "red", marginLeft: "-180px" }}>
                Please Enter Your Postal Code
              </label>
            ) : (
              ""
            )}
          </div>

          <div className="col-12">
            <div className="form-check">
              <label className="form-check-label" htmlFor="gridCheck"></label>
            </div>
          </div>
          <div>
          <button className="continue">Continue to Comment</button>
          </div>
        </form>
      </div>

      {/* <button className="back">BACK</button> */}
    </>
  );
};

export default PersonalInformation;
