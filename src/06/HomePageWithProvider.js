import React, { PureComponent } from "react";
import ButtonWithLoadingContext from "./ButtonWithLoadingContext";
import LoadingProvider from "./LoadingProvider";

function RowBComponent() {
  return <Button>버튼</Button>;
}

function RowCComponent() {
  return <ButtonWithLoadingContext>버튼</ButtonWithLoadingContext>;
}

function TableComponent() {
  return (
    <table>
      <RowBComponent />
      <RowCComponent />
    </table>
  );
}

const TableComponent = () => <ButtonWithLoadingContext label="버튼" />;

class HomePageComponent extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext>상태 변경</ButtonWithLoadingContext>
      </LoadingProvider>
    );
  }
}

export default HomePageComponent;
