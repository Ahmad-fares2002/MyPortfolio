import { useState } from "react";

const EditSection = ({ product, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ ...product });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...formData, price: parseInt(formData.price) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default EditProductForm;
