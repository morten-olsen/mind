import React from 'react';
import Html from 'components/code/html';

import { InlineLexer } from 'marked';
import katex from 'katex';

import 'katex/dist/katex.min.css';

export default ({ text, children }) => {
  const innerText = text || children;
  const lexer = new InlineLexer([], {});
  const rendered = lexer.output(innerText);
  const withLatex = rendered.replace(/\$\$([^$]*)\$\$/, (a, tex) => {
    try {
      return katex.renderToString(tex.trim());
    } catch (err) {
      return `<div class="error">${err.toString()}</div>`;
    }
  });
  return (
    <Html tag="span" source={withLatex} />
  );
};