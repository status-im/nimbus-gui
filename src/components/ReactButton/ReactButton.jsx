import { Button } from "tamagui";

const ReactButton = ({ children, ...props }) => {
  return <Button {...props} >{children}</Button>;
};

export { ReactButton };
