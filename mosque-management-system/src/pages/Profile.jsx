import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function Profile() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="donations">Donation History</TabsTrigger>
          <TabsTrigger value="activities">Class & Event Records</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>
                Update your personal details here.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" defaultValue="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" defaultValue="+1 234 567 890" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="donations">
          <Card>
            <CardHeader>
              <CardTitle>Donation History</CardTitle>
              <CardDescription>A record of your contributions.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Campaign</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-07-15</TableCell>
                    <TableCell>Zakat</TableCell>
                    <TableCell>$500.00</TableCell>
                    <TableCell>Ramadan Fund</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2024-06-20</TableCell>
                    <TableCell>Sadaqah</TableCell>
                    <TableCell>$50.00</TableCell>
                    <TableCell>General Donations</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities">
          <Card>
            <CardHeader>
              <CardTitle>Class & Event Records</CardTitle>
              <CardDescription>Your participation history.</CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Registered Classes</h3>
              <ul>
                <li>- Quran Tafsir - Mondays & Wednesdays</li>
                <li>- Advanced Fiqh - Saturdays</li>
              </ul>
              <h3 className="font-semibold mt-4 mb-2">Attended Events</h3>
              <ul>
                <li>- Community Iftar - April 15, 2024</li>
                <li>- Eid Festival - April 10, 2024</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
