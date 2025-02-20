import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { useRouter } from "next/navigation"
// import { toast } from "react-toastify"
// import { supabase } from "@/utils/supabase"
import { useUser } from "@/context/UserContext"
import { loginAction } from "@/app/auth/login/actions"

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const user = await loginAction(formData.email, formData.password);
      setUser(user); // Set the user data in the context
      router.push('/dashboard'); // Redirect on the client
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
     } finally {
        setLoading(false);
    }
    // const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    // if (error) {
    //   toast.error(error.message);
    // } else {
    //   // Check if user is an admin
    //   const { data: userData } = await supabase.from("auth.users").select("role").eq("id", data.user?.id).single();

    //   if (userData?.role === "admin") {
    //     toast.success("Login successful. Check your email for a verification code.");
    //     router.push("/auth/verify");
    //   } else {
    //     toast.error("Access denied. Only admins can log in.");
    //     await supabase.auth.signOut();
    //   }
    // }

    // setLoading(false);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>Enter your email below to login to your account</CardDescription>
          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center mb-4 font-medium">
              {error}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="sandra@example.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 text-gray-700"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 text-gray-700"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <a href="/" className="underline underline-offset-4">
                Sign up
              </a>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

