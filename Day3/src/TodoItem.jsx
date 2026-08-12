import React, { memo } from "react";

function TodoItem({ item, index, onEdit, onDelete }) {
  return (
    <li className="task-item">

      <span className="task-text">
        {item}
      </span>

      <button
        className="edit-btn"
        onClick={onEdit}
      >
        EDIT
      </button>

      <button
        className="delete-btn"
        onClick={onDelete}
      >
        DELETE
      </button>

    </li>
  );
}

export default memo(TodoItem);