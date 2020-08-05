// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import tagsMetadata from '../constants/tags-metadata';
import { useSiteMetadata, useTagsList } from '../hooks';

const TagsListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();
  const tags = useTagsList();

  return (
    <Layout title={`Tags - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Solutions Sorted by Technology">
        <p>Find solutions for whatever technology you're interested in below.</p>
        <ul>
          {tags.map((tag) => {
            const tagName = tag.fieldValue
            const tagMetadata = tagsMetadata[tagName] || {}
            const tagFriendlyName = tagMetadata.friendlyName || tagName
            const tagDescription = tagMetadata.description || "" 

            return (
              <li key={tag.fieldValue}>
                <Link to={`/tag/${kebabCase(tag.fieldValue)}/`}>
                  {tagFriendlyName} ({tag.totalCount})
                </Link>
              </li>
            )
          })}
        </ul>
      </Page>
    </Layout>
  );
};

export default TagsListTemplate;
