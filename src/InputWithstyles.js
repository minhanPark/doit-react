import React, { PureComponent } from "react";

class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.setRef = this.setRef.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const { name, onChange } = this.props;
    if (onChange) {
      onChange(name, e.target.value);
    }
  }
  componentDidMount() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }

  componentDidUpdate() {
    if (this.props.autoFocus) {
      this.ref.focus();
    }
  }
  setRef(ref) {
    this.ref = ref;
  }

  render() {
    const { errorMessage, label, name, value, type } = this.props;
    return (
      <div className="input-field">
        <input
          id={`input_${name}`}
          ref={this.setRef}
          onChange={this.handleChange}
          value={value}
          type={type}
          className={`validate ${errorMessage && "invalid"}`}
        />
        <label className="active" htmlFor={`input_${name}`}>
          {label}
        </label>
        {errorMessage && (
          <span className="helper-text" data-error={errorMessage}>
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
}

Input.defaultProps = {
  onChange: () => {},
  autoFocus: false,
  type: "text",
};

export default Input;
