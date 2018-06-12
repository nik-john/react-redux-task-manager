import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import MessagesBar from '../index';
import Wrapper from '../Wrapper';

describe('<MessagesBar />', () => {
  it('should render the empty message', () => {
    const renderedComponent = shallow(
      <MessagesBar activeCount={0} totalCount={0} />
    );
    expect(renderedComponent.contains(
      <Wrapper className="active">
        <section className="title">
          <FormattedMessage {...messages.tasksEmpty} />
        </section>
        <section className="sub">
          <FormattedMessage {...messages.tasksEmptySub} />
        </section>
      </Wrapper>
    )).toBe(true);
  });
  it('should render the Complete Tasks message', () => {
    const renderedComponent = shallow(
      <MessagesBar activeCount={1} totalCount={1} />
    );
    expect(renderedComponent.contains(
      <section className="title">
        <FormattedMessage id="todos.components.MessagesBar.completeTasks" defaultMessage="Complete all tasks" />
      </section>
    )).toBe(true);
  });
});
