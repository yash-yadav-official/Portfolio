
"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, Zap, Database, Layout, Server, Cpu, Gamepad, Cloud, Box, GitBranch, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
    image: "/placeholder.svg?height=200&width=300",
    liveLink: "https://ecommerce-example.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    title: "Task Management App",
    description: "Built a collaborative task management application with real-time updates and team communication features.",
    image: "/placeholder.svg?height=200&width=300",
    liveLink: "https://taskmanager-example.com",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"]
  },
  {
    title: "AI-powered Chatbot",
    description: "Implemented an AI-powered chatbot for customer support, integrating natural language processing for improved user interactions.",
    image: "/placeholder.svg?height=200&width=300",
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
export default function Component() {
  const [activeTab, setActiveTab] = useState('profile')
  const [currentPage, setCurrentPage] = useState({
    skills: 1,
    projects: 1,
    education: 1,
    games: 1
  })
  const itemsPerPage = 3

// @ts-expect-error: Dynamic data length may vary
  const paginateData = (data: unknown[], page: number) => {
    const startIndex = (page - 1) * itemsPerPage
    return data.slice(startIndex, startIndex + itemsPerPage)
  }

  const updatePage = (section: string, newPage: number) => {
    setCurrentPage(prev => ({ ...prev, [section]: newPage }))
  }

// @ts-expect-error: Dynamic data length may vary
const pageCount = (data: unknown[]) => Math.ceil(data.length / itemsPerPage)

  return (
    <div className="min-h-screen bg-[#001233] text-[#979DAC] p-8 font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
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
            className="text-5xl font-bold mb-2 text-[#0466C8] holographic"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mb-4 text-[#7D8597] holographic"
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
          <TabsList className="grid w-full grid-cols-5 bg-[#001845]/50 backdrop-blur-sm">
            {['profile', 'skills', 'projects', 'education', 'games'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="data-[state=active]:bg-[#0466C8] data-[state=active]:text-[#001233] text-[#979DAC] transition-all duration-300 ease-in-out hover:text-[#0466C8]"
              >
                {tab === 'profile' && <Cpu className="w-5 h-5 mr-2" />}
                {tab === 'skills' && <Zap className="w-5 h-5 mr-2" />}
                {tab === 'projects' && <Briefcase className="w-5 h-5 mr-2" />}
                {tab === 'education' && <GraduationCap className="w-5 h-5 mr-2" />}
                {tab === 'games' && <Gamepad className="w-5 h-5 mr-2" />}
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
            <Card className="bg-[#001845] border-[#0466C8]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0466C8]">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent className="text-[#979DAC]">
                <p>{personalInfo.summary}</p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card className="bg-[#001845] border-[#0466C8]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0466C8]">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-[#979DAC]">
              {paginateData(skills, currentPage.skills).map((skill, index) => (
                    <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <skill.icon className="w-5 h-5 mr-2" />
                      <span>{skill.name}</span>
                    </div>
                    <div className="w-1/2 bg-[#33415C] rounded-full h-2.5">
                      <div className="bg-[#0466C8] h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between mt-4">
                  <Button 
                    onClick={()=>updatePage('skills', currentPage.skills)} 
                    disabled={currentPage.skills === pageCount(skills)}
                    variant="outline"
                    className="text-[#0466C8] border-[#0466C8]"
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={() => updatePage('skills', Math.min(currentPage.skills + 1, pageCount(skills)))}
                    disabled={currentPage.skills === pageCount(skills)}                    
                    variant="outline"
                    className="text-[#0466C8] border-[#0466C8]"
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card className="bg-[#001845] border-[#0466C8]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0466C8]">Featured Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-[#979DAC]">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-[#002855] border-[#0466C8]">
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row gap-4">
                        <img src={project.image} alt={project.title} className="w-full md:w-1/3 rounded-md" />
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-[#0466C8] mb-2">{project.title}</h3>
                          <p className="mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-[#33415C] text-[#979DAC]">{tech}</Badge>
                            ))}
                          </div>
                          <Button variant="outline" className="text-[#0466C8] border-[#0466C8]" asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="education">
            <Card className="bg-[#001845] border-[#0466C8]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#0466C8]">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[#979DAC]">
                {education.map((edu, index) => (
                  <div key={index} className="border-b border-[#33415C] last:border-b-0 pb-4 last:pb-0">
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p>{edu.institution}</p>
                    <p className="text-sm text-[#7D8597]">{edu.year}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>            </motion.div>
          </AnimatePresence>
        </Tabs>
        <footer className="text-center border-t border-[#0466C8] pt-4">
          <div className="flex justify-center space-x-4 mb-4">
            {[Github, Linkedin, Mail].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button variant="outline" size="icon" className="text-[#0466C8] border-[#0466C8] hover:bg-[#0466C8] hover:text-[#001233] transition-all duration-300 holographic-button">
                  <Icon className="h-5 w-5" />
                </Button>
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
        .holographic {
          color: #0466C8;
          text-shadow: 
            0 0 5px #0466C8,
            0 0 10px #0466C8,
            0 0 15px #0466C8,
            0 0 20px #0466C8,
            0 0 35px #0466C8,
            0 0 40px #0466C8;
          animation: holographic 5s ease-in-out infinite;
        }
        @keyframes holographic {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .holographic-button {
          position: relative;
          overflow: hidden;
        }
        .holographic-button::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg 90deg,
            #0466C8 90deg 180deg,
            transparent 180deg 270deg,
            #0466C8 270deg 360deg
          );
          opacity: 0;
          transition: opacity 0.3s;
        }
        .holographic-button:hover::before {
          opacity: 0.1;
          animation: rotate 4s linear infinite;
        }
        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}