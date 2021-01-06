import React from 'react';
import {Link} from 'react-router-dom'

export const  Header=()=> {
    return(
        <nav>
         <Link to="/">Home</Link>
         <Link to="/product">Product</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/about">About</Link>
       </nav>

    )
}

