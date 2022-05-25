import React, { useCallback, useState } from "react";

export interface StepContainerParams {
  setState: (state: any) => void;
  onNextStep: (value: any) => void;
  onPrevStep: () => void;
  state: any;
}

export interface StepContainerConfig {
  component: ({ onNextStep, setState }: StepContainerParams) => React.ReactNode;
}

type StepContainerProps = {
  configs: StepContainerConfig[];
  setStateOnNext?: boolean;
};

const StepContainer: React.FC<StepContainerProps> = ({
  configs,
  setStateOnNext,
}) => {
  const [step, setStep] = useState<number>(0);
  const [state, setState] = useState<any>(null);

  const onNextStep = useCallback(
    (value) => {
      setStep((prev) => prev + 1);
      if (setStateOnNext) {
        setState(value);
      }
    },
    [setStateOnNext]
  );

  const onPrevStep = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  if (!configs || configs.length < 1) {
    return <div>Please Provide a config</div>;
  }

  return (
    <>{configs[step].component({ state, onNextStep, setState, onPrevStep })}</>
  );
};

StepContainer.defaultProps = {
  setStateOnNext: false,
};

export default StepContainer;
