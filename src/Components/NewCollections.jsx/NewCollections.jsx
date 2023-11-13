import React from 'react'
import './NewCollections.css'
import newCollection from '../Assests/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className="new-collections">
      <div className="popular">
        <h1>New Collections</h1>
        <hr />
    </div>
      
      <div className="collections">
        {newCollection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
        })}
      </div>
    </div>

  )
}

export default NewCollections