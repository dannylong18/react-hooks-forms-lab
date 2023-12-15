import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const initialFormValues = {
    name : '',
    category : 'Produce',
  }
  const [formData, setFormData] = useState(initialFormValues)

  function handleOnChange (e) {
    const {name, value} = e.target
    setFormData({...formData, [name] : value})
  }
  
  function handleSubmit (event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    }
    onItemFormSubmit(newItem)

    setFormData(initialFormValues)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleOnChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleOnChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
