//import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header'
import React from 'react';
import ContactInfo from './ContactInfo'
import ContactList from './ContactList';
import AddContact from './AddContact';
import api from '../api/contacts';
import { v4 as uuidv4 } from 'uuid';
import EditDetailsWrapper from './EditDetails';
function App() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const retriveContacts = async () => {
    const contacts = await api.get("/contacts");
    return contacts.data;
  }
  const removeContactHandler = async (id) => {
    const newContactList = await api.delete(`/contacts/${id}`);
    if (newContactList) {
      // Note: also we can delete without call api we can add new return contact
      const allContact = await retriveContacts();
      if (allContact) {
        setContacts(allContact)
      }
    }
    // const newContactList = contacts.filter((contact) => {
    //   return contact.id !== id;
    // });
    //setContacts(newContactList);
  };

  const addContactHandler = async (contact) => {
    const body = {
      id: uuidv4(),
      ...contact
    }

    const responceData = await api.post('/contacts', body);
    console.log("responceData ::", responceData.data);

    setContacts([...contacts, responceData.data])


    // setContacts([...contacts, { id: uuidv4(), ...contact }])
  }

  const editContactHandler = async (contact) => {
    try {
      const updatedContact = await api.put(`/contacts/${contact.id}`, contact);

      // Note: also we can update without call api we can add new return contact
      const allContact = await retriveContacts();
      if (allContact) {
        setContacts(allContact)
        return {
          error: false,
          data: updatedContact
        }
      }


    } catch (error) {
      return {
        error: true,
        msg: error.message
      }

    }



  }
  const searchHandler = (searchTerm) => {
    console.log("outer searchTerm", searchTerm);
   // searchTerm = "anika"
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      console.log("searchTerm ::", searchTerm);
      
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
      console.log(searchResults);
      
    } else {
      setSearchResults([]);
    }
  };

  // const searchHandler = (keyword) => {
  //   setSearchTerms(keyword)
  //   console.log("keyword ::", keyword);
    
  //   if (searchTerms !== "") {
  //     console.log("keyword", searchTerms);
      
  //     const newContactList = contacts.filter((contact) => {
  //       return Object.values(contact).join(" ").toLocaleLowerCase().includes(keyword)
  //     })
      
  //     if(newContactList){
  //       setSearchResult(newContactList)
  //     }
     
  //   }else{
  //     setSearchResult([])
  //   }    

  // }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContact = await retriveContacts();
      if (allContact) {
        setContacts(allContact)
      }
    }

    getAllContacts();
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [])

  return (
    <div >
      <Router>
        <Header />
        <Routes>
          <Route
            path="/list"
            element={
              <ContactList
                contacts={searchTerm.length < 3 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyWord={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/contact/:id"
            element={<ContactInfo />}
          />
          <Route
            path="/edit"
            element={<EditDetailsWrapper editContactHandler={editContactHandler} />}
          />
          <Route
            path="*"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyWord={searchHandler}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App;