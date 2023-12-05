import * as React from "react";

type Props = {
  onClick: () => void;
};

const Component: React.FunctionComponent<Props> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-green-800 text-white rounded px-2 py-1"
  >
    Validate
  </button>
);

export default Component;
