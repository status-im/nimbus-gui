import { XStack, Stack, Text } from "tamagui";
import "./TopBar.css";
import { Icon } from "./Icon";
const Tab = ({ icon, text }) => {
  const styl = {
    border: "none",
    display: "flex",
    padding: "6px 12px 6px 6px",
    "align-items": " center",
    gap: "8px",
    "border-radius": "10px",
    background: " #131D2F",
    width: "136px",
    height: "32px",
  };
  return (
    <>
      <XStack style={styl}>
        <Icon source={icon}></Icon>
        <Text>{text}</Text>
      </XStack>
    </>
  );
};
export { Tab };
