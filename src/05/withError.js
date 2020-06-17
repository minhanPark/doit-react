import React from "react";
import withstyles, { css } from "../04/withStyles";

export default function (defaultMessage) {
  return (WrappedComponent) => {
    const { displayName, name: componentName } = WrappedComponent;
    const wrappedComponentName = displayName || componentName;

    function ComponentWithError({ hasError, errorMessage, styles, ...props }) {
      //4
      return (
        <React.Fragment>
          <WrappedComponent {...props} />
          {hasError && <div {...css(styles.error)}>{errorMessage}</div>}
        </React.Fragment>
      );
    }
    ComponentWithError.defaultProps = {
      //6
      errorMessage: defaultMessage,
    };
    ComponentWithError.displayName = `withError(${wrappedComponentName})`; //7
    return withstyles(({ color }) => ({
      //8
      error: {
        color: color.error, //9
      },
    }))(ComponentWithError);
  };
}
