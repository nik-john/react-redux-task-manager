/**
*
* Info
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Wrapper, pulse, ToolTip, AddButton } from './Styles';
import messages from './messages';

function Info(props) {
  const { addSeedData, hide } = props;
  return (
    <Wrapper hide={hide}>
      <AddButton pulse={pulse} onClick={addSeedData}>
        <FormattedMessage {...messages.title} />
      </AddButton>
      <ToolTip>
        <FormattedMessage {...messages.sub} />
      </ToolTip>
    </Wrapper>
  );
}

Info.propTypes = {
  addSeedData: PropTypes.func,
  hide: PropTypes.bool,
};

export default Info;
