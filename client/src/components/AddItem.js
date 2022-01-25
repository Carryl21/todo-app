import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import AddItemCSS from '../styles/AddItem.module.css'

function AddItem(props) {

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent refreshing

        props.setList([  // adding to list
            ...props.list, {id: uuidv4(), text: props.item}
        ]);

        props.setItem(''); // empty input after submitting

        fetch('/apipost', {
            method: 'POST',
            body: JSON.stringify({text: props.item}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            alert('Alert')
        })
    } 

    const handleChange = (e) => {
        props.setItem(e.target.value)
    }

    return (
        <div className={AddItemCSS.container}>
            <form onSubmit={handleSubmit}>
                <input 
                    className='input'
                    type='text'
                    placeholder='add a task...'
                    value={props.item} 
                    onChange={handleChange}
                />
            </form>
        </div>
    )
}

export default AddItem
