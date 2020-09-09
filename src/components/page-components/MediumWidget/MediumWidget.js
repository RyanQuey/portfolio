import React, { useRef, useEffect } from 'react';
import styles from './MediumWidget.module.scss';
import Parser from 'rss-parser'

// requires an rss feed file there. Right now just manually run scripts/get-blogs-rss.sh
// import mediumRSS from '../../../utils'

const parser = new Parser({
  customFields: {
    item: ['image','image'],
  }
});

class MediumWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      active: 0,
      feedItems: [],
    }  

    this.parseRSS = this.parseRSS.bind(this)
  }

  async parseRSS () {
    let feed = await parser.parseURL("/medium-feed.rss");
    console.log(feed.title);

    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
      console.log(item)
    });

    console.log("set items!")

    this.setState({"feedItems": feed.items})
  }

  componentDidMount () {
    this.parseRSS()
  }
  render (){
    console.log("current items", this.state.feedItems)
    return(
      <div className="container">
        These are my Blog posts
        {this.state.feedItems.map(item => {
          return (
            <div className="card">
              <img src={item.thumbnail} className="card-img-top post-thumbnail" alt={item.title}></img>
              <div className="card-body">
                  <h5 className="card-title post-title">{item.title}</h5>
                  <p className="card-text post-preview">{item.contentSnippet}</p>
                  <a href={item.link} className="btn btn-link-grey">Read this article on Medium.com</a>
            </div>
        </div>
          )
        })}
      </div>
    )
  }
};

export default MediumWidget;
