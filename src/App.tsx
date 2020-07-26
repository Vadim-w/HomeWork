import React from 'react';
import './App.css';
import {PreJunior} from "./preJunior/PreJunior";
import {Junior} from "./Junior/Junior";
import {JuniorPlus} from "./Junior+/JuniorPlus";
import {NavBar} from "./NavBar/NavBar";
import {Route, HashRouter} from 'react-router-dom';


const App = () => {
    return (
        <HashRouter>
            <div className="App">
                <NavBar/>
                <Route path="/PreJunior" component={PreJunior}/>
                <Route path="/Junior" component={Junior}/>
                <Route path="/Junior+" component={JuniorPlus}/>
            </div>
        </HashRouter>
    );
}

export default App;
