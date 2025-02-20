import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Suspense, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import { useUser } from "@/context/UserContext"
import { verifyAction } from "@/app/auth/verify/actions"

export function VerifyForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const { setUser } = useUser();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState('');
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required for verification.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const user = await verifyAction(email, code.join(''));
      setUser(user);
      router.push('/dashboard');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setLoading(false); // Stop spinner
    }

    // const enteredCode = code.join("");

    // if (enteredCode === "123456") {
    //     toast.success("Verification successful!");
    //     localStorage.setItem("isAdmin", "true");
    //     router.push("/dashboard");
    // } else {
    //     toast.error("Invalid verification code.");
    // }

    // setLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Verify your account</CardTitle>
          <CardDescription>Enter the verification code sent to <strong>{email}</strong>.</CardDescription>
          {/* Error Message */}
          {error && 
            <p className="text-red-500 text-center mb-4">
              {error}
            </p>
          }
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="password">
                    Token
                </Label>
                <div className="grid grid-cols-6 gap-2">
                  {code.map((_, i) => (
                    <Input
                      key={i}
                      id={`code-${i}`}
                      type="text"
                      maxLength={1}
                      value={code[i]}
                      onChange={(e) => {
                        const newCode = [...code];
                        newCode[i] = e.target.value;
                        setCode(newCode);
                      }}
                      className="flex w-12 h-12 border text-center text-xl"
                    />
                  ))}
                </div>
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

// Main component with Suspense boundary
export default function VerifyPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyForm />
    </Suspense>
  );
}