"use client";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const photos = Array.from({ length: 12 }, (_, i) => `/photos/sample-${i + 1}.jpg`);

export default function PhotoGallery() {
  return (
    <ScrollArea className="h-[420px] w-full">
      <div className="grid grid-cols-3 gap-2 p-2">
        {photos.map((src) => (
          <div key={src} className="relative w-full aspect-square overflow-hidden rounded-md">
            <Image src={src} alt="photo" fill className="object-cover" />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
