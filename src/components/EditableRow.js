import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Masukkan title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Masukkan isbn..."
          name="isbn"
          value={editFormData.isbn}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Masukkan author..."
          name="author"
          value={editFormData.author}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Simpan</button>
        <button type="button" onClick={handleCancelClick}>
          Batal
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
