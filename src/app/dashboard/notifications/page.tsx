"use client";

import { useEffect, useState } from "react";
import { 
  // fetchNotifications, 
  sendNotification } from "@/app/api/notifications/actions";
// import { Notification } from "@/types/global";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function NotificationsPage() {
  // const [notifications, setNotifications] = useState<Notification[]>([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSend() {
    setLoading(true);
    await sendNotification(title, body);
    setLoading(false);
  }

  useEffect(() => {
    async function loadNotifications() {
      // const data = await fetchNotifications();
      // setNotifications(data);
    }

    // console.log(data);

    loadNotifications();
  }, []);

  // async function handleSend(id: string) {
  //   await sendNotification(id);
  //   const updated = await fetchNotifications();
  //   setNotifications(updated);
  // }

  return (
    <div className="grid gap-4">
      <div className="flex justify-between items-center">
        <div className="grid gap-1">
          <h2 className="text-xl font-bold">
            Sent Notifications
          </h2>
          <p className="text-sm text-gray-500">
            List of all notifications sent to users
          </p>
        </div>

        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Create Push Notification</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Create Push Notifications</SheetTitle>
              </SheetHeader>

              <div className="grid gap-4 py-8">
                <div className="grid gap-4">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                    className="col-span-3" 
                    placeholder="Enter a message title"
                  />
                </div>

                <div className="grid gap-4">
                  <Label htmlFor="message">Message</Label>
                  <Input 
                    id="message" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                    className="col-span-3" 
                    placeholder="Enter a message"
                  />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button 
                    variant='secondary' 
                    type="submit"
                    onClick={handleSend}
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Notification'}
                  </Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* <div className="h-96 overflow-y-auto">
        {notifications.length === 0 && (
          <p className="text-center text-gray-500">No notifications sent yet</p>
        )}

        {notifications.length > 0 && (
          <table className="w-full border-collapse border gap-2">
            <thead className="border bg-primary rounded-t-lg">
              <tr className="border bg-primary rounded-lg  text-start text-[#ffffff]">
                <th className="p-2">Title</th>
                <th className="p-2">Message</th>
                <th className="p-2">Status</th>
                <th className="p-2">Sent At</th>
              </tr>
            </thead>

            <tbody>
              {notifications.map((notif) => (
                <tr key={notif.id} className="border rounded-lg text-sm">
                  <td className="p-2">{notif.title}</td>
                  <td className="p-2">{notif.body}</td>
                  <td className="p-2">{notif.status}</td>
                  <td className="p-2">{notif.sent_at ? new Date(notif.sent_at).toLocaleString() : '—'}</td>
                  <td className="p-2">{notif.delivered_count}</td>
                  <td className="p-2">{notif.failed_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div> */}
    </div>
  );
}
