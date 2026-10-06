function Button({
  buttonText,
  buttonType,
  buttonClass,
  buttonIcon,
  buttonOnClick,
}) {
  return (
    <button
      className={` px-5   flex justify-center items-center hover:-translate-y-1 duration-300 transition-all hover:cursor-pointer  ${buttonClass}`}
      onClick={buttonOnClick}
      buttonType={buttonType}
    >
      {buttonIcon ? <span className=""> {buttonIcon} </span> : null}

      <span>{buttonText}</span>
    </button>
  );
}

export default Button;
