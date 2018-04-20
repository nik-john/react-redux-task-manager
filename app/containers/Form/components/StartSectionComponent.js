import React from 'react';
import { FormattedMessage } from 'react-intl';
import H2 from 'components/H2';
import Button from 'components/Button';

import StartWrapper from './StartWrapper';
import messages from '../messages';

export default (c, onStart) => (
  c ? '' :
  <StartWrapper>
    <H2>
      <FormattedMessage {...messages.header} />
    </H2>
    <p>
      <em>
        <FormattedMessage {...messages.sub} />
      </em>
    </p>
    <Button onClick={onStart}>
      <FormattedMessage {...messages.start} />
    </Button>
  </StartWrapper>
);
