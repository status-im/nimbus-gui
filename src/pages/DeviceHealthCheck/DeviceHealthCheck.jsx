import { Image, XStack, YStack } from "tamagui";
import { ReactButton } from "../../components/ReactButton";
import { Logo } from "../../components/Logo";
import { InformationBox } from "../../components/InformationBox";
import { Titles } from "../../components/Titles";

const DeviceHealthCheck = () => {
  return (
    <XStack space backgroundColor="white">
      <YStack space>
        <Logo />
        <Titles
          title={"Device Health Check"}
          subtitle={"Configure your device to start Staking on Nimbus"}
        />
        <InformationBox
          icon="/icons/close.png"
          text="The information provided in the Nodes Health Check is meant to
            utilized as a guide to guage the readiness of your device, however
            please do your own due diligence prior to commiting any funds. Read
            our Health Check Disclosure for more information."
        />
        <ReactButton color="#fff" backgroundColor="#2A4AF5" fontSize="$5">
          Continue
        </ReactButton>
      </YStack>
      <Image
        source={{
          uri: "/background-images/eye-background.png",
          width: "650px",
          height: "100vh",
        }}
      />
    </XStack>
  );
};

export { DeviceHealthCheck };
