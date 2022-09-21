import React, { useState } from 'react'

const List = ({list, listName, ListItem, ListForm, handleSubmit}) => {
    const [create, setCreate] = useState(false)

    const onCreate = (savedItem) => {
        handleSubmit(savedItem)

        setCreate(false)
    }

    return (
    <>
         <div className="flex justify-between">
            <h2 className="text-3xl my-0">{listName}</h2>

            {!create && <button className="outline-button" onClick={() => setCreate(true)}>Add {listName}</button>}
        </div>
        {create && <ListForm handleSubmit={onCreate}/>}
        
        {list.map((item) => (
            <ListItem key={item.id} savedItem={item} handleSubmit={handleSubmit}/>
        ))}
    </>)
}

export default List