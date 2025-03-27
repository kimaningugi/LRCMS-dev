"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

export function CalendarSection() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="month">
          <TabsList className="mb-4">
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
          <TabsContent value="month">
            <Calendar mode="single" className="rounded-md border" />
          </TabsContent>
          {/* Add other views as needed */}
        </Tabs>
      </CardContent>
    </Card>
  );
}