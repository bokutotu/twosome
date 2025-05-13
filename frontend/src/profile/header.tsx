"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ProfileHeaderProps {
  profile: {
    nickname: string;
    username: string;
    bio: string;
  };
  onProfileChange: (p: any) => void;
}

export default function ProfileHeader({ profile, onProfileChange }: ProfileHeaderProps) {
  const [open, setOpen] = useState(false);
  const [temp, setTemp] = useState(profile);

  const save = () => {
    onProfileChange({ ...temp });
    setOpen(false);
  };

  return (
    <div className="flex items-center gap-4">
      <Avatar className="h-20 w-20 cursor-pointer" onClick={() => setOpen(true)}>
        <AvatarImage src="/placeholder-user.jpg" />
        <AvatarFallback>{profile.nickname.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold leading-none tracking-tight">
          {profile.nickname}
        </h2>
        <p className="text-muted-foreground text-sm">@{profile.username}</p>
        <p className="text-sm max-w-prose">{profile.bio}</p>
      </div>
      {/* -- Edit Dialog -- */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>プロフィールを編集</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              label="ニックネーム"
              value={temp.nickname}
              onChange={(e) => setTemp({ ...temp, nickname: e.target.value })}
            />
            <Textarea
              rows={3}
              label="自己紹介"
              value={temp.bio}
              onChange={(e) => setTemp({ ...temp, bio: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpen(false)}>
                キャンセル
              </Button>
              <Button onClick={save}>保存</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

