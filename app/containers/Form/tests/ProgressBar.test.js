import React from 'react';
import { shallow } from 'enzyme';

import ProgressBar from '../components/ProgressBar';

const theme = {
  colors: {
    global: {
      blue: '#178cd3',
      white: '#fff',
      green: '#67bd45',
    },
    text: {
      light: '#fff',
      dark: '#616161',
    },
    border: {
      default: 'rgba(189, 189, 189, 0.5)',
    },
  },
};

describe('<ProgressBar />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<ProgressBar theme={theme} />);
    expect(renderedComponent.type()).toEqual('ul');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ProgressBar theme={theme} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ProgressBar theme={theme} id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ProgressBar theme={theme} attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
