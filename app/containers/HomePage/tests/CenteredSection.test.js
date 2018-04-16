import React from 'react';
import {
  shallow,
} from 'enzyme';

import CenteredSection from '../CenteredSection';

const theme = {
  colors: {
    text: {
      light: 'abc',
    },
  },
};
describe('<CenteredSection />', () => {
  it('should render an <section> tag', () => {
    const renderedComponent = shallow(<CenteredSection theme={theme} />);
    expect(renderedComponent.type()).toEqual('section');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<CenteredSection theme={theme} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<CenteredSection id={id} theme={theme} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<CenteredSection attribute={'test'} theme={theme} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
