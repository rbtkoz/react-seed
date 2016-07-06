var React = require('react');
var LocationList = require('./LocationList.jsx');


var LocationListManager = React.createClass({

    render: function() {

        var divStyle ={
            height:300,
            backgroundColor:'#262626'
        }



        var headingStyle={
            height:200


        }

        if (this.props.headingColor){
            headingStyle.background =this.props.headingColor;
        }

        return (
            <div style={divStyle} className ="panel panel-primary">
                <div style={headingStyle} className="panel-heading col-md-12">
                </div>
                <LocationList views={this.props.views} likes={this.props.likes} comments={this.props.comments}/>
              </div>
        )
    }
})

module.exports = LocationListManager;
