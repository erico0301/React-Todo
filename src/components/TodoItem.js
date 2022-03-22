import React from "react";
import Button from "./Button";
import PropTypes from"prop-types"
import "../styles/Button.css"

const TodoItem = ({todo, open, delOpen}) =>{
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text="Edit" variant="success" action={() => open(todo.id, todo.title)}/>
                <Button text="Delete" variant="warning" action={() => delOpen(todo.id, todo.title)}/>
            </div>
        </div>
    )
}
TodoItem.propTypes ={
    todo: PropTypes.object.isRequired,
    open: PropTypes.func,
    delOpen: PropTypes.func,
}

export default TodoItem

const todoItem ={
    background : "#2da4f8",
    color : "#fff",
    display: "flex",
    alignItems:"center",
    height:"3rem",
    padding:"0 1rem",
    justifyContent:"space-between",
    margin:"0.5rem 0"
}