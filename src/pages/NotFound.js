import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {

    return (
    
    <div style={{height: "35rem", display:"block", padding:"2rem"}}>

        <h1 style={{
            paddingTop: "45%",
            paddingBottom: "5%",
            fontSize: "2.2rem"
            }}>
                
                Sorry, we couldn't find that for you. 💔
                
                </h1>
                <Link to = "/">
        <button style={{
            width:"100%", 
            background:"white", 
            borderRadius: "15px", 
            border:"1px solid black",
            padding: "2%",
            cursor: "pointer",
            }}>
                
                Return Home
                
                </button>
                </Link>
        </div>)

}

export default NotFound;