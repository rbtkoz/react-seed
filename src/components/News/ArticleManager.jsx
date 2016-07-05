var React = require('react');
var ArticlesList = require('./ArticlesList.jsx');

var ArticleManager = React.createClass({

    getInitialState: function() {
        return {articles: []};
        //     {title:"Article1",
        //     subtitle:"Subtitle1",
        //     content:"somecontentsomecontent1",
        //     image1:"img/alex.png",
        //     image2:"img/alex.png",
        //     location:"Istanbul, Turkey"
        // }
        // ]};
    },



    render: function(){

        return (
          <div>
              <ArticlesList articles = {this.state.articles} />
          </div>

        );
    }
})

module.exports = ArticleManager;