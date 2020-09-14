import React from 'react';
import './App.css';
import {PreJunior} from "./preJunior/PreJunior";
import {JuniorPlus} from "./Junior+/JuniorPlus";
import {NavBar} from "./NavBar/NavBar";
import {Route, HashRouter} from 'react-router-dom';
import JuniorContainer from "./Junior/JuniorContainer";


const App = () => {
    return (
        <HashRouter>
            <div>
                <NavBar/>
                <Route path="/PreJunior" component={PreJunior}/>
                <Route path="/Junior" component={JuniorContainer}/>
                <Route path="/Junior+" component={JuniorPlus}/>
            </div>
        </HashRouter>
    );
}

export default App;
