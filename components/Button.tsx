import React from 'react'

interface IButtonProps {
  onClick: React.MouseEventHandler<HTMLDivElement>,
  children: JSX.ElementChildrenAttribute
}

const Button = (props: IButtonProps) => {
  const { onClick, children } = props
  return (
    <button {...props} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
