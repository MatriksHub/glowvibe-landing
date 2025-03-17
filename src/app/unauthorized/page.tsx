import Link from "next/link";

export default function UnauthorizedPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">
          Access Denied
        </h1>

        <p>You do not have permission to access this page.</p>
        
        <Link href="/" className="mt-4 text-blue-500">Go to Homepage</Link>
      </div>
    );
  }
  