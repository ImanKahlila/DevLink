import * as SwitchPrimitive from "@radix-ui/react-switch";
export function Switch(props) {
  return (
    <SwitchPrimitive.Root className="switch" {...props}>
      <SwitchPrimitive.Thumb className="switch-thumb" />
    </SwitchPrimitive.Root>
  );
}
