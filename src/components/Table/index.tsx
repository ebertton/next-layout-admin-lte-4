"use client"
import DataTables, { Config } from "datatables.net-dt";
import React, {useEffect, useLayoutEffect, useRef} from "react";



export default function TableComponent({ ...props }: Config) {
  const tableRef = useRef<HTMLTableElement>(null);
  // const [page, setPage] = React.useState(1);
  // const rowsPerPage = 4;
  //
  // const pages = Math.ceil(users.length / rowsPerPage);
  //
  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;
  //
  //   return users.slice(start, end);
  // }, [page, users]);


  useEffect(() => {
    const dt = new DataTables(tableRef.current!, props);
    return () => {
      dt.destroy();
    };
  }, []);



  return (
    <table ref={tableRef}></table>
    // <NextUIProvider>
    //   <div className=" text-foreground bg-background">
    //     <Table
    //       aria-label="Example table with client side pagination"
    //       bottomContent={
    //         <div className="flex w-full justify-center">
    //           <Pagination
    //             isCompact
    //             showControls
    //             showShadow
    //             color="secondary"
    //             page={page}
    //             total={pages}
    //             onChange={(page) => setPage(page)}
    //           />
    //         </div>
    //       }
    //       classNames={{
    //         wrapper: "min-h-[222px]",
    //       }}
    //     >
    //       <TableHeader>
    //         <TableColumn key="name">NAME</TableColumn>
    //         <TableColumn key="role">ROLE</TableColumn>
    //         <TableColumn key="status">STATUS</TableColumn>
    //       </TableHeader>
    //       <TableBody items={items}>
    //         {(item) => (
    //           <TableRow key={item.name}>
    //             {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
    //           </TableRow>
    //         )}
    //       </TableBody>
    //     </Table>
    //   </div>
    // </NextUIProvider>
  );
}
