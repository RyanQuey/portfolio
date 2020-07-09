// @flow strict
import React from 'react';
import moment from 'moment';
import { Link, withPrefix } from 'gatsby';
import type { Edges } from '../../types';
import Tags from '../Post/Tags';
import styles from './Feed.module.scss';
import tagStyles from '../Post/Tags/Tags.module.scss';

type Props = {
  edges: Edges
};

class Feed extends React.Component {


  render () {
    const edges = this.props.edges

    return (
      <div className={styles['feed']}>
        {edges.map((edge) => {
          const {frontmatter, fields} = edge.node

          return (
            <div className={styles['feed__item']} key={fields.slug}>
              <div className={styles['feed__item-meta']}>
                <span className={styles['feed__item-meta-divider']} />
                <span className={styles['feed__item-meta-category']}>
                  <Link to={fields.categorySlug} className={styles['feed__item-meta-category-link']}>{frontmatter.category}</Link>
                </span>
              </div>
              <div className={styles['feed__item-content-container']}>
                <div className={styles['feed__item-image-container']}>
                  <img
                    src={withPrefix(frontmatter.indexImage)}
                    className={styles['feed__item-image']}
                    alt={"Project screenshot"}
                  />
                </div>
                <div className={styles['feed__item-details-container']}>
                  <h2 className={styles['feed__item-title']}>
                    <Link className={styles['feed__item-title-link']} to={fields.slug}>{frontmatter.title}</Link>
                  </h2>
                  <p className={styles['feed__item-description']}>
                    {frontmatter.description}
                    {false && 
                      <span>{" "}
                      Part of the {" "}
                      <a 
                        className={styles['feed__item-github-link']} 
                        href={`https://github.com/RyanQuey/${frontmatter.githubRepo}`}
                        target="_blank">
                          {frontmatter.githubRepo}
                          
                          {false && "TODO make a link to show all feed items that have the same repo, using a filter"}
                      </a> 
                      {" "}project.
                      </span>
                    }
                  </p>
                </div>  
                <div className={styles['feed__item-footer']}>
                  <div className={styles['feed__item-tags-container']}>
                    <Tags 
                      tags={frontmatter.tags} 
                      tagSlugs={fields.tagSlugs}
                      smallTags={true}
                      />              
                  </div>
                  <div className={styles['feed__item-links-container']}>
                    <a 
                      className={styles['feed__item-github-link']} 
                      href={`https://github.com/RyanQuey/${frontmatter.githubRepo}`}
                      target="_blank"
                      >
                      Check it out on Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
};

export default Feed;
