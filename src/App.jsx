import React, { useState } from 'react';
import { Containers } from '@app/containers/Containers';
import { Welcome } from '@app/containers/Welcome';
import { useWelcomeEffect } from '@app/shared/hooks/welcomeScreen';
import { MainWrapper, Wrapper } from './style';

function App() {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);

  /* Effect for welcome expandAll
   *  Note:
   *  This hook does not have any sense. I have created this
   *  to show, how we can create custom hooks and use them regarding
   *  to react-team recommendations
   * */
  useWelcomeEffect(setShowWelcomeScreen, 3000);

  return (
    <MainWrapper>
      {showWelcomeScreen ? (
        <Wrapper>
          <Welcome title="Hello. Hope you have a wonderful day. Be patient:)" />
        </Wrapper>
      ) : (
        <Containers />
      )}
    </MainWrapper>
  );
}

export default App;
