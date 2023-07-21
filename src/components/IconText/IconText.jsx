import { Paragraph, XStack } from "tamagui";
import { Icon } from "../Icon/Icon";

const IconText = ({ icon, text }) => {
  return (
    <XStack
      style={{
        alignItems: "center",
      }}
      space={"$3"}
    >
      <Icon source={icon} width={16} height={16} />
      <Paragraph color={"#000000"}>{text}</Paragraph>
    </XStack>
  );
};

export { IconText };
