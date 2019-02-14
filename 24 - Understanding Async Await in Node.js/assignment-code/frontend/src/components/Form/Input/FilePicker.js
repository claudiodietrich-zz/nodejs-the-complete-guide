import React from 'react';

import './Input.css';

const filePicker = props => (
  <div className="input">
    <label htmlFor={props.id}>{props.label}</label>
    <input
      className={[
        !props.valid ? 'invalid' : 'valid',
        props.touched ? 'touched' : 'untouched'
      ].join(' ')}
      type="file"
      id={props.id}
      onChange={e => props.onChange(props.id, e.target.value, e.target.files)}
      onBlur={props.onBlur}
    />
  </div>
);

export default filePicker;
