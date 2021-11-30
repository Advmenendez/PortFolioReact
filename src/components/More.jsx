import React from "react";
import "./More.css";
const More = ({ languages }) => {
    return (
      <div className="language">
        <h1>Languages</h1>
        <p>{languages.language}</p>
        <h1>Level</h1>
        <p>{languages.wrlevel} </p>
        
         
        </div>
      
    );
  };
  
  export default More;
