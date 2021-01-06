import {useParams} from 'react-router-dom';
import shoes from './../shoes.json';
export const ProductDetails=()=>{

const { slug } = useParams();
const shoe =  shoes[slug];

if (!shoe) {
  return <h2>Not Found!</h2>;
}

const { name, img,price } = shoe;

return (
  <div className="card">
      <div>
      <img src={img} alt={name} />
      </div>
      <div className="card-header">
    <h2>{name}</h2>
    <p>UI/UX designing, html css tutorials</p>
    <p className="para">
    Welcome to our channel Dev AT. Here you can learn web designing,
    UI/UX designing, html css tutorials, css animations and css effects,
    javascript and jquery tutorials and related so on.
    </p>
    <button className="card-button">Add to Cart</button>
    </div>
    <div  className="card-price">
    <h4>{price}</h4>
    </div>
    
  </div>
);
}