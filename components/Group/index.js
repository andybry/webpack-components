import React from 'react';

export default class Group extends React.Component {
  
  render() {
    return <div className="Group">{this.props.children}</div>;
  }

}
