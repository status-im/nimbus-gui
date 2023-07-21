import { Image, Paragraph, XStack } from "tamagui";

const InformationBox = ({ icon, text }) => {
  return (
    <XStack
      style={{
        border: "2px solid #E7EAEE",
        borderRadius: "12px",
        padding: "11px 16px",
        width: "632px",
        alignItems: "start",
      }}
      space={"$2"}
    >
      <Image source={{ uri: icon }} width={12} height={12} style={{marginTop: '6px'}} />
      <Paragraph color={"#647084"}>{text}</Paragraph>
    </XStack>
  );
};

export { InformationBox };
