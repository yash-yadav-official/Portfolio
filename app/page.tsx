"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Briefcase, GraduationCap, Code, Zap, Star, Database, Layout, Server, Cpu, ExternalLink, Cloud, Box } from "lucide-react"

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
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const paginatedSkills = skills.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="min-h-screen bg-[#001233] text-[#979DAC] p-8 font-sans">
      <div className="max-w-4xl mx-auto border-2 border-[#0466C8] p-8 rounded-lg shadow-lg shadow-[#0466C8]/20">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 text-[#0466C8]">{personalInfo.name}</h1>
          <p className="text-2xl mb-4 text-[#7D8597]">{personalInfo.title}</p>
          <p className="text-lg mb-4 text-[#979DAC]">{personalInfo.location} | {personalInfo.email}</p>
        </header>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4 bg-[#001845]">
            <TabsTrigger value="profile" className="data-[state=active]:bg-[#0466C8] data-[state=active]:text-[#001233] text-[#979DAC]">
              <Cpu className="w-5 h-5 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-[#0466C8] data-[state=active]:text-[#001233] text-[#979DAC]">
              <Zap className="w-5 h-5 mr-2" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-[#0466C8] data-[state=active]:text-[#001233] text-[#979DAC]">
              <Briefcase className="w-5 h-5 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="education" className="data-[state=active]:bg-[#0466C8] data-[state=active]:text-[#001233] text-[#979DAC]">
              <GraduationCap className="w-5 h-5 mr-2" />
              Education
            </TabsTrigger>
          </TabsList>
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
                {paginatedSkills.map((skill, index) => (
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
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                    disabled={currentPage === 1}
                    variant="outline"
                    className="text-[#0466C8] border-[#0466C8]"
                  >
                    Previous
                  </Button>
                  <Button 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(skills.length / itemsPerPage)))} 
                    disabled={currentPage === Math.ceil(skills.length / itemsPerPage)}
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
          </TabsContent>
        </Tabs>
        <footer className="text-center border-t border-[#0466C8] pt-4">
          <div className="flex justify-center space-x-4 mb-4">
            <Button variant="outline" size="icon" className="text-[#0466C8] border-[#0466C8]">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="text-[#0466C8] border-[#0466C8]">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" className="text-[#0466C8] border-[#0466C8]">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}