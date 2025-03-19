import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { sendOtp, verifyOtp } from "@/app/auth/login/actions"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await sendOtp(email);
      setStep(2);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error sending OTP.');
      }
    } finally {
      setLoading(false);
    }    
  }

  const handleVerifyOtp = async () => {
    setLoading(true);
    setError("");

    try {
      const user = await verifyOtp(email, otp);
      console.log(`login user : ${user}`)
      toast.success('Successfuly logged in')
      router.push("/dashboard");
      console.log('User isAdmin aunthenticated successfully');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Invalid OTP');
        toast.error('InVALID OTP')
      }
    } finally {
      setLoading(false);
    } 
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">
            {step === 1 ? "Login" : "Verify OTP"}
          </CardTitle>
          <CardDescription>
            {step === 1 ? "Enter your email below to login to your account" : "Enter the verification code sent to email."}
          </CardDescription>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-[12px] text-wrap text-center mb-2 font-medium">
              {error}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              {step === 1 ? (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 text-gray-700"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    onClick={handleSendOtp}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending...</span>

                      </span>
                    ) : (
                      'Send OTP'
                      )}
                  </Button>
                </>
              ) : (
                <>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="text"
                      placeholder="Enter OTP" 
                      required 
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 text-gray-700"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    onClick={handleVerifyOtp}
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center space-x-2">
                        <span className="spinner w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Verifying...</span>
                    </span>
                    ) : (
                      'Verify OTP'
                    )}
                  </Button>
                </>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}





















// import type React from "react"
// import { cn } from "@/lib/utils"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// // import { useUser } from "@/context/UserContext"
// import { loginAction } from "@/app/auth/login/actions"

// export function LoginForm({ className, ...props }: React.ComponentPropsWithoutRef<"div">) {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const [error, setError] = useState('');
//   // const { setUser } = useUser();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // const user = await loginAction(formData.email);
//       // setUser(user); // Set the user data in the context
//       // router.push('/dashboard'); // Redirect on the client
//     } catch (err) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('An unexpected error occurred.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className={cn("flex flex-col gap-6", className)} {...props}>
//       <Card>
//         <CardHeader>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>Enter your email below to login to your account</CardDescription>
//           {/* Error Message */}
//           {error && (
//             <p className="text-red-500 text-center mb-4 font-medium">
//               {error}
//             </p>
//           )}
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleLogin}>
//             <div className="flex flex-col gap-6">
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input 
//                   id="email" 
//                   type="email" 
//                   placeholder="sandra@example.com" 
//                   required 
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value})}
//                   className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-purple-500 focus:border-purple-500 text-gray-700"
//                 />
//               </div>

//               <Button 
//                 type="submit" 
//                 className="w-full"
//                 disabled={loading}
//               >
//                 {loading ? 'Logging in...' : 'Login'}
//               </Button>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }