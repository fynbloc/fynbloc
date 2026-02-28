"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface EarlyAccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({
  open,
  onClose,
}: EarlyAccessModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        onClose();
      }, 2000);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>

            {!submitted ? (
              <>
                <h3 className="text-xl font-bold text-foreground">
                  Request Early Access
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Be the first to experience Fynbloc. Enter your email to join
                  the waitlist.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(255,131,93,0.25)]"
                  >
                    Join Waitlist
                  </button>
                </form>
              </>
            ) : (
              <div className="py-4 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xl">&#10003;</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  You&apos;re on the list!
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We&apos;ll reach out when we launch.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
