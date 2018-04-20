import React from 'react';
import { shallow } from 'enzyme';

import StyledButton from '../StyledButton';

describe('<StyledButton />', () => {
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
  it('should render an <button> tag', () => {
    const renderedComponent = shallow(<StyledButton theme={theme} />);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<StyledButton theme={theme} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<StyledButton id={id} theme={theme} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<StyledButton attribute={'test'} theme={theme} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
