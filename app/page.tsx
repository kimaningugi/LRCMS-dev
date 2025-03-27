"use client";

import { Sidebar } from "@/components/sidebar";
import { CalendarSection } from "@/components/dashboard/calendar-section";
import { TasksSection } from "@/components/dashboard/tasks-section";
import { NotificationsSection } from "@/components/dashboard/notifications-section";
import { ChatbotSection } from "@/components/dashboard/chatbot-section";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <CalendarSection />
          </div>
          <div className="lg:row-span-2">
            <TasksSection />
          </div>
          <div className="lg:col-span-2">
            <NotificationsSection />
          </div>
          <ChatbotSection />
        </div>
      </main>
    </div>
  );
}