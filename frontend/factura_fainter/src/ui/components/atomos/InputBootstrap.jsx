export const InputBoostrap = ({
  tituloSpan,
  estiloClassName,
  placeholder,
  type,
  value = 0,
  disabled = false,
  onchange
}) => {
  return (
    <div className="input-group">
      <span className="input-group-text">{tituloSpan}</span>
      <input
        type={type}
        aria-label="First name"
        className={estiloClassName}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onchange}
      />
    </div>
  );
};
