"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { approveConfession, deleteConfession } from "@/app/api/confessions/actions";

interface ConfessionProps {
  id: string;
  username: string;
//   created_at: string;
  confession?: string;
  approved: boolean;
}

export default function ConfessionCard({ id, username,  confession = "", approved }: ConfessionProps) {
  const [expanded, setExpanded] = useState(false);
  const [isApproved, setIsApproved] = useState(approved);

  const truncatedText = confession.length > 200 ? confession.substring(0, 200) + "..." : confession;

  async function handleApprove() {
    const response = await approveConfession(id);
    if (response.success) setIsApproved(true);
  }

  async function handleReject() {
    const response = await deleteConfession(id);
    if (response.success) window.location.reload();
  }

  return (
    <Card className="p-1">
      <CardHeader className="flex justify-between">
        <span className="text-lg text-black font-bold">{username}</span>
        <span className="text-sm text-gray-500"></span>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 text-[14px]">
          {expanded ? confession : truncatedText}
          
          {confession.length > 150 && (
            <button 
                onClick={() => setExpanded(!expanded)} 
                className="text-purple-500 ml-2"
            >
              {expanded ? "Show Less" : "Read More"}
            </button>
          )}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {!isApproved ? (
          <>
            <Button variant="outline" className="bg-green-500 text-white" onClick={handleApprove}>
              Approve
            </Button>
            <Button variant="destructive" className="bg-red-500 text-white" onClick={handleReject}>
              Reject
            </Button>
          </>
        ) : (
          <span className="text-green-500">Approved</span>
        )}
      </CardFooter>
    </Card>
  );
}
