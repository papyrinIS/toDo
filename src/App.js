import React, {useState} from 'react';
import './App.css';
import {AppReduxForm} from "./Components/Forms/AppForm";
import ListContainer from "./Components/List/ListContainer";
import useClickOutside from "click-outside-hook";
import logo from "./Assets/img/logo.png"
import plus from "./Assets/img/plus.svg";



const App = (props) => {

    let listElements=props.App.map(l=><ListContainer newTask={props.newTask} key={l.name} id={l.id} name={l.name} />)

   const [editList,setEditList]=useState(true);


    let activateAddList = () => {
        setEditList(false)
    }
    let deactivateAddList = () => {
        setEditList(true)
    }
    let addNewList = (value) => {
        props.AddNewList(value);
        setEditList(true)
    }

    const ref = useClickOutside(deactivateAddList);




  return (
    <div>

        <div className="App">
            <header className="header"><img alt="logo" src={logo} /></header>


                {listElements}


            <div className="addList">
                {editList &&
                <span className="addListButton" onClick={activateAddList}>
       <img alt="plus" src={plus}/> Добавьте ещё одну колонку
        </span>
                }
                <div ref={ref}>
                    {!editList &&
                    <AppReduxForm deactivateAddList={deactivateAddList} onSubmit={addNewList}/>
                    }
                </div>
            </div>


        </div>




    </div>
  );
}







export default App;
