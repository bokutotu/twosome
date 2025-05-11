import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Map, ExternalLink } from "lucide-react";
import Link from "next/link";

type LinkDef = { label: string; href: string; icon: "instagram" | "map" | "external-link" };
export default function DeepResearchLinks({ links }: { links: LinkDef[] }) {
  const iconMap = {
    instagram: Instagram,
    map: Map,
    "external-link": ExternalLink,
  } as const;
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold">Deep Research</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {links.map((l) => {
          const Icon = iconMap[l.icon];
          return (
            <Card key={l.label} className="transition-shadow hover:shadow-md">
              <Link href={l.href} target="_blank" rel="noopener noreferrer">
                <CardContent className="flex flex-col items-center justify-center gap-2 py-6">
                  <Icon className="size-6 text-muted-foreground" />
                  <span className="text-sm font-medium">{l.label}</span>
                </CardContent>
              </Link>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
