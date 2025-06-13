import React, { useState } from 'react';

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  function changeHandler(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="goal"
        placeholder="Goal"
        value={formData.goal}
        onChange={changeHandler}
      />
      <input
        type="text"
        name="by"
        placeholder="By when?"
        value={formData.by}
        onChange={changeHandler}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
