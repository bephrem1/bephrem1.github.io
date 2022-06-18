import React from 'react';

export const areEquivalentComponentTypes = (
  SampleComponent: React.ReactElement,
  TargetComponent: React.FunctionComponent
) => {
  return SampleComponent.type == TargetComponent;
};
