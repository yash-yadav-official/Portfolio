import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { motion, AnimatePresence } from "framer-motion"
import { EducationTabProps } from '@/lib/types/types'
import { ExternalLink } from 'lucide-react'

export function EducationTab({ education, currentPage, paginateData }: EducationTabProps) {
  return (
    <TabsContent value="education">
      <Card className="bg-[#001845] border-[#0466C8] h-[250px] overflow-hidden">
        <CardHeader className='pb-2'>
          <CardTitle className="text-xl sm:text-2xl text-[#0466C8]">Education</CardTitle>
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
                  <h3 className="text-base sm:text-sm font-semibold text-[#7EADFC] mb-1 sm:mb-2 hover:text-[#0466C8] transition-colors">
                    <a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0466C8] transition-colors"
                    >
                      {edu.degree}
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 inline-block" />
                    </a>
                  </h3>
                  <p className="text-[#979DAC]">{edu.institution}</p>
                  <p className="text-sm text-[#7D8597]">{edu.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </TabsContent>
  )
}