interface FormData {
    email: string;
    message: string; 
}

interface ContactFormData {
    firstName: string;
    lastName: string;
    message: string;
    email: string;
}

interface User {
    id: string;
    uid: string;
    email: string;
    username: string;
    push_token?: string;
    isAdmin: boolean;
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
    expert_answers?: string | null; // Expert response
};

export type ConfessionResponse = {
    success: boolean;
    data?: Confession[];
    error?: string;
};

export type Notification = {
    id: string;
    title: string;
    body: string;
    status: "sent" | "failed";
    created_at: string;
    sent_at: string | null;
    failed_count: number;
    delivered_count: number;
};
  
export type User = {
    uid: string;
    email: string;
    password: string;
    username: string;
    push_token: string | null;
    role: "admin" | "user";
};
  
export type SendNotificationResponse = {
    success: boolean;
    tickets: string;
};
  
  