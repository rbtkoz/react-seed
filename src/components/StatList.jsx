var React = require('react');
var StatItem = require('./StatItem.jsx');

var StatList = React.createClass({
    render: function(){
        return(
            <StatItem title={this.props.title} sl_desc ={this.props.lm_desc}/>
        );

    }
    
})
module.exports =StatList;