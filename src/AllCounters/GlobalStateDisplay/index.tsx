import * as React from "react";
import { Counter } from "../../counter";

type Props = {
  allCounters: Counter[];
};

const Component: React.FunctionComponent<Props> = ({ allCounters }) => (
  <span>Global state: {allCounters.map(({ value }) => value).join(", ")}</span>
);

export default Component;
