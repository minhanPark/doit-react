import React from "react";
import PropTypes from "prop-types";

import { Provider } from "./FormContext";

export default class FormProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}, //1
      errors: {}, //2
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(name, updatedValue) {
    // 3
    this.setState(
      ({ values }) => ({
        values: {
          ...values,
          [name]: updatedValue, //4
        },
      }),
      () => this.validate(this.state.values) //5
    );
  }

  reset() {
    this.setState({ values: {}, errors: {} }); //6
  }

  submit() {
    this.props.onSubmit(this.state.values); //7
  }

  validate(values) {
    const { validate } = this.props;
    if (!validate) {
      return;
    }
    const errors = validate(values); //8
    this.setState({ errors }); //9
  }

  render() {
    const { values, errors } = this.state;
    return (
      <Provider
        value={{
          errors, //1o
          values, //11
          onChange: this.onChange, //12
          reset: this.reset, //13
          submit: this.submit, //14
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

FormProvider.propTypes = {
  validate: PropTypes.func,
};
