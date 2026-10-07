function Button({
  buttonText,
  buttonType,
  buttonClass,
  buttonIcon,
  buttonOnClick,
}) {
  return (
    <button
      className={`px-3 sm:px-5 py-2 flex justify-center items-center hover:-translate-y-0.5 duration-300 transition-all hover:cursor-pointer text-sm sm:text-base shrink-0 ${buttonClass}`}
      onClick={buttonOnClick}
      type={buttonType}
    >
      {buttonIcon ? <span className="flex items-center">{buttonIcon}</span> : null}
      <span>{buttonText}</span>
    </button>
  );
}

export default Button;