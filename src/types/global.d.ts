interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    error?: string;
}

interface SubscribeResponse {
    success: boolean;
    error?: string;
}

export type Confession = {
    id: string; // Unique identifier
    user_id: string; // User who posted the confession
    username: string; // Anonymous username
    title: string; // title of confession
    confession: string; // Confession text
    created_at: string; // Timestamp
    approved: boolean; // Approval status
    expert_advice?: string | null; // Expert response
    // moderated_by?: string | null; // Admin who moderated the confession
};

export type ConfessionResponse = {
    success: boolean;
    data?: Confession[];
    error?: string;
};
  