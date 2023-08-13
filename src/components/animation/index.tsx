import React from "react";
import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: "translateY(-100%)",
};

interface ILineColor {
  [key: string]: {};
}

const transitionStyles: ILineColor = {
    entering: { transform: 'translateY(0%)' },
    entered:  {  transform: 'translateY(9%)' },
    exiting: { transform: 'translateY(-180%)' },
    exited: { transform: 'translateY(-180%)' },
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
};

const Animation = ({ in: inProp, children }: any) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        {children}
      </div>
    )}
  </Transition>
);

export default Animation;
