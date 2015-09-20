import React from 'react';
import Header from './Header';
import Group from './Group';

const textToComponent = {
  "Header": Header,
  "Group": Group
};

export default class ComponentRenderer extends React.Component {
  
  render() {
    const Component = textToComponent[this.props.component];
    const childNodes = this.props.componentChildren.map((child, index) => {
      return <ComponentRenderer key={index} {...child} />
    });
    return <Component {...this.props.data}>
      {childNodes}
    </Component>;
  }

}