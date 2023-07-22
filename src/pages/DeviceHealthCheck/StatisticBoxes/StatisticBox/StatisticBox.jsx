import { Paragraph, Separator, Text, XStack, YStack } from "tamagui";
import { IconText } from "../../../../components/IconText/IconText";
import { ShadowBox } from "../../../../components/ShadowBox";

const StatisticBox = ({
  title,
  memory,
  stateIcon,
  stateText,
  additionalStateText,
  children,
  svgDataURL,
  imageUrl,
  ...props
}) => {
  return (
    <ShadowBox {...props}>
      <YStack>
        <XStack
          justifyContent="space-between"
          style={{
            padding: "8px 16px",
            background: `url(${svgDataURL || imageUrl}) no-repeat`,
            backgroundSize: "cover",
          }}
        >
          <YStack space={"$3"}>
            <Paragraph color={"#09101C"} size={"$6"} fontWeight={"600"}>
              {title}
            </Paragraph>
            <Paragraph color={"#09101C"} size={"$8"} fontWeight={"700"}>
              {memory}
            </Paragraph>
          </YStack>
          {children && children}
        </XStack>
        <Separator borderColor={"#e3e3e3"} />
        <XStack space={"$4"} style={{ padding: "10px 16px 10px 16px" }}>
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
