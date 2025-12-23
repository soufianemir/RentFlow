"use client";

import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "./button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: ReactNode;
}

export function Modal({ open, onClose, title = "Modal", children }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-subtle transition duration-200 dark:bg-neutral-900">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Contenu de démonstration pour vos futures modales.</p>
          </div>
          <Button variant="ghost" aria-label="Fermer la modal" onClick={onClose}>
            Fermer
          </Button>
        </div>
        <div className="text-neutral-700 dark:text-neutral-200">{children ?? "Ajoutez votre propre contenu ici."}</div>
      </div>
    </div>,
    document.body
  );
}
