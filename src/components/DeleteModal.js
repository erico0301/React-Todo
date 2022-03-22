import React from "react";
import Button from "./Button";
import "../styles/DeleteModal.css"

class DeleteModal extends React.Component{
    render(){
        const{close, deleteTodo} = this.props
        
        if (this.props.delete)
        {
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Are you sure ?</h3>
                        <div className="btn-group">
                            <Button text="Yes" variant="primary" action={deleteTodo}/>
                            <Button text="Cancle" variant="warning" action={close}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
            
    }
}
export default DeleteModal