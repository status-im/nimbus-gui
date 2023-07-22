import { XStack } from "tamagui";
import { Tag } from "../Tag";
import { Icon } from "../Icon";

const Logo = () => {
  return (
    <XStack
      style={{
        alignItems: "center",
      }}
      space={"$2"}
    >
      <Icon source={"/icons/marks.png"} width={45} height={50} />
      <Icon source={"/icons/nimbus.png"} width={80} height={16} />
      <Tag bc="#2A4AF5" text="BETA" />
    </XStack>
  );
};

export { Logo };
