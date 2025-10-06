"use client";

import React from "react";
import { useMedia } from "use-media";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface ResponsiveDialogProps {
  children: React.ReactNode;
  isOpen: boolean;
  onChange: (open: boolean) => void;
}

/**
 * ResponsiveDialog — uses a Shadcn Dialog on desktop
 * and a Drawer on mobile. Perfect for forms, onboarding, or modals.
 */
const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  children,
  isOpen,
  onChange,
}) => {
  // `useMedia` hook checks if viewport is desktop-sized (≥768px)
  const isDesktop = useMedia({ minWidth: "768px" });

  if (isDesktop) {
    // 💻 Desktop: use Shadcn Dialog
    return (
      <Dialog open={isOpen} onOpenChange={onChange}>
        <DialogContent className="w-full max-w-4xl p-0 gap-0 overflow-hidden">
          <DialogHeader>
            {/* Hidden title for accessibility */}
            <DialogTitle className="sr-only">Simpliflow Modal</DialogTitle>
          </DialogHeader>
          <div>{children}</div>
        </DialogContent>
      </Dialog>
    );
  }

  // 📱 Mobile: use Shadcn Drawer
  return (
    <Drawer open={isOpen} onOpenChange={onChange}>
      <DrawerContent className="max-h-[95vh] overflow-hidden rounded-t-2xl shadow-lg">
        <DrawerHeader>
          {/* Hidden title for accessibility */}
          <DrawerTitle className="sr-only">Simpliflow Drawer</DrawerTitle>
        </DrawerHeader>

        {/* Scrollable area — minus header height */}
        <div className="overflow-y-auto max-h-[calc(95vh-72px)] px-4">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ResponsiveDialog;
