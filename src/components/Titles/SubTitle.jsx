import { Paragraph, styled } from "tamagui";

export const Title = styled(Paragraph, {
  tag: "span",
  name: "Title",
  accessibilityRole: "header",
  size: "$8",
});
