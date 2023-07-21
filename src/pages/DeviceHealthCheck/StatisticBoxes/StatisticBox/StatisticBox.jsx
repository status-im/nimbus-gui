import { H3, H4, Separator, Text, XStack, YStack } from "tamagui";
import { IconText } from "../../../../components/IconText/IconText";
import { ShadowBox } from "../../../../components/ShadowBox";

const StatisticBox = ({
  title,
  memory,
  stateIcon,
  stateText,
  additionalStateText,
  ...props
}) => {
  return (
    <ShadowBox {...props}>
      <YStack>
        <XStack space={"$6"}>
          <YStack space={"$2"} style={{ padding: "8px 16px" }}>
            <H4 color={"#09101C"}>{title}</H4>
            <H3 color={"#09101C"}>{memory}</H3>
          </YStack>
        </XStack>
        <Separator borderColor={"#e3e3e3"} marginVertical={5} />
        <XStack space={"$4"} style={{ padding: "5px 16px 10px 16px" }}>
          <IconText icon={stateIcon} text={stateText} fontWeight={"bold"} />
          {additionalStateText && (
            <Text color={"#E95460"}>{additionalStateText}</Text>
          )}
        </XStack>
      </YStack>
    </ShadowBox>
  );
};

export { StatisticBox };
