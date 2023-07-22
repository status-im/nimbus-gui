import { XStack, YStack } from "tamagui";
import { SubTitle } from "./SubTitle";
import { Title } from "./Title";
import { IconButton } from "../IconButton";

const Titles = ({ title, subtitle }) => {
  return (
    <YStack>
      <XStack justifyContent="space-between">
        <Title color={"#09101C"}>{title}</Title>
        <IconButton
          style={{
            backgroundColor: "transparent",
            border: "1px solid #DCE0E5",
          }}
          color={"#09101C"}
          size={"$3"}
          icon={"/icons/reveal.png"}
          text={"Advanced Settings"}
          fontSize={"$5"}
        />
      </XStack>
      <SubTitle color={"#09101C"}>{subtitle}</SubTitle>
    </YStack>
  );
};

export { Titles };
