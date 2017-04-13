import React from 'react';
import Markdown from 'components/markdown';
import Code from 'components/code';
import Panel from 'components/panel';

const Preview = ({ document }) => {
  const elements = {
    code: Code,
  };
  return (
    <Panel padding={20}>
      <Markdown source={document.body || ''} elements={elements} />
    </Panel>
  );
};

Preview.propTypes = {
};

export default Preview;