/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { HomePage } from '../index';
import messages from '../messages';

describe('<HomePage />', () => {
  it('should render welcome message', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.startProjectHeader} />
    )).toBe(true);
  });

  it('should render the sub title', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(
      <FormattedMessage
        {...messages.startProjectMessage}
      />
    )).toBe(true);
  });
});
