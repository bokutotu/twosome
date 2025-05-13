"use client";
import { loginWithProvider } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import { Github, Chrome, Twitter } from "lucide-react";

const providers = [
  { id: "github", label: "GitHub", icon: Github },
  { id: "google", label: "Google", icon: Chrome },
  { id: "twitter", label: "Twitter", icon: Twitter },
];

export default function ProviderButtons() {
  return (
    <div className="grid gap-2">
      {providers.map(({ id, label, icon: Icon }) => (
        <form action={loginWithProvider} key={id}>
          <input type="hidden" name="provider" value={id} />
          <Button type="submit" variant="outline" className="w-full flex items-center justify-center gap-2">
            <Icon className="h-4 w-4" />
            {label} で続ける
          </Button>
        </form>
      ))}
    </div>
  );
}

