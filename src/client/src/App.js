import React from 'react';
import {
	BrowserRouter,
	Router,
	Link,
	NavLink,
	Navigate,
	Outlet,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	return (
		<div>
			<h1>Hello, React!</h1>
			<BrowserRouter>
				<Routes>
					<Route />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
