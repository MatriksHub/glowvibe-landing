"use client";

// import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "react-toastify";
// import { Notification } from "@/types/global";

export default function NotifyPage() {
  // const [notifications, setNotifications] = useState<Notification[]>([]);
  // const [title, setTitle] = useState("");
  // const [editing, setEditing] = useState(null);
  // const [open, setOpen] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetchNotifications();
  // }, []);

  // const fetchNotifications = async () => {
  //   const response = await fetch("/api/notifications");
  //   const data = await response.json();

  //   if (response.ok) {
  //       setNotifications(data.notifications);
  //   } else { 
  //       toast.error(data.error);
  //   }
  // };

  // const handleSave = async () => {
  //   const payload = { title, message };
  //   let response;
    
  //   if (editing) {
  //     payload.id = editing;
  //     response = await fetch("/api/notifications", { 
  //       method: "PATCH", 
  //       body: JSON.stringify(payload) 
  //   });
  //   } else {
  //       response = await fetch("/api/notifications", { 
  //           method: "POST", 
  //           body: JSON.stringify(payload) 
  //       });
  //   }

  //   const data = await response.json();
  //   if (response.ok) {
  //     toast.success(editing ? "Notification updated!" : "Notification saved as draft!");
  //     fetchNotifications();
  //     setEditing(null);
  //     setTitle("");
  //     setMessage("");
  //   } else {
  //     toast.error(data.error);
  //   }
  // };

  // const handleDelete = async (id) => {
  //   const response = await fetch("/api/notifications", { 
  //       method: "DELETE", 
  //       body: JSON.stringify({ id }) 
  //   });
  //   if (response.ok) {
  //     toast.success("Notification deleted!");
  //     fetchNotifications();
  //   } else {
  //     toast.error("Error deleting notification.");
  //   }
  // };

  // const handleSend = async (id: string) => {
  //   setLoading(true);

  //   const response = await fetch(`/api/notifications/send`, {
  //     method: 'POST',
  //     body: JSON.stringify({ id }),
  //   });

  //   if (response.ok) {
  //     toast.success('Notification sent.');
  //     fetchNotifications();
  //   } else {
  //     toast.error('Failed to send.');
  //   }

  //   setLoading(false);
  // };

  return (
    <div className="space-y-4">
      {/* <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Push Notifications</h2>
        <Button onClick={() => setOpen(true)}>Create Notification</Button>
      </div> */}

      {/* Notifications Table */}
      {/* <table className="w-full border-collapse border">
        <thead>
          <tr className="border text-start">
            <th className="p-2 text-start">Title</th>
            <th className="p-2 te">Message</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {notifications.map((notification) => (
            <tr key={notification.id} className="border">
              <td className="p-2">{notification.title}</td>
              <td className="p-2">{notification.message}</td>
              <td className="p-2">{notification.status}</td>
              <td className="p-2 flex gap-4 justify-end items-end">
                <Button variant="secondary" onClick={() => {
                  setEditing(notification.id);
                  setTitle(notification.title);
                  setMessage(notification.message);
                }}>
                  Edit
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(notification.id)}>
                  Delete
                </Button>
                {notification.status === "draft" && (
                  <Button onClick={() => sendPushNotification(notification.id)}>Send</Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}

      {/* <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
            <DialogTitle>
              {editing ? "Edit Notification" : "Create Notification"}
            </DialogTitle>
            <DialogDescription>
              Enter details for the push notification.
            </DialogDescription>
            
            <Input 
                placeholder="Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <Textarea 
                placeholder="Message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <Button 
              onClick={handleSave}
              disabled={loading}
            >
              {editing ? "Update" : "Save as Draft"}
            </Button>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
