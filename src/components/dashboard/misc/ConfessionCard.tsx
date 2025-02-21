"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addExpertAnswer, approveConfession, deleteConfession } from "@/app/api/confessions/actions";
import { toast } from "react-toastify";
import { Confession } from "@/types/global";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

interface ConfessionCardProps {
  confess: Confession;
}

export default function ConfessionCard({ confess }: ConfessionCardProps) {
  const { id, confession, approved, username, created_at} = confess;
  const [expanded, setExpanded] = useState(false);
  const [isApproved, setIsApproved] = useState(approved);

  const [expertAnswer, setExpertAnswer] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const truncatedText = confession.length > 200 ? confession.substring(0, 200) + "..." : confession;

  async function handleApprove() {
    const response = await approveConfession(id);
    if (response.success) setIsApproved(true);
    toast.success('Confession Approved')
  }

  async function handleReject() {
    const response = await deleteConfession(id);
    if (response.success) window.location.reload();
    toast.success('Confession Rejected')
  }

  const handleAddExpertAnswer = async () => {
    await addExpertAnswer(confess.id, expertAnswer);
    setIsDialogOpen(false);
  };

  return (
    <Card className="p-1">
      <CardHeader className="flex justify-between">
        <span className="text-lg text-black capitalize font-bold">{username}</span>
        <span className="text-sm text-gray-500">
          {new Date(created_at).toLocaleString()}
        </span>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 font-500 text-[16px] leading-normal ">
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
          <>
            <span className="text-green-500">Approved</span>
            <Button 
              variant='destructive' 
              className="bg-primary text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Add Expert Vibe
            </Button>
          </>
        )}
      </CardFooter>

      {/* Expert answer box */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Glow Tip</DialogTitle>
          </DialogHeader>
          <Textarea 
            placeholder="Write your expert advice here..."
            value={expertAnswer}
            onChange={(e) => setExpertAnswer(e.target.value)}
            className="w-full mt-2"
          />

          <DialogFooter>
            <Button onClick={handleAddExpertAnswer} className="bg-secondary text-white">
              Submit Answer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
