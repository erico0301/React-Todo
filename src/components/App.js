import React  from "react";
import { render } from "react-dom";

// import Header from "./Header"
import List from "./List"
// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello Endrio </h1>
//             </div>
//         )
//     }
// }

class App extends React.Component{
    // state = {
    //     // book : { 
    //     //     name:"Whose child is this?",
    //     //     author : "Bill Wilson",
    //     // }
    //     books:["whose child is this", "Chicken Soup for the soul","myBook"]
    // }

    state = {
        book : "Chicken soup for the soul"
    }
        
    render(){
        return(
            <div>
                <List name="kodeakademia" test="test" myBook={this.state.book}>this is my list</List>
            </div>
        )
    }
}export default App;