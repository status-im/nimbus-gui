import { Image, XStack, YStack } from "tamagui";
import { ReactButton } from "../../components/ReactButton";
import { Logo } from "../../components/Logo";
import { InformationBox } from "../../components/InformationBox";
import { Titles } from "../../components/Titles";
import { IconText } from "../../components/IconText/IconText";

const DeviceHealthCheck = () => {
  return (
    <XStack space backgroundColor="white">
      <YStack space>
        <Logo />
        <Titles
          title={"Device Health Check"}
          subtitle={"Configure your device to start Staking on Nimbus"}
        />
        <YStack space={"$2"}>
          <IconText
            icon={"/icons/remove-circle-red.png"}
            text={
              "Your storage is running low as required for additional node services."
            }
          />
          <IconText
            icon={"/icons/checkmark-circle-green.png"}
            text={"2.4GHz is recommended for CPU."}
          />
          <IconText
            icon={"/icons/checkmark-circle-green.png"}
            text={"There is sufficient ram required for selected services."}
          />
          <IconText
            icon={"/icons/checkmark-circle-blue.png"}
            text={"Network Latency is low."}
          />
        </YStack>
        <InformationBox
          icon="/icons/close.png"
          text="The information provided in the Nodes Health Check is meant to
            utilized as a guide to guage the readiness of your device, however
            please do your own due diligence prior to commiting any funds. Read
            our Health Check Disclosure for more information."
        />
        <XStack>
          <ReactButton color="#fff" backgroundColor="#2A4AF5" fontSize="$5">
            Continue
          </ReactButton>
        </XStack>
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
