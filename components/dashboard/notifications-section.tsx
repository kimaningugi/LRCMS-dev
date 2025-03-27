"use client";

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

const notifications = [
  {
    id: 1,
    title: "New Regulatory Update",
    source: "SEC",
    timestamp: "2024-04-10T09:00:00",
    status: "new",
  },
  {
    id: 2,
    title: "Policy Change Alert",
    source: "Internal",
    timestamp: "2024-04-09T14:30:00",
    status: "read",
  },
  {
    id: 3,
    title: "Compliance Deadline Reminder",
    source: "System",
    timestamp: "2024-04-09T11:15:00",
    status: "new",
  },
];

export function NotificationsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell>{notification.title}</TableCell>
                <TableCell>{notification.source}</TableCell>
                <TableCell>
                  {new Date(notification.timestamp).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={notification.status === "new" ? "default" : "secondary"}
                  >
                    {notification.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}