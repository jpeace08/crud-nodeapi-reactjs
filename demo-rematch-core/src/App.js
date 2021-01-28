import React, {  } from 'react';
import Browse from './pages/browse';
import PostDetail from './pages/postDetail';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostAdd from './pages/postAdd';


function App() {

	return (
		<Router >
			<Link to='/post'> Add post </Link>
			<Link to='/feeds'> NewFeeds </Link>
			<Switch>
				<Route exact path='/feeds'>
					<Browse />
				</Route>
				<Route exact path='/post/:_id'>
					<PostDetail />
				</Route>
				<Route exact path='/post'>
					<PostAdd />
				</Route>
			</Switch>
		</Router>
	);
}


export default App;
