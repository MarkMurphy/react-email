import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Email from './Email';

const doctype =
  '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n';
const markup = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Email, { name: 'Mark Murphy' })
);

console.log(doctype + markup);
