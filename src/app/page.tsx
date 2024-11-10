import { Button } from "@/components/ui/button";
import { useCallback } from "react";

export default function Home() {
  const onClick = useCallback(() => {
    alert("Hello World!");
  }, []);
  return (
    <div>

      <p>Hello World!</p>
      <Button onClick={onClick}>Click Me!</Button>
    </div>
  );
}
