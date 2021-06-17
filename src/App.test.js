import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { renderHook, act } from '@testing-library/react-hooks'
import App from "./App";

describe("<App />", () => {
  afterEach(() => {
    cleanup();
  });


  test("renders correctly", () => {
    const tree = render(<App />)
    expect(tree).toMatchSnapshot()
  })

  test("renders react container", () => {
    render(<App />);
    const container = screen.getAllByTestId("container");
    const inputText = screen.getAllByTestId("input-text");
    expect(container).toBeDefined();
    expect(inputText).toBeDefined();
  });

  test("onchange the input text", () => {
    const { getByPlaceholderText } = render(<App />);
    fireEvent.change(getByPlaceholderText("Search ..."), {
      target: { value: "new value" },
    });
  });

  test('filtered List Container', () => {
    const { result } = renderHook(() => <App />)
  
    act(() => {
      result.current.filteredList
    })
    expect(result.current.filteredList).toBe()
    expect(typeof result.current.filterData).toBe('undefined')
  })
  
});
