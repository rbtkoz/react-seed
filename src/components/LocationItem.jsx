var React = require('react');

var LocationItem = React.createClass({

    render: function(){

        var liStyle={
            paddingTop:10
        }
        var fontStyle={
            color:"white"
        }
        return (
            <div>
                <div className="col-md-4 text-center">
                    <li style={liStyle}>
                        <h4 style={fontStyle}>{this.props.views}</h4>
                        <h4 text-muted small>Shot Views</h4>
                     </li>
                        </div>
                <div className="col-md-4 text-center">
                    <li style={liStyle}>
                        <h4 style={fontStyle}>{this.props.likes}</h4>
                        <h4 text-muted small>Likes</h4>
                    </li>
                    </div>
                <div className="col-md-4 text-center">
                    <li style={liStyle}>
                        <h4 style={fontStyle}>{this.props.comments}</h4>
                        <h4 text-muted small>Comments</h4>
                    </li>
                </div>
            </div>
        )
    }


});
        module.exports=LocationItem;