import React from 'react'
import { Link } from 'react-router-dom';
export default function NotFound(props){
    return(
        <div>
            <h1 style={{color: 'red', textAlign: "center", }}>404 - Not Found</h1>
            <Link to="/">Powrtót na stronę główną</Link>
        </div>
    )
}