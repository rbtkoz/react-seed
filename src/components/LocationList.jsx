var React = require('react');
var LocationItem = require('./LocationItem.jsx')

var LocationList = React.createClass({

    render: function(){
        return (
            < LocationItem views ={this.props.views} likes ={this.props.likes} comments={this.props.comments} />
        )



    }
})

module.exports = LocationList;