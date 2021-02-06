import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './home';
import Navbar from './navbar';
import Movies from './movies';
import Tv from './tv';
import PageNotFound from './pageNotFound';
import Register from './register';
import Login from './login';
import ProtectedRoute from './protectedRoute';

//import decodedToken from './token';
//console.log('App..js',decodedToken)

class App extends Component {
    state = {}

    render() {
        return (<>
            <Navbar />
            <div className="container py-5">
                <Switch>
                    {/*render={(props) => <Home {...props} trendingMovies={movies} trendingTv={tv} />*/}
                    <ProtectedRoute path='/home' component={Home}></ProtectedRoute>
                    <ProtectedRoute path='/movies' component={Movies}></ProtectedRoute>
                    <ProtectedRoute path='/tv' component={Tv}></ProtectedRoute>
                    <Route path='/register' component={Register}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/pageNotFound' component={PageNotFound}></Route>
                    <Redirect from='/' exact to='/register' ></Redirect>
                    <Redirect to='/pageNotFound' ></Redirect>
                </Switch>
            </div>
        </>);
    }
}

export default App;