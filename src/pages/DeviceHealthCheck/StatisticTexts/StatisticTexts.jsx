import { YStack } from "tamagui";
import { IconText } from "../../../components/IconText/IconText";

const StatisticTexts = () => {
  return (
    <YStack space={"$2"}>
      {statisticTexts.map((statisticText) => (
        <IconText key={statisticText.text} {...statisticText} />
      ))}
    </YStack>
  );
};

export { StatisticTexts };

const statisticTexts = [
  {
    icon: "/icons/remove-circle-red.png",
    text: "Your storage is running low as required for additional node services.",
  },
  {
    icon: "/icons/checkmark-circle-green.png",
    text: "2.4GHz is recommended for CPU.",
  },
  {
    icon: "/icons/checkmark-circle-green.png",
    text: "There is sufficient ram required for selected services.",
  },
  {
    icon: "/icons/checkmark-circle-blue.png",
    text: "Network Latency is low.",
  },
];
