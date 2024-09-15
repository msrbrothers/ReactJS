import React from "react"
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    console.log("id::", id);

    return (
        <div className="item" key={id}>
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <Link
                    to={`/contact/${id}`}
                    state={{ contact: props.contact}}
                >
                    <div className="header">{name}</div>
                    <div>{email}</div>
                </Link>
            </div>
            <i className="trash alternate outline icon  right floated" style={{ color: "red", marginTop: "7px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
        </div>
    )
}

export default ContactCard;