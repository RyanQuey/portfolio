// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage? :string
};

const Layout = ({
  children,
  title,
  description,
  socialImage
}: Props) => {
  const { author, url } = useSiteMetadata();
  // for my use case, I don't think anyone is going to tweet my pages. Don't bother with this, just unsetting for now
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={metaImageUrl} />
        <script src="https://medium-widget.pixelpoint.io/widget.js"></script>
        <script type="text/javascript">
          function mediumWidget(){
            MediumWidget.Init({renderTo: '#medium-widget', params: {"resource":"https://medium.com/@ryanquey","postsPerLine":2,"limit":4,"picture":"big","fields":["description","author","claps","publishAt"],"ratio":"landscape"}});
          }
        </script>

        
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
