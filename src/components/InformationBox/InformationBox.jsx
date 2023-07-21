import { Paragraph, XStack } from "tamagui";
import { Icon } from "../Icon";

const InformationBox = ({ icon, text }) => {
  return (
    <XStack
      style={{
        border: "2px solid #E7EAEE",
        borderRadius: "12px",
        padding: "11px 16px",
        maxWidth: "632px",
        alignItems: "start",
      }}
      space={"$2"}
    >
      <Icon source={icon} width={12} height={12} style={{ marginTop: "6px" }} />
      <Paragraph color={"#647084"}>{text}</Paragraph>
    </XStack>
  );
};

export { InformationBox };
