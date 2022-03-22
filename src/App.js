import React from 'react';
import FormInput from './components/FormInput';
import TodoItem from './components/TodoItem';
import logo from './logo.svg';
import EditModel from './components/EditModel';
import './App.css';
import DeleteModal from './components/DeleteModal';


class App extends React.Component{
  state={
    todos:[
      {
        id:1,
        title:"Reading a book"
      },
      {
        id:2,
        title:"Workout training"
      },
    ],
    isEdit: false,
    isDelete: false,
    editData:{
      id:"",
      title:""
    },
    delData:{
      id:"",
      title:""
    }
  }

  deleteTask = () =>{
    const{id}= this.state.delData
    this.setState({
      todos: this.state.todos.filter(item=> item.id !== id),
      isDelete: false,
      delData:{
        id:"",
        title:""
      }
    })

  }

  update =()=>{
    const{id, title}= this.state.editData
    const newData={id, title}
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    this.setState({
      todos:newTodos,
      isEdit:false,
      editData:{
        id:"",
        title:""
      }
    })
  }

  setTitle = e => {
    this.setState({
    editData:{
      ...this.state.editData,
      title:e.target.value
    }
    })
  }
  openDelete=(id, data)=>{
    this.setState({
      isDelete:true,
      delData:{
        id,
        title:data
      }
    })
  }
  closeDelete=()=>{
    this.setState({
      isDelete:false
    })
  }
  openModal=(id, data)=>{
    this.setState({
      isEdit:true,
      editData:{
        id,
        title:data
      }
    })
  }
  closeModal=()=>{
    this.setState({
      isEdit:false
    })
  }
  

  

  addTask = data =>{
    const id = this.state.todos.length
    const newData ={
      id: id + 1,
      title: data
      
    }

    this.setState({
      todos:[...this.state.todos, newData]
    })
  }

  render(){
    const{todos} = this.state
    return (
      <div className="app">
        <div className='logo'>
        <img src={logo} alt="logo"/>
          <h3>React Todo App</h3>
        </div>

        <div className="list">
          {todos.map(item=>
            <TodoItem 
              key={item.id} 
              todo={item} 
              open={this.openModal}
              delOpen={this.openDelete}
            />
          )}
          
        </div>
  
        <div className="input-form">
          <FormInput add={this.addTask}/>
        </div>

        <EditModel 
          edit={this.state.isEdit} 
          close={this.closeModal}
          change={this.setTitle}
          data = {this.state.editData}
          update = {this.update}
        />

        <DeleteModal
          delete={this.state.isDelete}
          close={this.closeDelete}
          deleteTodo={this.deleteTask}
          data = {this.state.delData}
          
        />

      </div>
    );
  }
  
}

export default App;
