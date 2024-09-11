import React from "react"
import ContactCard from "./ContactCard";


const ContactList = (props) => {
    console.log("props :", props);

    const deleteContactHandler = (id)=>{
        console.log("hahaha go idv ::", id);
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
          <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler}></ContactCard>
        )

    })

    return (
        <div className="ui celled list" key={"2"}>
            {renderContactList}
        </div>
    )
}

export default ContactList;