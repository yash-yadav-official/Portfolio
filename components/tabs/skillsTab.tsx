import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, AnimatePresence } from "framer-motion"
import { TabsContent } from '../ui/tabs'
import { SkillsTabProps } from '@/lib/types/types'


export function SkillsTab({ skills, currentPage, paginateData }: SkillsTabProps) {
  return (
    <TabsContent value="skills">
      <Card className="bg-[#001845] border-[#0466C8] h-[250px] overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl text-[#0466C8]">Technical Skills</CardTitle>
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
      </Card>
    </TabsContent>
  )
}