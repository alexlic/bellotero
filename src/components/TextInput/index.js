import React from 'react';
import css from './TextInput.module.css'

const TextInput = ({
  onChange,
  isMoney = false,
  onFocus = () => {},
  className = '',
  currentValue
}) => (
  <div className={`${css.inputContainer}${className}`} variant={isMoney ? 'money': ''}>
    <input
      type="text"
      className={css.input}
      onChange={onChange}
      onFocus={onFocus}
      value={currentValue}/>
  </div>
)

export default TextInput
