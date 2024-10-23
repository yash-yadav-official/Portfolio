import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { EducationTabProps } from '@/lib/types/types'

export function EducationTab({ education, currentPage, updatePage, pageCount, paginateData }: EducationTabProps) {
  return (
    <TabsContent value="education">
      <Card className="bg-[#001845] border-[#0466C8] h-[250px] overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-[#0466C8]">Education</CardTitle>
        </CardHeader>
        <CardContent className="h-[190px] overflow-hidden relative pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage.education}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {paginateData(education, currentPage.education).map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="mb-4 last:mb-0"
                >
                  <h3 className="text-lg font-semibold text-[#7EADFC]">
                    <a
                      href={`https://example.com/education/${edu.institution.toLowerCase().replace(/\s+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0466C8] transition-colors"
                    >
                      {edu.degree}
                    </a>
                  </h3>
                  <p className="text-[#979DAC]">{edu.institution}</p>
                  <p className="text-sm text-[#7D8597]">{edu.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <div className="flex justify-end gap-2 mt-2 px-6 absolute bottom-4 right-0">
          <Button 
            onClick={() => updatePage('education', Math.max(currentPage.education - 1, 1))}
            disabled={currentPage.education === 1}
            variant="ghost"
            size="icon"
            className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous education</span>
          </Button>
          <Button 
            onClick={() => updatePage('education', Math.min(currentPage.education + 1, pageCount(education)))}
            disabled={currentPage.education === pageCount(education)}
            variant="ghost"
            size="icon"
            className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next education</span>
          </Button>
        </div>
      </Card>
    </TabsContent>
  )
}