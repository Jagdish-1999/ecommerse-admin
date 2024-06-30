import { cn } from "@/lib/utils";
import { OnCellClickProps, TableCellProps } from "@/types/table.types";

const TableCell = <T,>({ colId, children, className }: TableCellProps<T>) => {
  return (
    <td className={cn("cursor-pointer w-full h-full text-sm", className)}>
      {children}
    </td>
  );
};

export { TableCell };
