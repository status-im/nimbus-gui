import { Paragraph } from "tamagui";

const Tag = ({ bc, text }) => {
  return (
    <div
      style={{
        backgroundColor: bc,
        display: "flex",
        padding: "0px 8px",
        alignItems: "center",
        borderRadius: "67px",
      }}
    >
      <Paragraph fontWeight={"500"} fontSize={"10px"}>
        {text}
      </Paragraph>
    </div>
  );
};

export { Tag };
