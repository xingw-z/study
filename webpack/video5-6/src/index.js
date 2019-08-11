import React, { Component } from 'react';
import ReactDom from 'react-dom';
import List from './list';
import Home from './home';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path='/' exact component={Home}></Route>
					<Route path='/list' component={List}></Route>
				</div>
			</BrowserRouter>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));
