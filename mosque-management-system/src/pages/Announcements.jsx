import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Search } from "lucide-react";

export default function Announcements() {
  const announcements = [
    {
      title: "New Parking Rules",
      date: "2024-07-20",
      content:
        "Starting next week, please follow the new parking guidelines to ensure smooth traffic flow during peak hours. See the notice board for a map.",
    },
    {
      title: "Eid al-Adha Prayer Location",
      date: "2024-07-18",
      content:
        "This year's Eid al-Adha prayer will be held at the city park to accommodate more people. The prayer will start at 8:00 AM sharp.",
    },
    {
      title: "Youth Summer Program Registration",
      date: "2024-07-15",
      content:
        "Registration for the annual youth summer program is now open. Limited spots available. Please register at the office.",
    },
  ];

  // In a real app, you would have state and a search handler here
  // const [searchTerm, setSearchTerm] = useState("");
  // const filteredAnnouncements = announcements.filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Announcements</h1>
      <div className="relative mb-6">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search announcements..."
          className="pl-8 w-full"
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{announcement.title}</CardTitle>
              <CardDescription>{announcement.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{announcement.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
