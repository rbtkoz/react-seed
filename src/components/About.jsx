var React = require('react');

var About = React.createClass({


    render: function(){

        var Aboutstyle= {
            borderTop: "coral 40px solid"
        }


        return (

                <div className="row" style={Aboutstyle}>
                    <div className="col-md-2 col-md-offset-1 ali"><img src="img/ali.png" alt="ali" className="avatar clip-circle"></img>
                        <h2 className="name ali">Alessandra  Villaamil</h2>
                        <p className="role">Researcher</p>
                    </div>
                    <div className="col-md-2 col-md-offset-2 priscilla"><img src="img/priscilla.png" alt="priscilla" className="avatar clip-circle"></img>
                        <h2 className="name priscilla">Priscilla Colon</h2>
                        <p className="role">Baker</p></div>
                    <div className="col-md-2 col-md-offset-2 alex"><img src="img/alex.png" alt="alex" className="avatar clip-circle"></img>
                        <h2 className="name alex">Alexander Kozovski</h2>
                        <p className="role">Pastelitos aficionado</p></div>


                </div>

        );
        
    }
});

module.exports = About;