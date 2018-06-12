import React from 'react';

import Wrapper from './Wrapper';

function Base() {
  return (
    <Wrapper>
      {this.children}
    </Wrapper>
  );
}

export default Base;
