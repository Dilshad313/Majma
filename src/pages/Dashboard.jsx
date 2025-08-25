import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Prayer Times</CardTitle>
            <CardDescription>Today's prayer schedule</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Prayer times component will go here */}
            <p>Fajr: 5:00 AM</p>
            <p>Dhuhr: 1:00 PM</p>
            <p>Asr: 4:30 PM</p>
            <p>Maghrib: 6:45 PM</p>
            <p>Isha: 8:15 PM</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Don't miss out</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Upcoming events component will go here */}
            <p>Community Iftar - Tomorrow at 7:00 PM</p>
            <p>Quran Competition - Next Friday</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>Latest news and updates</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Announcements component will go here */}
            <p>New parking rules effective next week.</p>
            <p>Eid prayer location announced.</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Donation Summary</CardTitle>
            <CardDescription>Your contributions</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Donation summary component will go here */}
            <p>This month: $150</p>
            <p>Total for the year: $1200</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
