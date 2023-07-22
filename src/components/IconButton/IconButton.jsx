import { Icon } from "../Icon/Icon";
import { ReactButton } from "../ReactButton";

const IconButton = ({ icon, text, ...props }) => {
  return (
    <ReactButton {...props} icon={<Icon source={icon} />}>
      {text}
    </ReactButton>
  );
};

export { IconButton };
