import React from 'react';

import ToggleSwitch from './ToggleSwitch';

const ToggleSwitchComponent = (onChange, checked, disabled, id) => (
  <ToggleSwitch>
    <input type="checkbox" onChange={onChange} id={id} checked={checked} disabled={disabled} required />
    <label htmlFor={id}>Toggle</label>
  </ToggleSwitch>
);

export default ToggleSwitchComponent;
