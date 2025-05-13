"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProfileHeader from "@/profile/header";
import FriendActions from "@/profile/friend-actions";
import RecentActivity from "@/profile/recent-activity";
import PhotoGallery from "@/profile/photo-gallery";
import ReviewHistory from "@/profile/review-history";
import PrivacySettings from "@/profile/privacy-setting";
import BlockMuteManager from "@/profile/block-mute-manager";
import StatsCards from "@/profile/stats-card";
import Header from "@/components/common/header";

export default function ProfilePage() {
  // Demo state — replace with data-fetching logic (tRPC / React Query etc.)
  const [profile, setProfile] = useState({
    nickname: "Hikaru",
    username: "hikaru_kondo",
    bio: "Rust, Haskell, DJ & Ramen lover 🍜",
    wantCount: 42,
    beenCount: 15,
    friendCount: 8,
  });

  return (
    <>
      <Header />
      <div className="container mx-auto w-full max-w-4xl p-4 space-y-6">
        <ProfileHeader profile={profile} onProfileChange={setProfile} />
        <StatsCards profile={profile} />
        <Tabs defaultValue="activity" className="w-full">
          <TabsList className="mb-4 flex w-full overflow-hidden rounded-lg bg-primary/10 p-1">
            <TabsTrigger value="activity">最近のアクティビティ</TabsTrigger>
            <TabsTrigger value="photos">写真</TabsTrigger>
            <TabsTrigger value="reviews">レビュー</TabsTrigger>
            <TabsTrigger value="privacy">プライバシー</TabsTrigger>
          </TabsList>
          <TabsContent value="activity">
            <RecentActivity />
          </TabsContent>
          <TabsContent value="photos">
            <PhotoGallery />
          </TabsContent>
          <TabsContent value="reviews">
            <ReviewHistory />
          </TabsContent>
          <TabsContent value="privacy">
            <div className="space-y-6">
              <PrivacySettings />
              <BlockMuteManager />
            </div>
          </TabsContent>
        </Tabs>
        <FriendActions />
      </div>
    </>
  );
}
