import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "./TodoItem";

describe("TodoItem component", () => {
  const task = { text: "Test Task", completed: false };
  const toggleTask = jest.fn();
  const deleteTask = jest.fn();

  test("renders task text", () => {
    render(<TodoItem task={task} toggleTask={toggleTask} deleteTask={deleteTask} />);
    expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
  });

  test("calls toggleTask when task text is clicked", () => {
    render(<TodoItem task={task} toggleTask={toggleTask} deleteTask={deleteTask} />);
    fireEvent.click(screen.getByText(/Test Task/i));
    expect(toggleTask).toHaveBeenCalledTimes(1);
  });

  test("calls deleteTask when delete button is clicked", () => {
    render(<TodoItem task={task} toggleTask={toggleTask} deleteTask={deleteTask} />);
    fireEvent.click(screen.getByText(/Delete/i));
    expect(deleteTask).toHaveBeenCalledTimes(1);
  });

  test("renders completed task with line-through", () => {
    const completedTask = { ...task, completed: true };
    render(<TodoItem task={completedTask} toggleTask={toggleTask} deleteTask={deleteTask} />);
    const taskElement = screen.getByText(/Test Task/i);
    expect(taskElement).toHaveStyle("text-decoration: line-through");
  });
});
