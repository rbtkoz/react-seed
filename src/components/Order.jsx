var React = require('react');

var Order = React.createClass({

    render: function () {

        var Orderstyle= {
            borderTop: "coral 40px solid"
        }
        return (


            
            <div className="row" style={Orderstyle}>
                <div className="col-md-6 col-md-offset-3">
                    <div className="alpha">We are in a closed alpha now, but if you are interested in trying our pastelitos, enter your info below and we will be in touch soon</div>
                </div>

                <div className="col-md-6 col-md-offset-5">

                    <form className="form-inline">
                        <div className="form-group">
                            <input type="email" className="form-control" classID="exampleInputEmail2" placeholder="email address"></input>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>


            </div>
        );
    }

});

module.exports = Order;