import { XStack, YStack } from "tamagui";
import { StatisticBox } from "./StatisticBox/StatisticBox";

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
        />
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
        />
      </XStack>
    </YStack>
  );
};

export { StatisticBoxes };
