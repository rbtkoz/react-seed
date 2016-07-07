var React = require('react')

var Base = React.createClass({

    render : function(){

        return(

            <div className="jumbotron wave">
                <div className = "container">


                    <div className ="row">
                        <div className ="col-md-8">
                            <div className="page-header">
                                <h1><div className="main_title"><a className ="deco-none" href="#/">Pastelitos</a><span className="definition">- little pastries</span></div></h1>
                                <p className ="desc">Authentic Cuban puff pastries filled with tropical fruit and latin sabor. <br></br>Handmade in Brooklyn with love.</p>
                            </div>
                        </div>
                        <div className ="social col-md-4">
                            <ul className="nav nav-pills nav-justified">
                                <li role="presentation"><a href="#/about">about us</a></li>
                                <li role="presentation"><a href="#/order">order</a></li>
                                <li role="presentation"><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-6 col-sm-6 main_img">
                            <img src="img/pastelito.jpg" alt="pastelito" className="clip-circle_lg pastelito"/>
                        </div>

                        <div className="col-md-6 col-sm-12">
                            <ul className="ingredient_list">
                                <li className="ingredients">Guava</li>
                                <li className="ingredients">Mango</li>
                                <li className="ingredients">Coconut</li>
                                <li className="ingredients">Fresh Cheese</li>
                                <li className="ingredients">Picadillo</li>
                            </ul>
                        </div>
                    </div>


                </div>
                <div>
                    {this.props.children}
                </div>
            </div>





        )
    }



});

module.exports = Base;