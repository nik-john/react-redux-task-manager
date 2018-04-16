import React from 'react';
import { shallow } from 'enzyme';

import ProgressBarItem from '../components/ProgressBarItem';

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

describe('<ProgressBarItem />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<ProgressBarItem theme={theme} />);
    expect(renderedComponent.type()).toEqual('li');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ProgressBarItem theme={theme} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ProgressBarItem theme={theme} id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ProgressBarItem theme={theme} attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
