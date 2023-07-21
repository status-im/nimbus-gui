import { Image, Paragraph, XStack } from "tamagui";

const InformationBox = ({ icon, text }) => {
  return (
    <XStack
      style={{
        border: "2px solid #E7EAEE",
        borderRadius: "12px",
        padding: "11px 16px",
        gap: "8px",
        width: "632px",
      }}
    >
      <Image source={{ uri: icon }} width={12} height={12} />
      <Paragraph color={"#647084"} style={{ margin: 0, padding: 0 }}>
        {text}
      </Paragraph>
    </XStack>
  );
};

export { InformationBox };
