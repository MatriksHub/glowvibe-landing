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