import React from 'react';
import { shallow } from 'enzyme';

import A from '../A';

describe('<A />', () => {
  const theme = {
    blue: '#178cd3',
    white: '#ffffff',
    green: '#67bd45',
    red: '#f44336',
    textDark: '#616161',
    borderDefault: 'rgba(189, 189, 189, 0.5)',
  };
  it('should render an <a> tag', () => {
    const renderedComponent = shallow(<A theme={theme} />);
    expect(renderedComponent.type()).toEqual('a');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<A theme={theme} />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<A id={id} theme={theme} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<A attribute={'test'} theme={theme} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
