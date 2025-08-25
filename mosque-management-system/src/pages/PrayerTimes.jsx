import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { BellRing, Clock } from "lucide-react";

export default function PrayerTimes() {
  const dailyPrayers = [
    { name: "Fajr", time: "05:00 AM" },
    { name: "Dhuhr", time: "01:00 PM" },
    { name: "Asr", time: "04:30 PM" },
    { name: "Maghrib", time: "06:45 PM" },
    { name: "Isha", time: "08:15 PM" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Prayer & Event Schedule</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-6 w-6" /> Daily Prayer Times
            </CardTitle>
            <CardDescription>
              Today's congregational prayer schedule.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {dailyPrayers.map((prayer) => (
                <li
                  key={prayer.name}
                  className="flex justify-between items-center"
                >
                  <span className="font-semibold">{prayer.name}</span>
                  <span className="text-muted-foreground">{prayer.time}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BellRing className="h-6 w-6" /> Jumu'ah & Eid Schedule
            </CardTitle>
            <CardDescription>
              Timings for special congregational prayers.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Jumu'ah Prayer</h3>
              <p className="text-muted-foreground">
                First Khutbah: 12:45 PM
              </p>
              <p className="text-muted-foreground">
                Second Khutbah: 01:45 PM
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Eid al-Fitr Prayer</h3>
              <p className="text-muted-foreground">
                First Jama'ah: 07:30 AM
              </p>
              <p className="text-muted-foreground">
                Second Jama'ah: 08:30 AM
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
