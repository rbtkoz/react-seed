var React = require('react');

var NewsArticle =  React.createClass({

    render: function(){
        console.log(this.props,"this.props");

        return (


            <div className="row">
                <div className ="col-md-2">
                    <img src={this.props.image_poster} />
                </div>
                <div className ="col-md-8">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <p>{this.props.content}</p>

                    <img src={this.props.image1} />
                    <img src={this.props.image2} />
                    <h4>{this.props.location}</h4>
                </div>
            </div>
        );
    }
});


module.exports=NewsArticle;