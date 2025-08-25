import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, List } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Community Iftar",
      date: "2024-08-15",
      time: "07:00 PM",
      description: "Join us for a community iftar. All are welcome.",
    },
    {
      title: "Quran Competition for Kids",
      date: "2024-08-22",
      time: "10:00 AM",
      description:
        "Annual Quran competition for children aged 7-15. Register by Aug 20.",
    },
    {
      title: "Workshop: Islamic Finance",
      date: "2024-08-25",
      time: "02:00 PM",
      description: "A workshop on the principles of Islamic finance.",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button>Create Event</Button>
      </div>
      <Tabs defaultValue="list" className="w-full">
        <TabsList>
          <TabsTrigger value="list">
            <List className="h-4 w-4 mr-2" />
            List View
          </TabsTrigger>
          <TabsTrigger value="calendar">
            <Calendar className="h-4 w-4 mr-2" />
            Calendar View
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <div className="space-y-4 mt-4">
            {events.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} at {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="calendar">
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>August 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground">
                (Calendar view placeholder)
              </p>
              <div className="grid grid-cols-7 gap-2 mt-4 text-center">
                {/* Simple grid to represent a calendar */}
                <div className="font-semibold">Sun</div>
                <div className="font-semibold">Mon</div>
                <div className="font-semibold">Tue</div>
                <div className="font-semibold">Wed</div>
                <div className="font-semibold">Thu</div>
                <div className="font-semibold">Fri</div>
                <div className="font-semibold">Sat</div>
                {Array.from({ length: 31 }, (_, i) => (
                  <div
                    key={i}
                    className="p-2 border rounded-md h-20 flex items-start justify-start"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
