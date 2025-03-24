"use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { supabaseClient } from "@/utils/supabase/client";
// import { ConfessionResponse } from "@/types/global";

// type Confession = Database["public"]["Tables"]["confessions"]["Row"];
// type Comment = { id: string; text: string; created_at: string };

export default function UserDetailPage() {
//   const { id } = useParams();
//   const [confessions, setConfessions] = useState<ConfessionResponse[]>([]);
//   const [comments, setComments] = useState<Record<string, Comment[]>>({});

//   useEffect(() => {
//     async function fetchUserData() {
//       // Fetch user's confessions
//       const { data: confessionsData } = await supabaseClient
//         .from("confessions")
//         .select("*")
//         .eq("user_id", id);

//       setConfessions(confessionsData || []);

//       // Fetch comments for each confession
//       const commentsData: Record<string, Comment[]> = {};
//       for (const confession of confessionsData || []) {
//         const { data: confessionComments } = await supabaseClient
//           .from("comments")
//           .select("id, text, created_at")
//           .eq("confession_id", confession.id);
            
//         // commentsData[confession.id] = confessionComments || [];
//       }

//       setComments(commentsData);
//     }
//     fetchUserData();
//   }, [id]);

  return (
    <div className="p-6">

      {/* <h2 className="text-xl font-semibold mb-2">Confessions</h2> */}
      {/* {confessions.length === 0 ? (
        <p>No confessions found.</p>
      ) : (
        confessions.map((confession) => (
          <Card key={confession.id} className="mb-4">
            <CardHeader>
              <CardTitle>{confession.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{confession.confession}</p>
              <h3 className="mt-4 font-semibold">Comments:</h3>
              {comments[confession.id]?.map((comment) => (
                <div key={comment.id} className="border-t py-2">
                  <p>{comment.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))
      )} */}
    </div>
  );
}
