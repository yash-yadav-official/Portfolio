import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TabsContent } from '@/components/ui/tabs'
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from 'next/image'
import { ProjectsTabProps } from '@/lib/types/types'

export function ProjectsTab({ projects, currentPage }: ProjectsTabProps) {
  return (
    <TabsContent value="projects">
      <Card className="bg-[#001845] border-[#0466C8] h-[300px] flex flex-col">
        <CardHeader className="pb-2 flex-shrink-0">
          <CardTitle className="text-xl sm:text-2xl text-[#0466C8]">Featured Projects</CardTitle>
        </CardHeader>
        <CardContent className="relative flex-grow overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage.projects}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row items-start sm:items-stretch h-full"
            >
              {projects[currentPage.projects - 1] && (
                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-4 h-full">
                  <div className="w-full sm:w-1/3 flex items-center justify-center">
                    <div className="relative w-full pt-[56.25%] sm:pt-0 sm:h-full">
                      <Image
                        src={projects[currentPage.projects - 1].image}
                        alt={projects[currentPage.projects - 1].title}
                        layout="fill"
                        objectFit="cover"
                        className='rounded-lg absolute top-0 left-0'
                      />
                    </div>
                  </div>
                  <div className="w-full sm:w-2/3 flex flex-col justify-start ">
                    <div className="text-left">
                      <h3 className="text-base sm:text-sm font-semibold text-[#7EADFC] mb-1 sm:mb-2 hover:text-[#0466C8] transition-colors sm:space-y-4">
                        <a 
                          href={projects[currentPage.projects - 1].liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          {projects[currentPage.projects - 1].title}
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 inline-block" />
                        </a>
                      </h3>
                      <p className="text-xs sm:text-sm mb-1 sm:mb-2 text-[#979DAC]">
                        {projects[currentPage.projects - 1].description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {projects[currentPage.projects - 1].technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#33415C] text-[#7EADFC] text-xs px-1 py-0 sm:px-2 sm:py-0.5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </TabsContent>
  )
}