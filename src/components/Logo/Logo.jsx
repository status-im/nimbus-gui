import { Image, XStack } from "tamagui";
import { Tag } from "../Tag";

const Logo = () => {
  return (
    <XStack
      style={{
        alignItems: "center",
      }}
      space={"$2"}
    >
      <Image source={{ uri: "/icons/marks.png" }} width={60} height={60} />
      <Image source={{ uri: "/icons/nimbus.png" }} width={80} height={17} />
      <Tag bc="#2A4AF5" text="BETA" />
    </XStack>
  );
};

export { Logo };
