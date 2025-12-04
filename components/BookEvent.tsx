"use client"
import { useState } from "react";



export const BookEvent = () => {
    const[email,setEmail]=useState("");
    const[submitted,setSubmitted]=useState(false);

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        // Here you can add logic to handle the booking, e.g., send the email to the server
        setTimeout(()=>{
            setSubmitted(true);
        },500);
    }
    return(
        <div id="book-event">
          {submitted ?(
            <p className="text-sm">Thank you for Siging up</p>
          ):(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email" >Email address</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                </div>
                <button type="submit">Book My Spot</button>
            </form>
          )}  
        </div>
    )
}