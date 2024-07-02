import {Car, Header, Body, Footer, CommentCard} from "./Carss";
import picture from "../images/passport.jpeg";
// import State from "./State";
import bugatti from "../images/car_(1).jpeg";
import mercedes from "../images/car(2)_.jpeg";
import BMW from "../images/car(3)BMW.jpeg";
import gwagon from "../images/jeep.jpeg";
import React from 'react';

export const Task = () => {
    const myObj = {
        userName: 'John Doe',
        userMessage: 'This is an amazing post!',
        userProfilePicture: picture,
      } 
      const array = [{
        name: " BUGATTI",
        imgsrc: bugatti,
        model: "it's a bit older,from 2011",
        color: "My car color is white"
      },
      {
        name: "MERCEDES",
        imgsrc: mercedes,
        color: "My car color is black",
        model: "it's a bit older,from 2012"
    
      },
      {
        name: "BMW",
        imgsrc: BMW,
        color: "My car color is red",
        model: "it's a bit older,from 2014"
    
      },
      {
        name: "G WAGON",
        imgsrc: gwagon,
        color: "My car color is red",
        model: "it's a bit older,from 2014"
    
      }
      ]
  return (
    <div>
        <Header/>
      <Body/>
      <Footer/>
      <div className="app">
      <CommentCard data={myObj}/>
    </div>
       <Car value={array}/>
    {/* <State/> */}
    </div>
  )
}
