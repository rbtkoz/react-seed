var React = require('react');

var StatItem = React.createClass({
    render: function(){
        return(
            <div>
                <h3>{this.props.title}</h3>
                <h4 className="text-muted small">{this.props.sl_desc}</h4>
            </div>
        )
    }
})

module.exports = StatItem;