import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./pages/header";
import Main from "./pages/main";
import Detail from "./pages/detail";
function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path='/article/:id' component={Detail} />
                <Route exact path='/' component={Main} />
            </Switch>
        </>
    );
}

export default App;
