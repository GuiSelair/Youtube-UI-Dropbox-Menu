import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Session from './components/Session';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';
import data from './data';

const App: React.FC = () => {
  return (
    <>
      <Session
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Session
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />
      <Session
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />
      <Session
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />
      <Session
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>
      <GlobalStyles />
    </>
  );
};

export default App;
