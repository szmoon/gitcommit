import React from 'react';
import createReactClass from 'create-react-class';

const Main = createReactClass({
  render() {
    return (
      <div>
          Main.js
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main;