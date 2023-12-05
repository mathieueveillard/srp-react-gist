import * as React from "react";

type Props = {
  onClick: () => void;
};

const Component: React.FunctionComponent<Props> = ({ onClick }) => (
  <button onClick={onClick} className="border border-black rounded px-2 py-1">
    Edit
  </button>
);

export default Component;
