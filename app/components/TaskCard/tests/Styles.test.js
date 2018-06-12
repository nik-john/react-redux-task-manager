import React from 'react';
import { shallow } from 'enzyme';

import {
  Wrapper,
  DefaultView,
  Overlay,
  AddView,
  EditView,
  TextContainer,
  Status,
  SaveButton,
  Group,
} from '../Styles';

describe('<Wrapper />', () => {
  it('should render an <article> tag', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.type()).toEqual('article');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Wrapper id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Wrapper attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<DefaultView />', () => {
  it('should render an <article> tag', () => {
    const renderedComponent = shallow(<DefaultView />);
    expect(renderedComponent.type()).toEqual('article');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<DefaultView />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<DefaultView id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<DefaultView attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<Overlay />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Overlay />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Overlay />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Overlay id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Overlay attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<AddView />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<AddView />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<AddView />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<AddView id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<AddView attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<EditView />', () => {
  it('should render an <form> tag', () => {
    const renderedComponent = shallow(<EditView />);
    expect(renderedComponent.type()).toEqual('form');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<EditView />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<EditView id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<EditView attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<TextContainer />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<TextContainer />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<TextContainer />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<TextContainer id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<TextContainer attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<Status />', () => {
  it('should render an <p> tag', () => {
    const renderedComponent = shallow(<Status />);
    expect(renderedComponent.type()).toEqual('p');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Status />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Status id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Status attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<SaveButton />', () => {
  it('should render an <button> tag', () => {
    const renderedComponent = shallow(<SaveButton />);
    expect(renderedComponent.type()).toEqual('button');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<SaveButton />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<SaveButton id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<SaveButton attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

describe('<Group />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Group />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Group />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Group id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Group attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});

