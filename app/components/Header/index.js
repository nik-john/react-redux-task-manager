import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';
function Header() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default Header;
