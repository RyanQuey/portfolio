import React, { useRef, useEffect } from 'react';
import styles from './MediumWidget.module.scss';
import Parser from 'rss-parser'
import moment from 'moment'

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
      <div id="medium-widget-container" className={styles["container"]}>
        From time to time I write about what I'm learning or interested in. Check out some of my blog posts here. 
        <div className={styles["card-container"]}>

          {this.state.feedItems.reverse().map(item => {
            return (
              <div className={styles["card"]}>
                <div className={styles["post-content-preview"]} dangerouslySetInnerHTML={{__html: item.content}}></div>
                <div className={styles["post-body"]}>
                  <h5 className={styles["post-title"]}>{item.title}</h5>
                  <div className={styles["post-subtitle"]}>
                    {item.contentSnippet.replace("Continue reading on Medium »", "")}
                  </div>
                  <div className={styles["date"]}>
                    {moment(item.isoDate).format("MMMM Do YYYY")}
                  </div>
                  <a href={item.link} className={["post-link"]} target="_blank">Read on Medium »</a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
};

export default MediumWidget;
