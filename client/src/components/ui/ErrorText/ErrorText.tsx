import { Text } from "./ErrorText.style";

const ErrorText: React.FC<{ error: boolean }> = ({ error, children }) => {
  return <Text error={error}>{children}</Text>;
};

export default ErrorText;
