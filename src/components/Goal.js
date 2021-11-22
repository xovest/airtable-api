import React from 'react';

const Goal = ({ goal, updatez }) => {
  return (
    <div>
      <label>
        <input type="checkbox" defaultChecked={goal.fields.Complete} disabled />
      </label>
      <h2>{goal.fields.title}</h2>
      <div>
        <h3>Detailz</h3>
        <p>{goal.fields.Details}</p>
        <h3>Updatez</h3>
        {updatez.map((update, index) => (
          <p key={index}>{update.fields.update}</p>
        ))}
      </div>
    </div>
  );
}

export default Goal;
