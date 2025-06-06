import React from "react";
import "./Dashboard.css"

const Dashboard  = ({products}) => {

    const categoryPrints = products["prints"];
    const categoryOriginals = products["originals"];





    return (
    
        <div className="dashboard-container">
            <div className="table-container">            
                
                <table>
                    <thead> 
                        <tr>
                            <th scope = "col"> Name</th>
                            <th scope = "col"> Image</th>
                            <th scope = "col"> Price</th>
                            <th scope = "col"> Available</th>
                        </tr>
                        </thead>

                        <tbody>
                           
                                
                                    
                                    {categoryPrints.map((prints) =>  
                                    
                                    <tr><th scope="row">{prints.name}</th> 
                                    <td><img src = {prints.imageUrl[0].thumbnail}></img></td>
                                    {prints.size.map((sizes) => sizes.name)}<td></td>
                                    <td>22</td>
                            </tr>
                        
                        )}


                               
                        </tbody>


                    
                </table>
            
            </div>
            


        </div>
    

)
}

export default Dashboard;