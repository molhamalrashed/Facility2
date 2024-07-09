import React from "react";

const PriorityCell = (props) => {
  const { dataItem, field } = props;
  const priority = dataItem[field];

  const getEmoji = (priority) => {
    switch (priority) {
      case "High":
        return "🔥"; // High priority
      case "Medium":
        return "⚠️"; // Medium priority
      case "Low":
        return "✅"; // Low priority
      default:
        return "❓"; // Unknown priority
    }
  };

  return <td>{getEmoji(priority)}</td>;
};

export default PriorityCell;
