import React from 'react';
import './TraditionalArt.css';
import { Link } from 'react-router-dom';

const TraditionalArt = ({category, images}) => {

  const categoryImages = images[category];

  
  

  
  if (!images) return <>spapit</>;
  
  return (
    <div>

      <div className = "text-container">
        <h1 className = "text-page-top">Graphic Design</h1>
        <h3 className = "text-page-top-2">works of brush and paint</h3>
      </div>

      <div className= "container">
        <div className="art-grid">
          

            {categoryImages.map((image) => (
              <div key = {image.id} className= {`art-item ${image.size}`} style = {{width: "100%", display: 'flex', justifyContent: "center"}}>

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

export default TraditionalArt;