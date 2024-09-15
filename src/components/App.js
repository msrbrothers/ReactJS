//import './App.css';
import { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './Header'
import React from 'react';
import ContactInfo from './ContactInfo'
import ContactList from './ContactList';
import AddContact from './AddContact';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }])
  }


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div >
      <Router>
        <Header />
        <Routes>
        <Route
          path="/list"
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
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
          path="*"
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          }
        />
        </Routes>
      </Router>

      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  )
}

export default App;

//       <Router>
//         <div>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//           </Routes>
//         </div>
//       </Router>



// class App extends Component {
//   state = {
//     isShow: true,
//     person: [
//       {
//         fname: "Anika",
//         lname: "Lodhi",
//         age: 1,
//         job: "Eng",
//         likeCount: 0
//       },
//       {
//         fname: "Sapna",
//         lname: "Lodhi",
//         age: 26,
//         job: "Eng",
//         likeCount: 0
//       },
//       {
//         fname: "Ravindra",
//         lname: "Lodhi",
//         age: 281,
//         job: "Eng",
//         likeCount: 0
//       },
//     ]

//   }

//   onLikeBtnClick = (pos) => {
//     const updatedBlogList = this.state.person;
//     const updatedBlogObj = updatedBlogList[pos];
//     updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
//     updatedBlogObj[pos] = updatedBlogObj;
//     this.setState({ person: updatedBlogList })
//   }






//   buttonClicked = () => {
//     console.log(" <p>{this.isShow}</p> ", this.isShow);
//     //  let updateStatusValue = !this.state.isShow;
//     //this.isShow = !this.isShow;
//     //  this.setState({isShow : updateStatusValue})
//     this.setState((preState, PreProps) => {
//       return { isShow: !preState.isShow }
//     })
//   }



//   render() {

//     const personCard = this.state.person.map((ele, pos) => {
//       return (
//         <BlogCard key={pos} fname={ele.fname} lname={ele.lname} job={ele.job} age={ele.age} likeCount={ele.likeCount} onLikeBtnClick={() => { this.onLikeBtnClick(pos) }} />
//       )
//     })
//     return (

//       <Router>
//         <div>
//           <Header />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/product" element={<Product />} />
//           </Routes>
//         </div>
//       </Router>


//       // <div className="App">

//       //   <button onClick={this.buttonClicked}>{this.state.isShow ? 'Hide List' : 'Show list'}</button>
//       //   <p>{this.isShow}</p>
//       //   {this.state.isShow ? personCard : null}
//       // </div>
//     )
//   }
// }
