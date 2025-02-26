"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { addExpertAdvice, approveConfession, deleteConfession, updateConfession } from "@/app/api/confessions/actions";
import { toast } from "react-toastify";
import { Confession } from "@/types/global";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

interface ConfessionCardProps {
  confess: Confession;
}

export default function ConfessionCard({ confess }: ConfessionCardProps) {
  const { id, title, confession, approved, username, expert_advice, created_at} = confess;

  const [expanded, setExpanded] = useState(false);
      
    const [newTitle, setNewTitle] = useState(title);
    const [newConfession, setNewConfession] = useState(confession);
    
    const [isEditing, setIsEditing] = useState(false);
    const [isApproved, setIsApproved] = useState(approved);
    const [expertAdvice, setExpertAdvice] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
  


  const truncatedText = confession.length > 200 ? confession.substring(0, 200) + "..." : confession;

  // handle approval
  async function handleApprove(): Promise<void> {
    const response: { success: boolean } = await approveConfession(id);

    if (response && response.success) {
      setIsApproved(true);
      toast.success('Confession Approved!');
    } else {
      toast.error("Failed to approve confession!")
    }
  };

  // handle reject and delete
  async function handleReject(): Promise<void> {
    const response: { success: boolean } = await deleteConfession(id);
    if (response && response.success) {
      // window.location.reload();
      toast.success('Confession deleted');
    } else {
      toast.error("Error deleting confession")
    }
  };

  // handle expert answer
  const handleAddExpertAdvice = async (): Promise<void> => {
    const response = await addExpertAdvice(confess.id, expertAdvice);

    if (response) {
      toast.success("Glow Tip added successfully");
      setIsDialogOpen(false);
    } else {
      toast.error("Error adding expert response");
    }
  };

  // handle save
  const handleSave = async (): Promise<void> => {
    setIsLoading(true);

    const response: { success: boolean } = await updateConfession(id, newTitle, newConfession);

    if (response.success) {
      toast.success("Confession updated successfully!");
    } else {
      toast.error("Failed to update confession");
    }

    setIsLoading(false);
    setIsEditing(false);
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
        {isEditing ? (
          <div className="grid gap-4">
            <Input 
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <Textarea 
              value={newConfession} 
              onChange={(e) => setNewConfession(e.target.value)} 
              rows={10}
            />
          </div>
        ) : (
          <div className="grid gap-2">
            <h3 className="text-gray-700 font-600 text-[16px] capitalize">
              {title}
            </h3>
            <p className="text-gray-700 font-500 text-[14px] leading-normal ">
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
          </div>
        )}

        <div className="flex justify-end items-end mt-4">
          {isEditing ? (
            <div className="flex justify-between gap-2">
              <Button 
                onClick={handleSave} 
                disabled={isLoading}
                className="text-sm"
              >
                {isLoading ? "Saving..." : "Save"}
              </Button>
              <Button 
                variant='outline' 
                onClick={() => setIsEditing(false)}
                className="text-sm"
              >
                Cancel
              </Button>
            </div>
          ) : (
            <Button 
              variant='link' 
              onClick={() => setIsEditing(true)}
              className="text-sm text-secondary"
            >
              Edit
            </Button>
          )}
        </div>

        {expertAdvice && (
          <Card className="rounded-lg p-[10px] gap-2 border-1 border-primary">
            <h5>
              <strong>Glow Tip:</strong> 
            </h5>
            <p>{expert_advice}</p>
          </Card>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {!isApproved ? (
          <>
            <Button variant="outline" className="bg-green-500 text-sm text-white" onClick={handleApprove}>
              Approve
            </Button>
            <Button variant="destructive" className="bg-red-500 text-sm text-white" onClick={handleReject}>
              Reject
            </Button>
          </>
        ) : (
          <>
            <span className="text-green-500 text-sm">Approved</span>
            <Button 
              variant='destructive' 
              className="bg-primary text-sm text-white"
              onClick={() => setIsDialogOpen(true)}
            >
              Add Glow Tip
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
            value={expertAdvice}
            onChange={(e) => setExpertAdvice(e.target.value)}
            className="w-full mt-2"
          />

          <DialogFooter>
            <Button onClick={handleAddExpertAdvice} className="bg-secondary text-white">
              Submit Answer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
