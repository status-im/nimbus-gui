import { XStack, YStack } from "tamagui";
import { ReactButton } from "../../components/ReactButton";
import { Logo } from "../../components/Logo";
import { InformationBox } from "../../components/InformationBox";
import { Titles } from "../../components/Titles";
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
          textElements={[
            {
              text: "The information provided in the Nodes Health Check is meant to be utilized as a guide to gauge the readiness of your device, however please do your own due diligence prior to commiting any funds. Read our ",
            },
            { bold: "Health Check Disclosure" },
            { text: " for more information." },
          ]}
        />
        <XStack>
          <ReactButton
            color="#fff"
            backgroundColor="#2A4AF5"
            fontSize="$5"
            size={"$3"}
            onClick={continueHandler}
          >
            Continue
          </ReactButton>
        </XStack>
      </YStack>
      <BackgroundImage
        style={{
          background: "url(/background-images/eye-background.png) no-repeat",
        }}
      />
    </PageWrapper>
  );
};

export { DeviceHealthCheck };
