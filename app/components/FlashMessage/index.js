import React from 'react';

import Wrapper from './Wrapper';

function FlashMessage(message, type = 'error') {
  return (
    <Wrapper type={type}>
      {message}
    </Wrapper>
  );
}

export default FlashMessage;
