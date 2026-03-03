"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden text-white w-full origin-center"
      style={{
        backgroundColor: "#0f0f0f",
        backgroundImage: `url('/bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}>
      <div className="flex items-center gap-2 p-10 z-10">
        <div className="h-7 w-7 rounded-full bg-teal-500 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
        <span className="text-2xl font-bold tracking-tight">aps</span>
      </div>

      <div className="flex justify-between items-center xl:px-28 2xl:px-60 pt-4">
        <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-center px-8 lg:px-12 overflow-hidden">
          <div className="relative z-10">
            <div className="max-w-lg">
              <h1 className="text-4xl font-semibold leading-tight mb-8">
                Expert level Cybersecurity in <span className="text-teal-500">hours</span> not weeks.
              </h1>

              <div className="space-y-6">
                <h3 className="text-lg font-medium">What&apos;s included</h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-gray-300">Effortlessly spider and map targets to uncover hidden security flaws</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-gray-300">Deliver high-quality, validated findings in hours, not weeks.</p>
                  </div>
                  <div className="flex gap-3">
                    <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-gray-300">Generate professional, enterprise-grade security reports automatically.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-20">
            <div className="flex items-center gap-2 mb-2 text-emerald-600 font-semibold">
              <span>★</span>
              <span className="text-white font-normal">Trustpilot</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">Rated 4.5/5.0</span>
              <span className="text-sm text-gray-400">(100k+ reviews)</span>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center lg:w-1/2 p-4 lg:p-8 z-10">
          <div className="w-full max-w-[500px] rounded-3xl bg-white p-8 lg:p-12 text-black shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Sign up</h2>
              <p className="text-gray-500 text-sm">
                Already have an account? <a href="#" className="text-teal-500 hover:underline">Log in</a>
              </p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-4">
              <Input type="text" placeholder="First name*" required className="h-12 bg-transparent text-black" />
              <Input type="text" placeholder="Last name*" required className="h-12 bg-transparent text-black" />
              <Input type="email" placeholder="Email address*" required className="h-12 bg-transparent text-black" />
              <div className="relative">
                <Input type="password" placeholder="Password (8+ characters)*" required className="h-12 bg-transparent text-black pr-10" />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" /><circle cx="12" cy="12" r="3" /></svg>
                </button>
              </div>

              <div className="flex items-start gap-3 mt-6 mb-6">
                <input type="checkbox" id="terms" required className="mt-1 h-5 w-5 rounded border-gray-300 bg-white text-teal-600 focus:ring-teal-600" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to Aps&apos;s <a href="#" className="text-blue-800 hover:underline">Terms & Conditions</a> and acknowledge the <a href="#" className="text-blue-800 hover:underline">Privacy Policy</a>
                </label>
              </div>

              <Button type="submit" className="cursor-pointer w-full h-12 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-full text-base">
                Create account
              </Button>
            </form>

            <div className="flex gap-4 mt-8">
              <Button variant="outline" className="flex-1 h-12 rounded-full border-gray-200 bg-black hover:bg-black/90 text-white p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 21.493c-1.396 0-1.896-.867-3.414-.867-1.488 0-1.924.867-3.444.867-2.91 0-6.19-2.85-6.19-7.97 0-4.04 2.1-6.42 4.96-6.42 1.69 0 2.82.91 3.51.91.73 0 1.96-.91 3.86-.91 1.09 0 3.83.2 5.09 2.51-4.14 2.15-3.32 7.57.8 9.3-.96 1.77-1.99 3.42-3.13 3.42zm-5.07-16.7c-.12-2.32 1.95-4.22 4-4.32.22 2.37-2.16 4.39-4 4.32z" /></svg>
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-full border-gray-200 hover:bg-gray-50 bg-[#F9F5F1] p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" /><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" /><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" /><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571-.008-.008-.016-.016-.023-.024l6.19 5.238C40.697 35.341 44 30.17 44 24c0-1.341-.138-2.65-.389-3.917z" /></svg>
              </Button>
              <Button variant="outline" className="flex-1 h-12 rounded-full border-gray-200 bg-[#4267B2] hover:bg-[#4267B2]/90 text-white p-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
