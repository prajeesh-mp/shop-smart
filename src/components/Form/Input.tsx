import { FC } from "react";
/**
 * Create bootstrap form input along with different attributes
 * @param name, label, value, onChange func, placeHolder, error
 * @returns HTML
 */
type Props = {
  name?: string;
  maxLength?: number;
  label?: string;
  max?: number;
  disable?: boolean;
  value?: any;
  onChange?: (props: any) => void;
  defaultValue?: string;
  placeHolder?: string;
  error?: string;
  autofocus?: boolean;
  type?: string;
  className?: string;
  dataTestId?: string;
  helperText?: string; // All other props
  [x: string]: any;
};

const Input: FC<Props> = ({
  name,
  maxLength,
  dataTestId,
  label,
  max,
  disable,
  value,
  onChange,
  defaultValue,
  placeHolder,
  error,
  autofocus = false,
  type = "text",
  className = "",
  helperText = "",
  ...rest
}) => {
  return (
    <div className={`mb-3 ${className}`}>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        max={max}
        type={type}
        className="form-control"
        name={name}
        disabled={disable}
        data-testid={dataTestId}
        id={name}
        maxLength={maxLength}
        defaultValue={defaultValue}
        placeholder={placeHolder}
        autoComplete="off"
        onChange={onChange}
        value={value}
        autoFocus={autofocus}
        {...rest}
      />
      {helperText && (
        <span className="info-text text-muted d-block">{helperText}</span>
      )}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Input;
