"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const CryptoData: Crypto[] = [
  {
    id: 1,
    name: "Bitcoin",
    price: 45000,
    marketCap: 800000000000,
    volume24h: 50000000000,
    change24h: 5.2,
  },
  {
    id: 2,
    name: "Ethereum",
    price: 3000,
    marketCap: 300000000000,
    volume24h: 25000000000,
    change24h: -1.8,
  },
  {
    id: 3,
    name: "Cardano",
    price: 2.5,
    marketCap: 80000000000,
    volume24h: 1000000000,
    change24h: 3.7,
  },
  {
    id: 4,
    name: "Binance Coin",
    price: 400,
    marketCap: 70000000000,
    volume24h: 800000000,
    change24h: 0.5,
  },
  {
    id: 5,
    name: "Solana",
    price: 150,
    marketCap: 25000000000,
    volume24h: 300000000,
    change24h: -2.3,
  },
  {
    id: 6,
    name: "Ripple",
    price: 1.2,
    marketCap: 55000000000,
    volume24h: 1500000000,
    change24h: 1.8,
  },
  {
    id: 7,
    name: "Polkadot",
    price: 35,
    marketCap: 15000000000,
    volume24h: 500000000,
    change24h: 2.5,
  },
  {
    id: 8,
    name: "Litecoin",
    price: 180,
    marketCap: 9500000000,
    volume24h: 300000000,
    change24h: -0.9,
  },
];




type Crypto = {
  id: number;
  name: string;
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
};


export const columns: ColumnDef<Crypto>[] = [
  {
    accessorKey: "id",
    header: "S.No",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: "Crypto",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "marketCap",
    header: ({ column }) => {
      return (
        <Button
          className="bg-transparent hover:bg-transparent text-[#4acd8d]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Market Cap
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("marketCap")}</div>
    ),
  },
  {
    accessorKey: "volume24h",
    header: ({ column }) => {
      return (
        <Button
          className="bg-transparent hover:bg-transparent text-[#4acd8d]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Volume 24h
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("volume24h")}</div>
    ),
  },
  {
    accessorKey: "change24h",
    header: ({ column }) => {
      return (
        <Button
          className="bg-transparent hover:bg-transparent text-[#4acd8d]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Change 24h
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("change24h")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          className="bg-transparent hover:bg-transparent text-[#4acd8d]"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium text-right">{formatted}</div>;
    },
  },
];

export function CryptoTable() {
  const [data, setCryptoData] = React.useState<Crypto[]>(CryptoData);

  const generateRandomData = () => {
    const newData: Crypto[] = data.map((crypto) => ({
      ...crypto,
      price: crypto.price + getRandomChange(),
      marketCap: getRandomMarketCap(),
      volume24h: getRandomVolume(),
      change24h: getRandomChange(),
    }));

    setCryptoData(newData);
  };
  const getRandomChange = () => (Math.random() - 0.5) * 10;
  const getRandomMarketCap = () => Math.floor(Math.random() * 1e12);
  const getRandomVolume = () => Math.floor(Math.random() * 1e10);

  React.useEffect(() => {
    // Initial random data
    generateRandomData();

    // Set up interval for periodic updates
    const intervalId = setInterval(() => {
      generateRandomData();
    }, 1500);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4 ">
        <Input
          placeholder="Filter Cryptocurrency..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm text-white bg-black focus:outline-none"
        />
      </div>
      <div className="border rounded-md">
        <Table>
          <TableHeader className="text-[#4acd8d]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="text-[#4acd8d] text-center">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}
                      className="text-[#4acd8d]">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="text-left text-white">
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end py-4 space-x-2">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            className="bg-[#4acd8d]"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            className="bg-[#4acd8d]"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
