import { FC } from "react";

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
  infoText?: string; // All other props
  [x: string]: any;
};
/**
 * Create bootstrap form input along with different attributes
 * @param name, label, value, onChange func, placeHolder, error
 * @returns HTML
 */
const Toggle: FC<Props> = ({
  name,
  maxLength,
  label,
  value,
  onChange,
  defaultValue,
  placeHolder,
  error,
  autofocus = false,
  type = "text",
  className = "",
  infoText = "",
  ...rest
}) => {
  return (
    <div className={`mb-3 form-check form-switch ${className}`}>
      <label htmlFor={name} className="form-check-label">
        {label}
      </label>
      <input
        type="checkbox"
        className="form-check-input"
        role="switch"
        name={name}
        id={name}
        onChange={onChange}
        checked={value}
        {...rest}
      />
      {infoText && <span className="info-text text-muted">{infoText}</span>}
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Toggle;
