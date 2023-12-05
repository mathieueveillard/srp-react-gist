import * as React from "react";
import SubmitButton from "./SubmitButton";
import EnterEditMode from "./EnterEditMode";

type Props<T> = {
  onSubmit: (value: T) => void;
  children: (
    isEditing: boolean,
    onChange: (value: T) => void
  ) => React.ReactNode;
};

function Component<T>({ onSubmit, children }: Props<T>) {
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<T | undefined>(undefined);

  const toggle = (): void => {
    if (isEditing && value !== undefined) {
      onSubmit(value);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="space-y-2">
      <div>{children(isEditing, setValue)}</div>
      {!isEditing && <EnterEditMode onClick={toggle} />}
      {isEditing && <SubmitButton onClick={toggle} />}
    </div>
  );
}

export default Component;
