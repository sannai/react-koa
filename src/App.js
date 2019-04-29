import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./pages/Home";
import Message from "./pages/Message";
import "../src/style/rest.css";
function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route path='/detail/:id' component={Detail} />
				<Route path='/message' component={Message} />
				<Route exact path='/' component={Home} />
			</Switch>
		</>
	);
}

export default App;
