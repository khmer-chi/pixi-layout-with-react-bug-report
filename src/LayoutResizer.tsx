import { useApplication } from '@pixi/react';
import { FC } from 'react';

export const LayoutResizer: FC<any> = ({ children }) => {
  const { app } = useApplication();

  app.stage.layout = {
    width: window.innerWidth,
    height: window.innerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  };
  app.renderer.on('resize', () => {
    app.stage.layout = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  });

  return children;
};
