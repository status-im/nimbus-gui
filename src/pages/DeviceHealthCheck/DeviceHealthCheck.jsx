import { XStack, YStack } from "tamagui";
import { ReactButton } from "../../components/ReactButton";
import { Logo } from "../../components/Logo";
import { InformationBox } from "../../components/InformationBox";
import { Titles } from "../../components/Titles";
import { IconText } from "../../components/IconText/IconText";
import { BackgroundImage } from "../../components/BackgroundImage";
import { PageWrapper } from "../../components/PageWrapper";
import { StatisticBoxes } from "./StatisticBoxes/StatisticBoxes";
import { StatisticTexts } from "./StatisticTexts";

const DeviceHealthCheck = () => {
  const continueHandler = (e) => {
    console.log(e);
  };

  return (
    <PageWrapper>
      <YStack space={"$3"}>
        <Logo />
        <Titles
          title={"Device Health Check"}
          subtitle={"Configure your device to start Staking on Nimbus"}
        />
        <StatisticBoxes />
        <StatisticTexts />
        <InformationBox
          icon="/icons/close.png"
          text="The information provided in the Nodes Health Check is meant to
            utilized as a guide to guage the readiness of your device, however
            please do your own due diligence prior to commiting any funds. Read
            our Health Check Disclosure for more information."
        />
        <XStack>
          <ReactButton
            color="#fff"
            backgroundColor="#2A4AF5"
            fontSize="$5"
            onClick={continueHandler}
          >
            Continue
          </ReactButton>
        </XStack>
      </YStack>
      <BackgroundImage
        style={{
          background:
            "url(/public/background-images/eye-background.png) no-repeat",
        }}
      />
    </PageWrapper>
  );
};

export { DeviceHealthCheck };
