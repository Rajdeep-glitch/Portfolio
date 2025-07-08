import { useCallback, useRef, useState } from "react"

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
  onOpenChange?: (open: boolean) => void
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const timers = useRef<{ [key: string]: NodeJS.Timeout }>({})

  const addToast = useCallback((toast: Toast) => {
    setToasts((prev) => [...prev, toast])
    if (toast.duration) {
      timers.current[toast.id] = setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id))
      }, toast.duration)
    }
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
    if (timers.current[id]) {
      clearTimeout(timers.current[id])
      delete timers.current[id]
    }
  }, [])

  return {
    toasts,
    addToast,
    removeToast,
  }
}
