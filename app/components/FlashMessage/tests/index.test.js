import React from 'react';
import { shallow } from 'enzyme';

import Flash from '../index';
import Wrapper from '../Wrapper';

describe('<Flash />', () => {
  let theme;
  beforeEach(() => {
    theme = {
      colors: {
        global: {
          green: '#67bd45',
          red: '#f44336',
        },
      },
    };
  });
  xit('should render the flash message', () => {
    const renderedComponent = shallow(
      Flash('error', 'xyz')
    );
    const wrapper = <Wrapper theme={theme} />;
    expect(renderedComponent.contains(
      wrapper
    )).toBe(true);
  });
});
