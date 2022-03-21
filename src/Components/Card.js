import React from 'react'
import data from './Data'
import '../App.css'
function Card (){
    return(
        <div>
            <div className='Main-Search Main-content'>
            {data.cardData.map((items)=>{

                return(
                    <div className='cards Main-container-spacing'>
                        <div className='inner-card'>
                        <h5>{items.title}</h5>
                      
                        </div>
                        
                    </div>
                )

            })}  
            </div>


        </div>
    )
}

export default Card