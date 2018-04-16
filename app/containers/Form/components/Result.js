import React from 'react';
import H2 from 'components/H2';
import Button from 'components/Button';
import ShadowContainer from 'components/ShadowContainer';

import FormWrapper from './FormWrapper';
import FormFieldsComponent from './FormFieldsComponent';

export default function ResultComponent(progress, handleSubmit) {
  return (
    <FormWrapper>
      <H2>Claim Submission</H2>
      <ShadowContainer />
      {progress.map((item) => FormFieldsComponent(item.get('question'), () => false, () => false, true))}
      <Button onClick={handleSubmit}>Submit</Button>
    </FormWrapper>
  );
}

