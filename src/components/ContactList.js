import React from "react"
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    console.log("props :", props);

    const deleteContactHandler = (id) => {
        console.log("hahaha go idv ::", id);
        props.getContactId(id);
    }
    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler}></ContactCard>
        )

    })

    return (
        <div className="main" style={{ marginTop: "50px" }}>
            <div className="ui container">
                <div className="ui grid">
                    <div className="eight wide column">
                        <h3>Contacts List</h3>
                    </div>
                    <div className="eight wide column">
                        <Link to="/add">
                            <button className="ui button blue right floated">Add Contact</button>
                        </Link>

                    </div>
                </div>
            </div>

            <div className="ui celled list" key={"2"}>
                {renderContactList}
            </div>
        </div>

    )
}

export default ContactList;