import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TabsContent } from '@/components/ui/tabs'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Image from 'next/image'

interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  technologies: string[];
}

interface PageState {
  skills: number;
  projects: number;
  education: number;
}

interface ProjectsTabProps {
  projects: Project[];
  currentPage: PageState;
  updatePage: (section: keyof PageState, newPage: number) => void;
}

export function ProjectsTab({ projects, currentPage, updatePage }: ProjectsTabProps) {
  return (
    <TabsContent value="projects">
      <Card className="bg-[#001845] border-[#0466C8] h-[250px] overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-[#0466C8]">Featured Projects</CardTitle>
        </CardHeader>
        <CardContent className="h-[190px] overflow-hidden relative pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage.projects}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full flex items-center"
            >
              {projects[currentPage.projects - 1] && (
                <div className="flex h-full w-full">
                  <Image
                    src={projects[currentPage.projects - 1].image}
                    alt={projects[currentPage.projects - 1].title}
                    width={300}
                    height={200}
                    className='rounded-lg'
                  />
                  <div className="w-2/3 pl-4 flex flex-col justify-center">
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-[#7EADFC] mb-2 hover:text-[#0466C8] transition-colors">
                        <a 
                          href={projects[currentPage.projects - 1].liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          {projects[currentPage.projects - 1].title}
                          <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                        </a>
                      </h3>
                      <p className="text-sm mb-2 text-[#979DAC]">
                        {projects[currentPage.projects - 1].description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {projects[currentPage.projects - 1].technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="bg-[#33415C] text-[#7EADFC] text-xs">
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
        <div className="flex justify-end gap-2 mt-2 px-6 absolute bottom-4 right-0">
          <Button 
            onClick={() => updatePage('projects', Math.max(currentPage.projects - 1, 1))}
            disabled={currentPage.projects === 1}
            variant="ghost"
            size="icon"
            className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous project</span>
          </Button>
          <Button 
            onClick={() => updatePage('projects', Math.min(currentPage.projects + 1, projects.length))}
            disabled={currentPage.projects === projects.length}                    
            variant="ghost"
            size="icon"
            className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next project</span>
          </Button>
        </div>
      </Card>
    </TabsContent>
  )
}