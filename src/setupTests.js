import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16.3";

configure({ adapter: new Adapter() });

afterEach(() => {
  console.error.mockClear();
});

beforeEach(() => {
  jest.spyOn(console, "error").mockImplementation((e) => {
    throw new Error(e);
  });
});
