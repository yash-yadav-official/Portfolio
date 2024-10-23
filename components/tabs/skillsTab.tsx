import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { TabsContent } from '../ui/tabs'
import { SkillsTabProps } from '@/lib/types/types'


export function SkillsTab({ skills, currentPage, updatePage, pageCount, paginateData }: SkillsTabProps) {
  return (
    <TabsContent value="skills">
      <Card className="bg-[#001845] border-[#0466C8] h-[250px] overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl text-[#0466C8]">Technical Skills</CardTitle>
        </CardHeader>
        <CardContent className="h-[190px] overflow-hidden relative pb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage.skills}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {paginateData(skills, currentPage.skills).map((skill, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <skill.icon className="w-5 h-5 mr-2 text-[#7EADFC]" />
                    <a
                      href={`https://example.com/skills/${skill.name.toLowerCase()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7EADFC] hover:text-[#0466C8] transition-colors"
                    >
                      {skill.name}
                    </a>
                  </div>
                  <div className="w-1/2 bg-[#33415C] rounded-full h-2.5">
                    <div
                      className="bg-[#0466C8] h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </CardContent>
        <div className="flex justify-end gap-2 mt-2 px-6 absolute bottom-4 right-0">
          <Button 
            onClick={() => updatePage('skills', Math.max(currentPage.skills - 1, 1))}
            disabled={currentPage.skills === 1}
            variant="ghost"
            size="icon"
            className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent"
          >
            <ChevronLeft className="w-6 h-6" />
            <span className="sr-only">Previous skills</span>
          </Button>
          <Button 
            onClick={() => updatePage('skills', Math.min(currentPage.skills + 1, pageCount(skills)))}
            disabled={currentPage.skills === pageCount(skills)}
            variant="ghost"
            size="icon"
            className="text-[#FF6B6B] hover:text-[#FF4040] hover:bg-transparent"
          >
            <ChevronRight className="w-6 h-6" />
            <span className="sr-only">Next skills</span>
          </Button>
        </div>
      </Card>
    </TabsContent>
  )
}