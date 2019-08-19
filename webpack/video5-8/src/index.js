// console.log(this === window);

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Child from 'Child';

class App extends Component {
	render() {
		return (
			<div>
				<div>This is App</div>
                <Child></Child>
			</div>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));