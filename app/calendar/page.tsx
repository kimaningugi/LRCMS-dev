"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Quarterly Compliance Review",
    date: "2024-04-15",
    type: "meeting",
  },
  {
    id: 2,
    title: "Policy Update Deadline",
    date: "2024-04-20",
    type: "deadline",
  },
  {
    id: 3,
    title: "GDPR Training",
    date: "2024-04-25",
    type: "training",
  },
];

const eventTypes = {
  meeting: "bg-blue-100 text-blue-800",
  deadline: "bg-red-100 text-red-800",
  training: "bg-green-100 text-green-800",
};

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDateEvents = events.filter(
    (event) => new Date(event.date).toDateString() === date?.toDateString()
  );

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Calendar</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="month">
                <TabsList className="mb-4">
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
                <TabsContent value="month">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Events for {date?.toLocaleDateString()}</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedDateEvents.length > 0 ? (
                <div className="space-y-4">
                  {selectedDateEvents.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col space-y-2 p-4 rounded-lg border"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge
                          variant="secondary"
                          className={eventTypes[event.type as keyof typeof eventTypes]}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">No events scheduled for this day.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}