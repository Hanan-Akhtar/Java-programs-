import React, { Component } from 'react';

// Higher Order Component for logging rendering time
const withLogging = (WrappedComponent) => {
  return class WithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${WrappedComponent.name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${WrappedComponent.name} is unmounted`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

// Component that will be enhanced with logging
const MyComponent = () => {
  return (
    <div>
      <h1>Hello from MyComponent!</h1>
    </div>
  );
};

// Use the HOC to create a new component with logging
const MyComponentWithLogging = withLogging(MyComponent);

// App component using the enhanced component
const HOC = () => {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <MyComponentWithLogging />
    </div>
  );
};

export default HOC;
