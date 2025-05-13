"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { login, signup } from "@/app/auth/actions";

export default function EmailAuthForm() {
  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2 bg-primary/10">
        <TabsTrigger value="login">ログイン</TabsTrigger>
        <TabsTrigger value="signup">サインアップ</TabsTrigger>
      </TabsList>
      {/* --- Login --- */}
      <TabsContent value="login" className="mt-4 space-y-4">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-login">Email</Label>
            <Input id="email-login" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pw-login">Password</Label>
            <Input id="pw-login" name="password" type="password" required />
          </div>
          <Button formAction={login} className="w-full">
            ログイン
          </Button>
        </form>
      </TabsContent>
      {/* --- SignUp --- */}
      <TabsContent value="signup" className="mt-4 space-y-4">
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-signup">Email</Label>
            <Input id="email-signup" name="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pw-signup">Password</Label>
            <Input id="pw-signup" name="password" type="password" required />
          </div>
          <Button formAction={signup} className="w-full">
            サインアップ
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  );
}
