import React from 'react'

export default function Model({SelectedItem,setSelectedItem}) {
  return (
    < > 
          {/* مودال التفاصيل */}
          {SelectedItem && (
           
                   <div className="detals">
                     <h1 onClick={() => setSelectedItem(null)}>&#10005;</h1>
                     <img
                       className="imgg"
                       width={200}
                       height={150}
                       src={SelectedItem.image}
                       alt={SelectedItem.alt}
                     />
                     <div className="content">
                       <h2>{SelectedItem.title}</h2>
                       <h3>{SelectedItem.price}</h3>
                       <p>{SelectedItem.badge}</p>
                       <p>{SelectedItem.description}</p>
                     </div>
                   </div>
          
              )}

    
    </>
  )
}
