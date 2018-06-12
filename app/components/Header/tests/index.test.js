import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import Header from '../index';

describe('<Header />', () => {
  it('should render the logo', () => {
    const renderedComponent = shallow(
      <Header />
    );
    expect(renderedComponent.contains(
      <section className="logo">
        <FormattedMessage {...messages.logo} />
      </section>
    )).toBe(true);
  });

  it('should render the username', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.contains(
      <section className="account">
        <FormattedMessage
          {...messages.helloUser}
          values={{
            username: 'Nikhil',
          }}
        />
      </section>
    )).toBe(true);
  });
});
