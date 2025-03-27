"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Review Q2 Compliance Report",
    dueDate: "2024-04-15",
    status: "pending",
    priority: "high",
  },
  {
    id: 2,
    title: "Update Privacy Policy",
    dueDate: "2024-04-20",
    status: "in-review",
    priority: "high",
  },
  {
    id: 3,
    title: "GDPR Training Session",
    dueDate: "2024-04-25",
    status: "completed",
    priority: "normal",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  "in-review": "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

export function TasksSection() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start space-x-4 p-4 rounded-lg border"
            >
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium">{task.title}</h3>
                  {task.priority === "high" && (
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  Due: {task.dueDate}
                </p>
              </div>
              <Badge
                variant="secondary"
                className={statusColors[task.status as keyof typeof statusColors]}
              >
                {task.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}