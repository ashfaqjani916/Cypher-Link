"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function ToastDemo() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          title: "created: Created Campaign  ",
          description: "Created Campaign: Socio Marketo",
          action: (
            <ToastAction altText="Goto schedule to undo">close</ToastAction>
          ),
        })
      }}
    >
      Add to calendar
    </Button>
  )
}
