const ButtonIcon = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={
        `text-gray-500  hover:text-gray-800 hover:bg-gray-100 rounded-md p-1` + ` ${className}`
      }
    >
      {children}
    </button>
  )
}

export default ButtonIcon
