import { Text } from "tamagui";

const FormattedText = ({ textElements, color, fontSize }) => {
  return (
    <Text color={color} fontSize={fontSize}>
      {textElements.map((textElement, index) => {
        if (textElement.bold) {
          return (
            <span key={index} style={{ fontWeight: "bold" }}>
              {textElement.bold}
            </span>
          );
        }
        if (textElement.italic) {
          return (
            <span key={index} style={{ fontStyle: "italic" }}>
              {textElement.italic}
            </span>
          );
        }
        return <span key={index}>{textElement.text}</span>;
      })}
    </Text>
  );
};

export { FormattedText };
