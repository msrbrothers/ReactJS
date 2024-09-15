import React from "react"
import ContactCard from "./ContactCard";
import { Link, Rout,useLocation  } from 'react-router-dom';
import user from "../images/user.jpg";

const ContactInfo = (props) => {
   // const { id, name, email } = props.contact;
    console.log("props :", props);
    const location = useLocation();
  const { contact } = location.state || {}; 
  const { id, name, email } = contact
    



    return (
        <div className="main" style={{ marginTop: "20%" }}>
          <div className="ui card centered">
            <div className="image">
              <img src={user} alt="user" />
            </div>
            <div className="content">
              <div className="header">{name}</div>
              <div className="description">{email}</div>
            </div>
          </div>
          <div className="center-div">
            <Link to="/">
              <button className="ui button blue center" style={{ marginLeft: "30px", marginTop: "7px" }}>
                Back to Contact List
              </button>
            </Link>
          </div>
        </div>
      );
}

export default ContactInfo;