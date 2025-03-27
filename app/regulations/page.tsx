"use client";

import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const regulations = [
  {
    id: 1,
    title: "Data Protection Regulation",
    authority: "EU Commission",
    lastUpdated: "2024-03-15",
    status: "active",
    category: "Privacy",
  },
  {
    id: 2,
    title: "Financial Reporting Standard",
    authority: "SEC",
    lastUpdated: "2024-02-28",
    status: "pending",
    category: "Finance",
  },
  {
    id: 3,
    title: "Environmental Compliance Guide",
    authority: "EPA",
    lastUpdated: "2024-03-01",
    status: "active",
    category: "Environment",
  },
];

export default function RegulationsPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Regulations</h1>
        <Card>
          <CardHeader>
            <CardTitle>Regulatory Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Authority</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {regulations.map((regulation) => (
                  <TableRow key={regulation.id}>
                    <TableCell className="font-medium">
                      {regulation.title}
                    </TableCell>
                    <TableCell>{regulation.authority}</TableCell>
                    <TableCell>{regulation.category}</TableCell>
                    <TableCell>
                      {new Date(regulation.lastUpdated).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={regulation.status === "active" ? "default" : "secondary"}
                      >
                        {regulation.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}