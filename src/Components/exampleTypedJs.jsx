import React from "react";
import Typed from "typed.js";

export const TypedReactHooksDemo = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "TAILWIND",
        "REACTJS",
        "NODEJS",
        "MONGODB",
        "EXPRESS",
        "DOCKER",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
      loopCount: Infinity,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.reset();
    };
  }, []);

  return (
    <>
      <span
        className="text-primary ml-1  font-semibold lg:text-2xl"
        ref={el}
      />

      {/* <button onClick={() => typed.current.toggle()}>Toggle</button>
      <button onClick={() => typed.current.start()}>Start</button>
      <button onClick={() => typed.current.stop()}>Stop</button>
      <button onClick={() => typed.current.reset()}>Reset</button>
      <button onClick={() => typed.current.destroy()}>Destroy</button> */}
    </>
  );
};
