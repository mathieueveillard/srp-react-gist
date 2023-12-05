import * as React from "react";
import OneReadCounter from "./OneReadCounter";
import ReadOrEdit from "../utils/ReadOrEdit";
import OneEditCounter from "./OneEditCounter";
import GlobalStateDisplay from "./GlobalStateDisplay";
import { Counter, createCounter } from "../counter";

const Component: React.FunctionComponent = () => {
  const [allCounters, setAllCounters] = React.useState<Counter[]>([
    createCounter(),
    createCounter(),
    createCounter(),
  ]);

  const updateOneCounter =
    (index: number) =>
    (value: number): void => {
      const nextCounters = [...allCounters];
      const { id } = allCounters[index];
      const updatedCounter: Counter = { id, value };
      nextCounters.splice(index, 1, updatedCounter);
      setAllCounters(nextCounters);
    };

  return (
    <div className="space-y-6">
      <div className="p-2 border border-black rounded">
        <GlobalStateDisplay allCounters={allCounters} />
      </div>
      <ul className="space-y-6">
        {allCounters.map(({ id, value }, index) => (
          <li key={id}>
            <ReadOrEdit onSubmit={updateOneCounter(index)}>
              {(isEditing, onChange) => {
                if (isEditing) {
                  return (
                    <OneEditCounter
                      key={value}
                      defaultValue={value}
                      onChange={onChange}
                    />
                  );
                }
                return <OneReadCounter value={value} />;
              }}
            </ReadOrEdit>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
