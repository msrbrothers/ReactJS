import React, { Component } from "react";

import classes from '../blobCard.module.css';

const fullName = (fname, lname) => {
    return `${fname} ${lname}`
}

// const BlogCard = (props) =>{
//     console.log("props ::", props);

//     return(
//         <div className={classes.personCard}>
//         <h3>Full Name : {fullName(props.fname, props.lname)}</h3>
//         <p> Age : {props.age} </p>
//         <p>Job : {props.job}</p>
//       </div>
//     )
// }



class BlogCard extends Component {

   state = {
    likeCount : 0
   }

   onLikeBtnClicked = () =>{
    console.log("running..... ");
    
    this.setState((prevState, prevProp) => {
        console.log(prevProp);
        console.log("prevState :", prevState);
        return {likeCount : prevState.likeCount + 1 }
    })
   }

    render() {
        return (
            < div className={classes.personCard} >
                <h3>Full Name : {fullName(this.props.fname, this.props.lname)}</h3>
                <p> Age : {this.props.age} </p>
                <p>Job : {this.props.job}</p>
                <p>Count : {this.props.likeCount}</p>
                <button onClick={this.props.onLikeBtnClick}>like</button>
            </div >
        )
    }
}

export default BlogCard;