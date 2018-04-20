import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';
import { fromJS } from 'immutable';

import H2 from 'components/H2';
import messages from '../messages';
import { FormPage } from '../index';
import { QUESTIONS } from '../constants';

const questions = fromJS(QUESTIONS);

const initialState = fromJS({
  current: null,
  progress: [{
    index: 1,
    question: questions.get(0),
  }],
  questions,
});
const onStart = () => false;
const onNext = () => false;
const onGoToStep = () => false;
const onReplyUpdate = () => false;

describe('<FormPage />', () => {
  it('should render the intro text list', () => {
    const renderedComponent = shallow(
      <FormPage {...initialState} onStart={onStart} onNext={onNext} onGoToStep={onGoToStep} onReplyUpdate={onReplyUpdate} />
    );
    expect(renderedComponent.contains(<H2>
      <FormattedMessage {...messages.header} />
    </H2>)).toEqual(true);
  });
  it('should render the start button', () => {
    const renderedComponent = shallow(
      <FormPage {...initialState} onStart={onStart} onNext={onNext} onGoToStep={onGoToStep} onReplyUpdate={onReplyUpdate} />
    );
    expect(renderedComponent.contains(<FormattedMessage {...messages.start} />));
  });
});
