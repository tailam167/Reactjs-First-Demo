import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is test from context",
      rating: 10,
    },
    {
      id: 2,
      rating: 8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, dui vel fringilla lacinia, arcu velit dictum turpis, vel maximus.",
    },
    {
      id: 3,
      rating: 6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, dui vel fringilla lacinia, arcu velit dictum turpis, vel maximus.",
    },
    {
      id: 4,
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, dui vel fringilla lacinia, arcu velit dictum turpis, vel maximus.",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Delete feedback action
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Add feedback action
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update Feedback Item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
