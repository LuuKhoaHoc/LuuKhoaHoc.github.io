"use client";

import { ComponentProps, useEffect, useMemo, useState } from "react";

import { useTheme } from "next-themes";

import { AvatarImage } from "@/components/ui/Avatar";

interface ThemeAwareAvatarImageProps
  extends Omit<ComponentProps<typeof AvatarImage>, "src"> {
  lightSrc: string;
  darkSrc: string;
}

export function ThemeAwareAvatarImage({
  lightSrc,
  darkSrc,
  alt,
  ...rest
}: ThemeAwareAvatarImageProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = useMemo(() => {
    if (!mounted) {
      return lightSrc;
    }

    return resolvedTheme === "dark" ? darkSrc : lightSrc;
  }, [darkSrc, lightSrc, mounted, resolvedTheme]);

  return <AvatarImage {...rest} alt={alt} src={src} />;
}
