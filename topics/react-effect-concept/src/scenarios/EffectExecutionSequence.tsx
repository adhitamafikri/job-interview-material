import React from "react";

export const EffectExecutionSequence = (): React.ReactElement => {
  React.useEffect(() => {
    console.log("Effect 1 executed");

    return () => {
      console.log("Cleanup for Effect 1 executed");
    };
  }, []);

  React.useEffect(() => {
    console.log("Effect 2 executed");

    return () => {
      console.log("Cleanup for Effect 2 executed");
    };
  }, []);

  return (
    <div>
      <h1>Effect Execution Sequence</h1>
      <p>Check the console to see the effect execution.</p>
    </div>
  );
};
