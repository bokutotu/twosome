"use client";
import { Separator } from "@/components/ui/separator";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import EmailAuthForm from "@/auth/email-auth";
import ProviderButtons from "@/auth/provider-buttons";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Twosome アカウント
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            ログイン / 新規登録
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <EmailAuthForm />
          <Separator label="または" className="my-2" />
          <ProviderButtons />
        </CardContent>
      </Card>
    </main>
  );
}

