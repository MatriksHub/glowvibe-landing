"use client";


// import { fetchNotifications } from "@/app/api/notifications/actions";
import { Card } from "@/components/ui/card";

export default function NotificationStats() {
  // const [stats, setStats] = useState({ sent: 0, draft: 0 });

  // useEffect(() => {
  //   async function loadStats() {
  //     const data = await fetchNotifications();
  //     const sent = data.filter((n) => n.status === "sent").length;
  //     const draft = data.filter((n) => n.status === "draft").length;
  //     setStats({ sent, draft });
  //   }
  //   loadStats();
  // }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="p-4">
        <h3 className="text-lg font-semibold">Sent Notifications</h3>
        {/* <p className="text-2xl font-bold">{stats.sent}</p> */}
      </Card>
      <Card className="p-4">
        <h3 className="text-lg font-semibold">Draft Notifications</h3>
        {/* <p className="text-2xl font-bold">{stats.draft}</p> */}
      </Card>
    </div>
  );
}
