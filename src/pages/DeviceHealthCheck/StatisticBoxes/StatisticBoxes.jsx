import { Image, Paragraph, XStack, YStack } from "tamagui";
import { StatisticBox } from "./StatisticBox/StatisticBox";
import { Icon } from "../../../components/Icon";

const StatisticBoxes = () => {
  return (
    <YStack space={"$3"}>
      <XStack space={"$3"}>
        <StatisticBox
          style={{
            border: "1px solid #D92344",
            backgroundColor: "#F3EAEB",
          }}
          title="Storage"
          memory="30 GB"
          stateIcon="/icons/warning.png"
          stateText="Poor"
          additionalStateText="86% Utilization"
        >
          <XStack space={"$2"}>
            <Image
              source={{ uri: "/icons/storage-circle.png" }}
              width={75}
              height={75}
            />
            <Icon source={"/icons/alert.png"} />
          </XStack>
        </StatisticBox>
        <StatisticBox
          title="CPU"
          memory="30 GB"
          stateIcon="/icons/check-circle.png"
          stateText="Good"
        />
      </XStack>
      <XStack space={"$3"}>
        <StatisticBox
          title="Memory"
          memory="30 GB"
          stateIcon="/icons/check-circle.png"
          stateText="Good"
        />
        <StatisticBox
          title="Network"
          memory="30 GB"
          stateIcon="/icons/active.png"
          stateText="Fair"
        >
          <YStack space={"$2"}>
            <Paragraph color={"black"}>Uptime</Paragraph>
            <Paragraph color={"black"}>23:20:02</Paragraph>
          </YStack>
        </StatisticBox>
      </XStack>
    </YStack>
  );
};

export { StatisticBoxes };
