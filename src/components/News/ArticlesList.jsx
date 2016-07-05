var React = require('react');
var NewsArticle = require('./NewsArticle.jsx');

var ArticleList = React.createClass({
    render: function(){

        var createArticle = function(obj) {
            var title = obj.title;
            var subtitle = obj.subtitle;
            var content = obj.content;
            var image1 = obj.image1;
            var image2 =obj.image2;
            var location = obj.location;
            console.log(title,"vartitle")
            return <NewsArticle
                key="one"
                title={title}
                subtitle={subtitle}
                content={content}
                image1={image1}
                image2={image2}
                image_poster={image2}
                location={location}/>
        };

        console.log(this.props.articles, "articles")
            return(<ul>{this.props.articles.map(createArticle)}</ul>)
    }

})

module.exports = ArticleList;