"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { supabaseClient } from "@/utils/supabase/client";
import { toast } from "react-toastify";
import { User } from "@/types/global";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);

      const { data, error } = await supabaseClient
      .from("profiles")
      .select("*")
      .order("created_at", { ascending: false});

      if (error) {
        console.error(error);
      } else {
        setUsers(data);
      } 

      setLoading(false);
    }
    fetchUsers();
  }, []);

  async function banUser(userId: string) {
    const banUntil = new Date();
    banUntil.setDate(banUntil.getDate() + 7); // Ban for 7 days

    const { error } = await supabaseClient
      .from("profiles")
      .update({ ban_until: banUntil.toISOString() })
      .eq("id", userId);

    if (error) {
      toast.error("Error banning user");
    } else {
      toast.success("User banned for a week");
    } 
  }

  async function deleteUser(userId: string) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    const { error } = await supabaseClient
    .from("profiles")
    .delete()
    .eq("id", userId);

    if (error) {
      toast.error("Error deleting user")
    } else {
      toast.success("User deleted successfully")
      setUsers(users.filter((user) => user.id !== userId))
    }
  }

  return (
    <div>
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="w-full rounded-lg overflow-x-auto">
        <Table className="w-full ">
          <TableHeader className="bg-primary text-white text-[16px] rounded-lg overflow-x-auto">
            <TableRow>
              <TableHead>Username</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody >
            {users.map((user) => (
              <TableRow key={user.id} className="bg-white rounded-lg">
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="flex justify-end items-center space-x-4">
                  <Button size="sm" onClick={() => router.push(`/dashboard/users/${user.id}`)}>
                    View
                  </Button>
                  <Button 
                    size="sm" 
                    variant="destructive" 
                    onClick={() => banUser(user.id)}
                    className="bg-yellow-500 text-white"
                  >
                    Ban
                  </Button>
                  <Button size="sm" variant="outline" className="bg-red-500 text-white" onClick={() => deleteUser(user.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </div>
      )}
    </div>
  );
}
