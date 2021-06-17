import {
  render,
  cleanup,
  within,
} from "@testing-library/react";
import UserDetail from "./userDetail";

describe("<App />", () => {
  afterEach(() => {
    cleanup();
  });

  const props = {
    name: "username",
    email: "email",
    phone: "+65-12333",
  };


  test('should take a snapshot', () => {
    const { asFragment } = render(<UserDetail {...props}/>)
    expect(asFragment(<UserDetail />)).toMatchSnapshot()
   })

   test('render props', () => {
    const { getByTestId } = render(<UserDetail {...props}/>)
    const { getByText } = within(getByTestId('name'))
    expect(getByText(props.name)).toBeInTheDocument()
   })
});
