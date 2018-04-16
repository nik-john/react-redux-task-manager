import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from '../Wrapper';
const theme = {
  colors: {
    global: {
      blue: '#178cd3',
      white: '#ffffff',
      green: '#67bd45',
      red: '#f44336',
    },
    text: {
      light: '#ffffff',
      dark: '#616161',
    },
    border: {
      default: 'rgba(189, 189, 189, 0.5)',
    },
  },
};
describe('<Wrapper />', () => {
  it('should render an <p> tag', () => {
    const renderedComponent = shallow(<Wrapper theme={theme} />);
    expect(renderedComponent.type()).toEqual('p');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Wrapper theme={theme} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Wrapper theme={theme} id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Wrapper theme={theme} attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
