import React from "react";
import { storiesOf } from "@storybook/react";

import ReduxApp from "../07/ReduxApp01";
import ReduxApp2 from "../07/ReduxApp03";
import AdvReduxApp from "../07/AdvReduxApp01";

storiesOf("ReduxApp", module)
  .addWithJSX("기본 스토어 알림", () => <ReduxApp />)
  .addWithJSX("리듀서 추가", () => <ReduxApp2 />)
  .addWithJSX("리듀서 분리", () => <AdvReduxApp />);
