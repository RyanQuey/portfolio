// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Tags.module.scss';
import tagsMetadata from '../../../constants/tags-metadata';

type Props = {
  tags: string[],
  tagSlugs: string[]
};

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMoreTags: false };
    this.toggleShowMoreTags = this.toggleShowMoreTags.bind(this);
  }

  toggleShowMoreTags (e) {
    e.preventDefault();
    this.setState({showMoreTags: !this.state.showMoreTags})
  }

  render () {
    const { smallTags } = this.props
    const tags = this.state.showMoreTags ? this.props.tags : this.props.tags.slice(0, 5)
    const tagSlugs = this.state.showMoreTags ? this.props.tagSlugs : this.props.tagSlugs.slice(0, 5)

    return (
      <div className={styles['tags']}>
        <ul className={styles['tags__list']}>
          {tagSlugs && tagSlugs.map((slug, i) => {
            const tag = tags[i]
            const tagMetadata = tagsMetadata[tag] || {}
            const tagFriendlyName = tagMetadata.friendlyName || tag
            const tagDescription = tagMetadata.description || "" 

            return (
              <li className={styles['tags__list-item'] + " " + (styles[smallTags ? "small-tag" : "big-tag"])} key={tag}>
                  <Link to={slug} className={styles['tags__list-item-link'] + " " + (styles[smallTags ?"small-tag-link" : "big-tag-link"])}>
                    {tagFriendlyName}
                  </Link>
                </li>
            )
          })}

          {this.props.tags.length > 5 && <a 
            className={styles['tags__list-show-more-link']} 
            href="#"
            onClick={this.toggleShowMoreTags}
          >
            Show {this.state.showMoreTags ? "Less" : "More"}
          </a>}
        </ul>
      </div>
    )
  }
};

export default Tags;
