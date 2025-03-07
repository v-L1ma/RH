import React, { useState } from "react";

type TChangeStepProps = {
  steps: number;
  event?: React.FormEvent;
};

export function useMultiStepForm(steps: React.ReactElement[]) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  function changeStep(props: TChangeStepProps) {
    props.event?.preventDefault();
    
    if (props.steps < 0 || props.steps >= steps.length) return;

    setCurrentStep(props.steps);
  }

  return {
    currentStep,
    currentComponent: steps[currentStep],
    changeStep,
    isLastStep: currentStep + 1 === steps.length ? true : false,
  };
}
