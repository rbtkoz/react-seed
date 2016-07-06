var React = require('react');
var StatList = require("./StatList.jsx");

var StatListManager = React.createClass({
    getInitialState: function() {
        return {};
        // return {items:
        //     [
        //         "New followers added this month",
        //         "Average Monthly Users",
        //          "Yearly Income Goal"
        //     ]
        // };

    },
    onChange: function(e){
    },


    render: function(){

        var divStyle ={
            margin: 10,
            padding:50
        }

        var headingStyle={

        }

        if (this.props.headingColor){
            headingStyle.background =this.props.headingColor;
        }
        return (
                <div style={divStyle} className="col-md-3 panel">
                    <StatList lm_desc ={this.props.main_desc} title={this.props.title} />
                </div>



        );
    }

});

module.exports = StatListManager;