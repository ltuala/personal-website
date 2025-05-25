import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem'; // original component
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import GiscusComponent from '@site/src/components/GiscusComponent';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function BlogPostItemWrapper(props) {
  const { metadata, isBlogPostPage } = useBlogPost();
  const isBrowser = useIsBrowser();

  const { frontMatter } = metadata;
  const { enableComments } = frontMatter;

  return (
    <>
      <BlogPostItem {...props} />
      {(enableComments && isBlogPostPage && isBrowser) && <GiscusComponent />}
    </>
  );
}
