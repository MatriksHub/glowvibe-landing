interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string; 
}

interface User {
    uid: string;
    email: string;
    username: string;
    push_token?: string;
    role: "admin" | "user";
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
    status: "draft" | "sent";
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
    tickets: any[];
};
  
  