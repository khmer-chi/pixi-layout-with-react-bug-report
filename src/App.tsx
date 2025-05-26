import '@pixi/layout';
import { Application, extend, useApplication } from '@pixi/react';
import { LayoutContainer } from '@pixi/layout/components';
// import { LayoutResizer } from './LayoutResizer';
extend({
  LayoutContainer,
});
export const App = () => {
  return (
    <Application background={'#1099bb'} resizeTo={window}>
      {/* <LayoutResizer> */}
      <layoutContainer
        layout={{
          width: 250,
          height: 250,
          padding: 0,
          alignContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: `#0f172a`,
        }}
      >
        <layoutContainer layout={{ margin: 0, height: 50, width: 50, backgroundColor: '#ff0000' }} />
        <layoutContainer layout={{ margin: 0, height: 50, width: 50, backgroundColor: '#00ff00' }} />
        <layoutContainer layout={{ margin: 0, height: 50, width: 50, backgroundColor: '#0000ff' }} />
        {/* <layoutContainer layout={{  margin: 0, height: 50, width: 50, backgroundColor: '#ff0000' }} /> */}
        {/* <layoutContainer layout={{  margin: 0, height: 50, width: 50, backgroundColor: '#00ff00' }} /> */}
      </layoutContainer>
      {/* </LayoutResizer> */}
    </Application>
  );
};
