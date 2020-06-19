import React from "react";
import Button from "../04/Button";
import Text from "../04/Text";

export default function DeleteModalContent() {
  return (
    <div>
      <div>
        <Text>정말로 삭제하시겠습니까?</Text>
      </div>
      <Button primary>예</Button>
      <Button>닫기</Button>
    </div>
  );
}
