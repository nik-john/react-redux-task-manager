import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Wrapper, InnerContainer } from './Wrapper';
import messages from './messages';
function Header() {
  return (
    <Wrapper>
      <InnerContainer>
        <section className="logo">
          <FormattedMessage {...messages.logo} />
        </section>
        <section className="account">
          <FormattedMessage
            {...messages.helloUser}
            values={{
              username: 'Nikhil',
            }}
          />
        </section>
      </InnerContainer>
    </Wrapper>
  );
}

export default Header;
