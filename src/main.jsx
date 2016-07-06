var React = require('react');
var ReactDOM = require('react-dom');
var StatListManager = require('./components/StatListManager.jsx');
var LocationListManager = require('./components/LocationListManager.jsx');


ReactDOM.render(<StatListManager headingColor="tomato" title ="20" main_desc ="New followers added this month" />, document.getElementById('stat20'));
ReactDOM.render(<StatListManager headingColor="tomato" title ="$ 1250" main_desc="Average Monthly Income"/>, document.getElementById('stat1250'));
ReactDOM.render(<StatListManager headingColor="tomato" title ="$ 13865" main_desc="Yearly Income Goal"/>, document.getElementById('stat13865'));
ReactDOM.render(<LocationListManager views="15080" likes="12000" comments="5100"/>, document.getElementById('loc15080'));
ReactDOM.render(<LocationListManager headingColor="#ff69b4" views="15080" likes="12000" comments="5100"/>, document.getElementById('loc15080pink'));
