"use client";

import dynamic from "next/dynamic";
import { useState, type ReactNode } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const LeadDialogForm = dynamic(() =>
  import("./lead-dialog-form").then((module) => module.LeadDialogForm),
);

export function LeadDialog({
  itemId,
  itemTitle,
  pagePath,
  trigger,
}: {
  itemId: string;
  itemTitle: string;
  pagePath?: string;
  trigger?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? <Button>Đăng ký</Button>}
      </DialogTrigger>
      {open && (
        <LeadDialogForm
          itemId={itemId}
          itemTitle={itemTitle}
          pagePath={pagePath}
          onClose={() => setOpen(false)}
        />
      )}
    </Dialog>
  );
}
