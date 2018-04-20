import React from 'react';
import { shallow } from 'enzyme';

import ShadowContainer from '../index';

describe('<ShadowContainer />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <ShadowContainer id={id} />
    );
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its text', () => {
    const children = 'Text';
    const renderedComponent = shallow(
      <ShadowContainer>{children}</ShadowContainer>
    );
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
