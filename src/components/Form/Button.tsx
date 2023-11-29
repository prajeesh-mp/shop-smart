import { Button, Spinner } from "react-bootstrap";

interface Props {
  label: string;
  variant?: string;
  type?: "button" | "reset" | "submit";
  isProcessing: boolean;
  className?: string;
}

function AppButton({
  label,
  variant = "primary",
  type = "button",
  isProcessing,
  className,
}: Props): JSX.Element {
  return (
    <Button
      variant={variant}
      type={type}
      disabled={isProcessing}
      className={className}
    >
      {isProcessing && (
        <>
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          &nbsp;Loading...
        </>
      )}
      {!isProcessing && label}
    </Button>
  );
}

export default AppButton;
