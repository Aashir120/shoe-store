import React from 'react';
import {Link} from 'react-router-dom';
import shoes from './../shoes.json';

export const Product=()=>{     
    return(
        <div className="container">
            <ul>
      {Object.entries(shoes).map(([slug, { name, img,price }]) => (
        <li key={slug}>
            <Link to={`/product/${slug}`}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button className="button">Add to Cart</button>
            </Link>
        </li>
      ))}
    </ul>
    <ul>
      {Object.entries(shoes).map(([slug, { name, img,price }]) => (
        <li key={slug}>
            <Link to={`/product/${slug}`}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button className="button">Add to Cart</button>
            </Link>
        </li>
      ))}
    </ul>
        </div>
    )
 
}