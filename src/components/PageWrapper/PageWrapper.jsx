import { XStack, styled } from "tamagui";

const Background = styled("div", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "white",
  width: "100vw",
});

const PageWrapper = ({ children }) => {
  return (
    <Background>
      <XStack
        space={"$8"}
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
        {children}
      </XStack>
    </Background>
  );
};

export { PageWrapper };
