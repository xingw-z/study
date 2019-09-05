import React, { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {
	render() {
		return (
			<div>
				<div>this is home page</div>
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));