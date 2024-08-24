"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePracticeModal } from "@/store/use-practice-modal"

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState<boolean>(false)
  const { isOpen, close } = usePracticeModal()

  useEffect(() => {
    setIsClient(true)
  }, [])
  // To avoid any potential hydration error
  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image src="/heart.svg" alt="Heart" height={100} width={100} />
          </div>
        </DialogHeader>
        <DialogTitle className="text-center font-bold text-2xl">
          Practice lesson
        </DialogTitle>
        <DialogDescription className="text-center text-base">
          Use practice lessons to regain hearts and points. You won&apos;t loose
          hearts or points in practice lessons
        </DialogDescription>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <Button
              variant="primary"
              className="w-full"
              size="lg"
              onClick={close}
            >
              I understand
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
