import { XStack, YStack, styled } from "tamagui";
import { ReactButton } from "../../components/ReactButton";
import { Logo } from "../../components/Logo";
import { InformationBox } from "../../components/InformationBox";
import { Titles } from "../../components/Titles";
import { IconText } from "../../components/IconText/IconText";
import { StatisticBox } from "./StatisticBox";
import { BackgroundImage } from "../../components/BackgroundImage";

const Box = styled("div", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "100vw",
});

const DeviceHealthCheck = () => {
  return (
    <Box>
      <XStack
        space={"$5"}
        style={{
          background: "rgb(245,242,254)",
          background:
            "linear-gradient(180deg, rgba(245,242,254,1) 0%, rgba(255,255,255,1) 100%)",
          borderRadius: "25px",
          border: "4px solid #09101C",
          width: "100%",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
        }}
      >
        <YStack space={"$3"}>
          <Logo />
          <Titles
            title={"Device Health Check"}
            subtitle={"Configure your device to start Staking on Nimbus"}
          />
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
        <BackgroundImage
          style={{
            background:
              "url(/public/background-images/eye-background.png) no-repeat",
          }}
        />
      </XStack>
    </Box>
  );
};

export { DeviceHealthCheck };
