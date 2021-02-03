import React from 'react';
import List from './List';


const History = (props) =>{
     
        console.log("this.state.items ==>")
        let listitems = props.queries.map((item, i)=> <li key={i}>
            <span>{item.method}</span>
            <span>{item.url}</span>
        </li>)
        return (
            <div>
                <List>{listitems}</List>
            </div>
        )
    
}

export default History;