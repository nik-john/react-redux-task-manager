import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import Button from 'components/Button';
// import DayPicker from 'react-day-picker';

import FormFieldsComponent from '../components/FormFieldsComponent';

const current = fromJS({
  text: 'abc',
  next: 'xyz',
  reply: 'unw',
  type: 'date',
});

const action = () => false;

const handleNext = () => false;

describe('<FormFieldsComponent />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(FormFieldsComponent(current, action, handleNext));
    expect(renderedComponent.type()).toEqual('form');
  });

  it('should contain a header with the current question text', () => {
    const renderedComponent = shallow(FormFieldsComponent(current, action, handleNext));
    expect(renderedComponent.contains(
      <h3>
        {current.get('text')}
      </h3>)).toEqual(true);
  });

  it('should contain the Next Button', () => {
    const renderedComponent = shallow(FormFieldsComponent(current, action, handleNext));
    expect(renderedComponent.contains(
      <Button onClick={handleNext} disabled={false}>
        Next
      </Button>)).toEqual(true);
  });
});
