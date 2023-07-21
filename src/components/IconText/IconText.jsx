import { Image, Paragraph, XStack } from "tamagui";

const IconText = ({ icon, text }) => {
  return (
    <XStack
      style={{
        alignItems: "center",
      }}
      space={"$3"}
    >
      <Image source={{ uri: icon }} width={16} height={16} />
      <Paragraph color={"#000000"}>{text}</Paragraph>
    </XStack>
  );
};

export { IconText };
