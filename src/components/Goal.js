import React from 'react';
import StyledGoal from "../styles/StyledGoal";
import StyledCheckBox from "../styles/StyledCheckBox";
import StyledGoalDetails from "../styles/StyledGoalDetails";

const Goal = ({ goal, updatez }) => {
  return (
    <StyledGoal>
      <StyledCheckBox>
        {" "}
        <input type="checkbox" defaultChecked={goal.fields.Complete} disabled />
        <span />
      </StyledCheckBox>
      <h2>{goal.fields.title}</h2>
      <StyledGoalDetails>
        <h3>Detailz</h3>
        <p>{goal.fields.Details}</p>
        <h3>Updatez</h3>
        {updatez.map((update, index) => (
          <p key={index}>{update.fields.update}</p>
        ))}
      </StyledGoalDetails>
    </StyledGoal>
  );
}

export default Goal;
