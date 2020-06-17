import compose from "recompose/compose";
import withLoading from "./withLoading";
import withState from "recompose/withState";
const withLoadData = withState("isLoading", "setIsLoading", false);

// const withXYZ = compose(withX, withY, withZ);
// const ComponentWithXYZ = withXYZ(Component);
// 또는
// const ComponentWithXYZ = compose(withX, withY, withZ)(Component);

function Component() {
  return "완료(컴포넌트 출력)";
}
const ComponentWithLoading = withLoading("로딩중")(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

// const withLoadDataAndLoading = compose(withLoadData, withLoading('로딩 중'))
// const ComponentWithLoadData = withLoadDataAndLoading(ComponentWithLoading);
