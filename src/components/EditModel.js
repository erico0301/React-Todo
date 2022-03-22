import React from "react"
import Button from "./Button"
import "../styles/EditModel.css"

class EditModal extends React.Component{
    render(){
        const{edit, close, data, change, update,} = this.props
        if(edit){
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Edit task</h3>
                        <div className="input">
                            <input 
                                type="text" 
                                value={data.title}
                                onChange={change}
                            />
                        </div>
                        <div className="btn-group">
                            <Button text="Ok" variant="primary" action={update}/>
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
export default EditModal