import React from 'react';
import { shallow } from 'enzyme';

import { Default, Edit, Add } from '../index';

import {
  TextContainer,
  Status,
  AddView,
} from '../Styles';

describe('<Default />', () => {
  it('Should render an empty Wrapper', () => {
    const renderedComponent = shallow(
      <Default />
    );
    expect(renderedComponent.contains(
      <TextContainer>
        <p className="title" />
        <Status completed={false} />
      </TextContainer>
    )).toBe(true);
  });
});

describe('<Edit />', () => {
  it('Should contain the title', () => {
    const renderedComponent = shallow(
      <Edit id="123" title="abc" onEdit={() => {}} onUndoTaskChange={() => {}} />
    );
    expect(renderedComponent.contains(
      <label htmlFor="title">
        Enter Task Name
      </label>
    )).toBe(true);
  });
});

describe('<Add />', () => {
  it('Should contain the title', () => {
    const renderedComponent = shallow(
      <Add id="123" title="abc" edit={false} status="active" onAdd={() => {}} />
    );
    expect(renderedComponent.contains(
      <AddView>
        + Add Task
      </AddView>
    )).toBe(true);
  });
});
