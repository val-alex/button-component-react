import React from 'react'


const Button = ({
  className,
  handleClick,
  disabled,
  name,
  type,
  value,
  style,
  children
}) => (
  <button
    className={`${className} ${disabled ? 'disabled' : ''}`}
    onClick={handleClick}
    disabled={disabled}
    name={name}
    style={style}
    type={type}
    value={value}
  >
    {children}
  </button>
)

export default Button;