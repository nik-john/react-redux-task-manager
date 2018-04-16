import React from 'react';
import H2 from 'components/H2';
import Button from 'components/Button';

import FormWrapper from './FormWrapper';
import FormFieldsComponent from './FormFieldsComponent';

export default function ResultComponent(progress, handleSubmit) {
  return (
    <FormWrapper>
      <H2>Please Review Your Form</H2>
      {progress.map((item) => FormFieldsComponent(item.get('question'), () => false, () => false, true))}
      <Button onClick={handleSubmit}>Submit</Button>
    </FormWrapper>
  );
}

