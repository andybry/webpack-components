import React from 'react';
import ComponentRenderer from './components/ComponentRenderer';
import data from './data/example.json';

React.render(
  <ComponentRenderer {...data} />,
  document.getElementById('content')
);