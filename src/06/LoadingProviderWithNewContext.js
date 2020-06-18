import React from "react";

const { Provider, Consumer } = React.createContext({}); //1

export { Consumer }; //2

export default class LoadingProvider extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.setLoading = this.setLoading.bind(this);
  }

  setLoading(key, value) {
    const newState = { [key]: value };
    this.setState(newState);
  }

  render() {
    const context = {
      ...this.state, //3
      setLoading: this.setLoading,
    };
    return <Provider value={context}>{this.props.children}</Provider>; //4, 5
  }
}
