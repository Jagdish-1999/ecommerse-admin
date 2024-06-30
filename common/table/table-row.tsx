import { cn } from "@/lib/utils";
import { TableRowProps } from "@/types/table.types";

const TableRow = ({ children, className }: TableRowProps) => {
  return (
    <tr
      className={cn(
        "border-b border-neutral-500/15 w-full h-fit flex items-center transition-all duration-150",
        className
      )}
    >
      {children}
    </tr>
  );
};

export { TableRow };
