import React, { useState, useEffect } from 'react'
import AddItem from './AddItem'
import ItemList from './ItemList'
import TodoCSS from '../styles/Todo.module.css'
import NavBar from './NavBar'
import Date from './Date'

function Todo() {
    const [item, setItem] = useState('')
    const [list, setList] = useState([])
    
    return (
        <div className={TodoCSS.container}>
            <div className={TodoCSS.upSection}> 
                <NavBar/>
                <Date/>
                <AddItem list={list} setList={setList} item={item} setItem={setItem}/> 
                <div className={TodoCSS.lowSection}>
                    <ItemList/>
                </div>
            </div>
        </div>
    )
}

export default Todo
