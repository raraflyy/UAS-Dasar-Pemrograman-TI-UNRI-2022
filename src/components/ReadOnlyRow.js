import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.title}</td>
      <td>{contact.isbn}</td>
      <td>{contact.author}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Hapus
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
