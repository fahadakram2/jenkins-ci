import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders header", () => {
    render(<App />);
    expect(screen.getByText(/Simple To-Do List/i)).toBeInTheDocument();
  });

  test("can add a new task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  test("can toggle a task as completed", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    const task = screen.getByText("New Task");
    fireEvent.click(task);
    expect(task).toHaveStyle("text-decoration: line-through");
  });

  test("can delete a task", () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/Add a new task/i);
    const addButton = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Task To Delete" } });
    fireEvent.click(addButton);

    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Task To Delete")).not.toBeInTheDocument();
  });
});
