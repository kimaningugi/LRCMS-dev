"use client";

import { Sidebar } from "@/components/sidebar";
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
    description: "Complete quarterly compliance review and submit findings",
    assignee: "John Doe",
  },
  {
    id: 2,
    title: "Update Privacy Policy",
    dueDate: "2024-04-20",
    status: "in-review",
    priority: "high",
    description: "Incorporate new data protection requirements",
    assignee: "Jane Smith",
  },
  {
    id: 3,
    title: "GDPR Training Session",
    dueDate: "2024-04-25",
    status: "completed",
    priority: "normal",
    description: "Conduct training for new employees",
    assignee: "Mike Johnson",
  },
  {
    id: 4,
    title: "Audit Internal Controls",
    dueDate: "2024-05-01",
    status: "pending",
    priority: "high",
    description: "Annual internal control assessment",
    assignee: "Sarah Wilson",
  },
];

const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  "in-review": "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

export default function TasksPage() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Tasks</h1>
        <Card className="h-full">
          <CardHeader>
            <CardTitle>All Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex flex-col space-y-2 p-4 rounded-lg border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{task.title}</h3>
                        {task.priority === "high" && (
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {task.description}
                      </p>
                    </div>
                    <Badge
                      variant="secondary"
                      className={statusColors[task.status as keyof typeof statusColors]}
                    >
                      {task.status}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Assignee: {task.assignee}</span>
                    <span>Due: {task.dueDate}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}