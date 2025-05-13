"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Users } from "lucide-react";

interface StatsCardsProps {
  profile: {
    wantCount: number;
    beenCount: number;
    friendCount: number;
  };
}

export default function StatsCards({ profile }: StatsCardsProps) {
  const cards = [
    {
      icon: Heart,
      label: "行きたい店",
      value: profile.wantCount,
    },
    {
      icon: MapPin,
      label: "行った店",
      value: profile.beenCount,
    },
    {
      icon: Users,
      label: "友達",
      value: profile.friendCount,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {cards.map(({ icon: Icon, label, value }) => (
        <Card key={label} className="text-center">
          <CardHeader>
            <CardTitle className="flex justify-center items-center gap-2 text-lg">
              <Icon className="h-5 w-5" /> {label}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">{value}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
