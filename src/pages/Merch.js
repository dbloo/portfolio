import React from 'react';
import './TraditionalArt.css';
import { Link } from 'react-router-dom';

const Merch = ({category, images}) => {

  const categoryImages = images[category];

  
  

  
  if (!images) return <>spapit</>;
  
  return (
    <div className = "art-page-container">

      <div className = "text-container">
        <h1 className = "text-page-top">MERCH</h1>
        <h3 className = "text-page-top-2">$WAG$WAG$WAG$WAG💦💦</h3>
      </div>

      <div className= "container">
        <div className="art-grid">
          

            {categoryImages.map((image) => (
              <div key = {image.id} className= {`art-item ${image.size}`}>

              <Link to = {`/info/${category}/${image.id}`}>
              
                <img src={image.imageUrl} alt="Large Art Piece" />
              
              </Link>
            </div>

            ))}




          
          
        </div>
      </div>
    </div>
  );
}

export default Merch;