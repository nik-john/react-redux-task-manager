import React from 'react';
import DatePicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import Button from 'components/Button';
import CtoWrapper from './CtoWrapper';
import TextArea from './TextArea';
import ToggleSwitchComponent from './ToggleSwitchComponent';
import NumberField from './NumberField';

export default (current, action, handleNext, preview = false) => (
  <CtoWrapper key={current.get('id')} action="#">
    <h3>{current.get('text')}</h3>
    <div>
      {InputType(action, current, preview)}
    </div>
    {!preview ? <Button onClick={handleNext} disabled={!current.get('next')}>Next</Button> : null}
    {/* <Button onClick={handleBack} disabled={c.get('index') === 0}>Back</Button> */}
  </CtoWrapper>
);

const InputType = (action, current, preview) => {
  switch (current.get('type')) {
    case 'string':
      return <TextArea onChange={action} value={current.get('reply')} rows={preview ? 1 : 5} required placeholder="Type here ..." disabled={preview}></TextArea>;
    case 'number':
      return <NumberField type="number" onChange={action} value={current.get('reply')} required disabled={preview} />;
    case 'boolean':
      return ToggleSwitchComponent(action, current.get('reply') || false, preview, current.get('id'));
    case 'date':
      return (<DatePicker
        disabledDays={{ after: new Date() }}
        onDayClick={action}
        value={current.get('reply')}
        selectedDays={new Date(current.get('reply'))}
        required
        disabled={preview}
      />);
    default:
      return <TextArea onChange={action} value={current.get('reply')} rows={preview ? 1 : 5} required placeholder="Type here ..." disabled={preview}></TextArea>;
  }
};

