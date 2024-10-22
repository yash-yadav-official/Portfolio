'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, Zap, Database, Layout, Server, Cpu, Cloud, Box, GitBranch, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SkillsTab } from '@/components/tabs/skillsTab'
const personalInfo = {
    name: "Ian Mukua",
    title: "Full Stack Developer",
    email: "ian.mukua@example.com",
    location: "Nairobi, Kenya",
    summary: "Experienced Full Stack Developer with a passion for creating efficient, scalable, and innovative web applications. Skilled in both front-end and back-end technologies, with a strong focus on user experience and performance optimization."
  }
  
  const skills = [
    { name: "JavaScript", level: 90, icon: Code },
    { name: "React", level: 85, icon: Layout },
    { name: "Node.js", level: 80, icon: Server },
    { name: "Python", level: 75, icon: Code },
    { name: "SQL", level: 70, icon: Database },
    { name: "AWS", level: 65, icon: Cloud },
    { name: "Docker", level: 60, icon: Box },
    { name: "GraphQL", level: 55, icon: GitBranch },
  ]
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Developed a full-featured e-commerce platform with real-time inventory management and secure payment processing.",
      image: "/projo.jpg",
      liveLink: "https://ecommerce-example.com",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      title: "Task Management App",
      description: "Built a collaborative task management application with real-time updates and team communication features.",
      image: "/projo.jpg",
      liveLink: "https://taskmanager-example.com",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"]
    },
    {
      title: "AI-powered Chatbot",
      description: "Implemented an AI-powered chatbot for customer support, integrating natural language processing for improved user interactions.",
      image: "/projo.jpg",
      liveLink: "https://chatbot-example.com",
      technologies: ["Python", "TensorFlow", "Flask", "React"]
    }
  ]
  
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Nairobi",
      year: "2015 - 2019"
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "Moringa School",
      year: "2020"
    }
  ]
  
type PageState = {
  skills: number;
  projects: number;
  education: number;
}

export default function Component() {
  const [activeTab, setActiveTab] = useState('profile')
  const [currentPage, setCurrentPage] = useState<PageState>({
    skills: 1,
    projects: 1,
    education: 1,
  })
  const itemsPerPage = 3

  const paginateData = <T,>(data: T[], page: number): T[] => {
    const startIndex = (page - 1) * itemsPerPage
    return data.slice(startIndex, startIndex + itemsPerPage)
  }

  const updatePage = (section: keyof PageState, newPage: number) => {
    setCurrentPage(prev => ({ ...prev, [section]: newPage }))
  }

  const pageCount = (data: unknown[]) => Math.ceil(data.length / itemsPerPage)

  return (
    <div className="h-screen bg-[#001233] text-[#979DAC] p-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto border-2 border-[#0466C8] p-8 rounded-lg shadow-lg shadow-[#0466C8]/20 bg-[#001233]/90 backdrop-blur-md relative z-10"
      >
         <header className="text-center mb-12">
          <motion.h1 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-2 text-[#0466C8]"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mb-4 text-[#7D8597]"
          >
            {personalInfo.title}
          </motion.p>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg mb-4 text-[#979DAC]"
          >
            {personalInfo.location} | {personalInfo.email}
          </motion.p>
        </header>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4 bg-[#001845]/50 backdrop-blur-sm">
            {['profile', 'skills', 'projects', 'education'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="data-[state=active]:bg-[#0466C8] data-[state=active]:text-[#001233] text-[#979DAC] transition-all duration-300 ease-in-out hover:text-[#0466C8]"
              >
                {tab === 'profile' && <Cpu className="w-5 h-5 mr-2" />}
                {tab === 'skills' && <Zap className="w-5 h-5 mr-2" />}
                {tab === 'projects' && <Briefcase className="w-5 h-5 mr-2" />}
                {tab === 'education' && <GraduationCap className="w-5 h-5 mr-2" />}
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
                            <TabsContent value="profile">
                <Card className="bg-[#001845] border-[#0466C8] h-[250px] overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#0466C8]">Professional Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="text-[#979DAC]">
                    <p>{personalInfo.summary}</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <SkillsTab 
        skills={skills}
        currentPage={currentPage}
        updatePage={updatePage}
        pageCount={pageCount}
        paginateData={paginateData}
      />
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
              <img 
                src={projects[currentPage.projects - 1].image} 
                alt={projects[currentPage.projects - 1].title} 
                className="w-1/3 h-full object-cover rounded-md"
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
            </motion.div>
          </AnimatePresence>
        </Tabs>
        <footer className="text-center border-t border-[#0466C8] pt-4">
          <div className="flex justify-center space-x-4 mb-4">
            {[
              { Icon: Github, color: '#6e5494', link: 'https://github.com' },
              { Icon: Linkedin, color: '#0077b5', link: 'https://linkedin.com' },
              { Icon: Mail, color: '#D44638', link: 'mailto:example@email.com' }
            ].map(({ Icon, color, link }, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className={`text-white border-2 transition-all duration-300`}
                    style={{ backgroundColor: color, borderColor: color }}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </footer>
      </motion.div>
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #0466C8 1px, transparent 1px),
            linear-gradient(to bottom, #0466C8 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .education-scroll::-webkit-scrollbar {
          display: none;
        }
        .education-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}