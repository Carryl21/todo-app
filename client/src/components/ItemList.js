import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import ItemListCSS from '../styles/ItemList.module.css'


function ItemList() {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch('/api')
            .then(response => response.json())
            .then(data => setList(data))
    }, [])

    const handleClickedButton = (id) => {

        fetch(`api/${id}`, {
            method: 'DELETE',
            body: null,
            headers: {'Content-Type': 'application/json'}
        })
    }


    return(
        <ul className={ItemListCSS.list}>
            {list.map(item => (
                <div key={item._id}>
                    <p>{item.text}</p>
                    <button onClick={() => handleClickedButton(item._id)}><FontAwesomeIcon icon={faEllipsisH}/></button>
                </div>
            ))}
        </ul>
    );
}

export default ItemList
