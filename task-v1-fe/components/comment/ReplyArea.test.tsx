import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ReplyArea from "./ReplyArea";

describe("ReplyArea Component", () => {
  const handleReplySubmitMock = jest.fn((e) => e.preventDefault());

  const setup = () => {
    return render(
      <ReplyArea handleReplySubmit={handleReplySubmitMock} authorId="User123" />
    );
  };

  it("should call handleReplySubmit on form submit", () => {
    const { getByText } = setup();
    const submitButton = getByText("Send");

    fireEvent.click(submitButton);
    expect(handleReplySubmitMock).toHaveBeenCalled();
  });

  it("should capture input value in textarea", () => {
    const { getByPlaceholderText } = setup();
    const textarea = getByPlaceholderText("What are your thoughts?") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "Test reply" } });
    expect(textarea.value).toBe("Test reply");
  });
});