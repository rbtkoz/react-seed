var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
// var useRouterHistory = require('react-router').useRouterHistory;
// var createHashHistory = require('react-router').hashHistory;


console.log(JSON.stringify(hashHistory));
var Base = require('./components/Base.jsx');
var About = require('./components/About.jsx');
var Order = require('./components/Order.jsx');


var Routes = (
    <Router history ={hashHistory}>
        <Route path="/" component={Base} >
            <Route path="/about" component={About} />
            <Route path="/order" component={Order} />

        </Route>
    </Router>
)

module.exports = Routes;

