import { YStack } from "tamagui";
import { SubTitle } from "./Title";
import { Title } from "./SubTitle";

const Titles = ({ title, subtitle }) => {
  return (
    <YStack>
      <Title color={"#09101C"}>{title}</Title>
      <SubTitle color={"#09101C"}>{subtitle}</SubTitle>
    </YStack>
  );
};

export { Titles };
