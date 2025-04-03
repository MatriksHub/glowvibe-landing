"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabaseClient } from "@/utils/supabase/client";
import { Database } from "@/types/global";

type Confession = Database["public"]["Tables"]["confessions"]["Row"];
type Comment = { id: string; comment: string; created_at: string };

export default function UserDetailPage() {
  const { id } = useParams();
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [comments, setComments] = useState<Record<string, Comment[]>>({});

  useEffect(() => {
    async function fetchUserData() {
      // Fetch user's confessions
      const { data: confessionsData } = await supabaseClient
        .from("confessions")
        .select("*")
        .eq("user_id", id)
        .order("created_at", { ascending: false});

      setConfessions(confessionsData || []);

      // Fetch comments for each confession
      const commentsData: Record<string, Comment[]> = {};

      for (const confession of confessionsData || []) {
        const { data: confessionComments } = await supabaseClient
          .from("comments")
          .select("id, comment, created_at")
          .eq("confession_id", confession.id);
            
        commentsData[confession.id] = confessionComments || [];
      }

      setComments(commentsData);
    }
    fetchUserData();
  }, [id]);

  return (
    <div className="grid gap-6">
      <h2 className="text-xl font-semibold mb-2">Confessions</h2>
      {confessions.length === 0 ? (
        <p>No confessions found.</p>
      ) : (
        confessions.map((confession) => (
          <Card key={confession.id} className="px-0 py-0">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-x-10">
                <Card className="flex-[3] border-0 shadow-none">
                  <CardHeader>
                    <CardTitle>{confession.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[15px]">
                      {confession.confession}
                    </p>
                  </CardContent>
                </Card>

                <div className="flex-[2] grid gap-y-4 ">
                  <Card className="border-0 shadow-none">
                    <CardHeader>
                      <CardTitle>Expert Advice</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-y-auto">
                      <p className="text-[12px]">{confession.expert_answers}</p>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-none h-auto">
                    <CardHeader>
                      <CardTitle>Comments:</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <div className="overflow-y-auto">
                        {comments[confession.id]?.map((comment) => (
                          <div key={comment.id} className="border-t border-shade py-2 grid gap-2">
                            <p className="text-[12px]">
                              {comment.comment}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}
