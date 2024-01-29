import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import MathJax from "mathjax3-react";
import Typography from '@mui/material/Typography';

const MarkdownMathJaxRenderer = ({ contentPath }) => {
  const [markdownHtml, setMarkdownHtml] = useState('');

  useEffect(() => {
    fetch(contentPath)
      .then(res => res.text())
      .then(text => {
        const html = marked(text);
        setMarkdownHtml(html);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Typography variant="subtitle1">
        <MathJax.Html html={markdownHtml} />
      </Typography>
    </>
  );
};

export default MarkdownMathJaxRenderer;
