import React from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { UpdatePageButtonProps } from '@/lib/types/types'



export function UpdatePageButton({ direction, currentPage, totalPages, onUpdate }: UpdatePageButtonProps) {
  const isDisabled = direction === 'prev' ? currentPage === 1 : currentPage === totalPages
  const newPage = direction === 'prev' ? Math.max(currentPage - 1, 1) : Math.min(currentPage + 1, totalPages)

  return (
    <Button 
      onClick={() => onUpdate(newPage)}
      disabled={isDisabled}
      variant="ghost"
      size="sm"
      className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent p-1 sm:p-2"
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      ) : (
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      )}
      <span className="sr-only">{direction === 'prev' ? 'Previous' : 'Next'} project</span>
    </Button>
  )
}