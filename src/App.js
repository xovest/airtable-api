import Airtable from "airtable";
import { useEffect, useState } from "react";
import Goal from "./components/Goal";
import styled from 'styled-components';
import { GlobalStyle } from './styles/Global.style';

const base = new Airtable({ apiKey: 'keyUFqqZLAFr4tW5D' }).base('appUASBYdWNQWhdY2');

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;

function App() {
  const [goalz, setGoalz] = useState([]);
  const [updatez, setUpdatez] = useState([]);

  useEffect(() => {
    base('Goalz')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setGoalz(records);
        fetchNextPage();
      });
    base('Updatez')
      .select({ view: 'Grid view' })
      .eachPage((records, fetchNextPage) => {
        setUpdatez(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledH1>Goalz mah dude</StyledH1>
      {goalz.map(goal => (
        <Goal
          key={goal.id}
          goal={goal}
          updatez={updatez.filter(update => update.fields.GoalID[0] === goal.id)}
        />
      ))}
    </>
  );
}

export default App;
