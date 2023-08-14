import React from "react";
import { Transition } from "react-transition-group";

const duration = 600;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: "translateY(-100%)",
};

// interface ILineColor {
//   [key: string]: {};
// }

// const transitionStyles: ILineColor = {
//   // entering: { transform: 'translateY(0%)' },
//   // entered:  { transform: 'translateY(0%)' },
//   // exiting: { transform: 'translateY(-100%)' },
//   // exited: { transform: 'translateY(-100%)' },
//   entering: { transform: "rotateX(0deg)" },
//   entered: { transform: "rotateY(360deg)" },
//   exiting: { transform: "rotateX(360eg)" },
//   exited: { transform: "rotateY(0deg)" },
//   //   entering: { opacity: 1 },
//   //   entered: { opacity: 1 },
//   //   exiting: { opacity: 0 },
//   //   exited: { opacity: 0 },
// };

const Animation = ({ in: inProp, children ,transitionStyles}: any) => (
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
