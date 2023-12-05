import * as React from "react";

type Props = {
  value: number;
};

const Component: React.FunctionComponent<Props> = ({ value }) => (
  <div>Value: {value}</div>
);

export default Component;
