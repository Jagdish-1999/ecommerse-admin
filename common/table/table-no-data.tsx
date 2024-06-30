import { TableCell } from "./table-cell";
import { TableRow } from "./table-row";

const NoDataAvalable = () => {
  return (
    <TableRow>
      <TableCell colId="no-data-avaialble">
        <h4 className="text-center p-2">No data available</h4>
      </TableCell>
    </TableRow>
  );
};

export { NoDataAvalable };
