import Image from "next/image";
import { ImageIcon } from "lucide-react";
import clsx from "clsx";

type Props = { src?: string; alt: string };
export default function HeroImage({ src, alt }: Props) {
  return (
    <div className="relative aspect-video w-full bg-muted">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <ImageIcon className="size-12" />
        </div>
      )}
    </div>
  );
}
