import React, { createRef, useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';


const Comment = React.memo(({ repo, theme ='github-light'}) => {
  const containerRef = createRef();

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src,
      repo,
      theme,
      'issue-term': 'pathname',
      label: '✨💬 comments ✨',
      crossOrigin: 'anonymous',
      async: 'true',
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef.current.appendChild(utterances);
  }, [containerRef, repo, theme]);

  return <div ref={containerRef} />;
});

Comment.displayName = 'Utterances';

export default Comment;
