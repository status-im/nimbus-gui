import { ShadowBox } from "../../../components/ShadowBox";

const StatisticBox = ({ children, ...props }) => {
  return <ShadowBox {...props}>{children}</ShadowBox>;
};

export { StatisticBox };
