import * as React from "react";

type Props = {
  defaultValue: number;
  onChange: (value: number) => void;
};

const Component: React.FunctionComponent<Props> = ({defaultValue, onChange }) => {
  const [value, setValue] = React.useState<number>(defaultValue);

  const decrement = (): void => {
    const nextValue = value - 1;
    setValue(nextValue);
    onChange(nextValue);
  };

  const increment = (): void => {
    const nextValue = value + 1;
    setValue(nextValue);
    onChange(nextValue);
  };

  return (
    <div className="flex space-x-1">
      <button
        onClick={decrement}
        className="border border-black rounded px-2 py-1"
      >
        -
      </button>
      <span className="p-1">{value}</span>
      <button
        onClick={increment}
        className="border border-black rounded px-2 py-1"
      >
        +
      </button>
    </div>
  );
};

export default Component;
