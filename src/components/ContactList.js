import React ,{useRef,useState}from "react"
import ContactCard from "./ContactCard";
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const [input, setInput] = useState("");
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} key={contact.id} clickHandler={deleteContactHandler}></ContactCard>
        )
    })

    const getSearchTerm = (event)=>{
       // console.log("dddd");
        
        // console.log("running get search item",inputEl );
        // console.log("inputEl.current ::", inputEl.current.value);
        
        setInput(event.target.value);
        console.log("event.target.value :", event.target.value);
        
        console.log("input", input);
        
        props.searchKeyWord(input)

       // console.log(props);
        
    }

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
                <div className="ui search ui grid">
                    <div className="ui icon input  wide column" style={{ borderRadius:"inherit", marginTop:"50px"}}>
                        <input
                          //  ref={inputEl}
                            type="text"
                            placeholder="Search Contacts"
                            className="prompt"
                            value={input}
                            onChange={getSearchTerm}
                            style={{ borderRadius:"inherit", width:"100%"}}
                        />
                        <i className="search icon" style={{marginRight:"9px"}}></i>
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