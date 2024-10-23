import { ComponentPropsWithRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Props extends ComponentPropsWithRef<'input'> {
  onRemove: () => void;
}

export const ListInput = ({
  value,
  onChange,
  onRemove,
  ...props
}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Input value={value} onChange={onChange} className="flex-1" {...props} />
      <div className="flex gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onRemove}
          className="h-4 w-4"
        >delete</Button>
      </div>
    </div>
  );
};
