"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/hooks/use-sidebar";
import { DemoAuthProvider } from "@/components/providers/demo-auth-provider";
import { MarketplaceFavicon } from "@/components/providers/marketplace-favicon";
import { Toaster } from "sonner";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <DemoAuthProvider>
      <SidebarProvider>
        <TooltipProvider delayDuration={200}>
          <MarketplaceFavicon />
          {children}
          <Toaster position="top-right" richColors />
        </TooltipProvider>
      </SidebarProvider>
    </DemoAuthProvider>
  );
}
