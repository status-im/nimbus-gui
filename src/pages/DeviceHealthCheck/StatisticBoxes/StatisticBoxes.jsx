import { Image, Paragraph, XStack, YStack } from "tamagui";
import { StatisticBox } from "./StatisticBox/StatisticBox";
import { Icon } from "../../../components/Icon";
import { getFormattedSVG } from "../../../utils/getFormattedSVG";

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
          svgDataURL={getFormattedSVG(`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="284"
          height="60"
          viewBox="0 0 284 60"
          fill="none"
        >
          <path
            d="M-60 20.7915L-46.5667 14.3318L-33.1333 17.4929L-19.7 4.7109L-6.26667 17.4929L7.16667 11.0332L20.6 17.4929L34.0333 43.1943L47.4667 36.7346L60.9 49.5166L74.3333 52.6777L87.7667 41.1327L101.2 46.218L114.633 59L128.067 36.4597L141.5 20.3791L154.933 23.6777L168.367 17.218L181.8 23.6777L195.233 39.6208L208.667 46.0806L222.1 33.1611L235.533 17.218L248.967 13.9194L262.4 7.45971L275.833 1L289.267 7.45971L302.7 1.13744L316.133 10.6209L329.567 23.4028L343 36.1848"
            stroke="#8DC6BC"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>`)}
        />
      </XStack>
      <XStack space={"$3"}>
        <StatisticBox
          title="Memory"
          memory="30 GB"
          stateIcon="/icons/check-circle.png"
          stateText="Good"
          svgDataURL={getFormattedSVG(`<svg xmlns="http://www.w3.org/2000/svg" width="284" height="62" viewBox="0 0 284 62" fill="none">
          <path d="M0 60.5L10.8667 56.2857L21.7333 52.0714L32.6 56.2857L43.4667 52.0714L54.3333 47.8571L65.2 52.0714L76.0667 56.2857L86.9333 52.0714L97.8 47.8571L108.667 43.6429H119.533L130.4 39.4286L141.267 35.2143L152.133 26.7857L163 22.5714L173.867 31L184.733 26.7857L195.6 31L206.467 22.5714L217.333 26.7857L228.2 18.3571L239.067 26.7857L249.933 18.3571L260.8 14.1429L271.667 9.92857L282.533 14.1429L293.4 22.5714L304.267 9.92857L315.133 5.71429L326 1.5" stroke="#8DC6BC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`)}
        />
        <StatisticBox
          title="Network"
          memory="30 GB"
          stateIcon="/icons/active.png"
          stateText="Fair"
          imageUrl="/images/network-layer.png"
        >
          <YStack>
            <Paragraph color={"#838d9d"} fontWeight={"bold"}>
              Uptime
            </Paragraph>
            <Paragraph color={"#09101C"} size={"$5"}>
              23:20:02
            </Paragraph>
          </YStack>
        </StatisticBox>
      </XStack>
    </YStack>
  );
};

export { StatisticBoxes };
