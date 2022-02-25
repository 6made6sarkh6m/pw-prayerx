import React from 'react';
import styled from 'styled-components/native';
import {COLORS} from './constants/colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persister} from './redux/store';
import BaseApp from './navigation/BaseApp';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <StyledView>
          <BaseApp />
        </StyledView>
      </PersistGate>
    </Provider>
  );
};

const StyledView = styled.View`
  flex: 1;
  background-color: ${COLORS.blindingWhite};
`;
export default App;
