"use client"
import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cpu, Zap, Briefcase, GraduationCap, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ProfileTab } from '@/components/tabs/profileTab'
import { SkillsTab } from "@/components/tabs/skillsTab"
import { ProjectsTab } from "@/components/tabs/projectsTab"
import { EducationTab } from "@/components/tabs/educationTab"
import { TwitterLogoIcon } from '@radix-ui/react-icons'
import { PersonalInfo, Skill, Project, Education, PageState } from '@/lib/types/types'



const personalInfo: PersonalInfo = {
  name: "Ian Mukua",
  title: "Software Developer",
  email: "ianmukuaa@gmail.com",
  location: "Nairobi, Kenya",
  summary: "Experienced Full Stack Developer with a passion for creating efficient, scalable, and innovative web applications. Skilled in both front-end and back-end technologies, with a strong focus on user experience and performance optimization. I excel in building responsive, intuitive user interfaces and robust server-side systems that ensure seamless interactions and reliability. With extensive experience in cloud technologies, particularly AWS (Amazon Web Services), I have expertise in deploying and managing applications in cloud environments."
}

const skills: Skill[] = [
  { name: "Typescript", level: 90, icon: Zap },
  { name: "Python", level: 85, icon: Zap },
  { name: "Javascript", level: 85, icon: Zap },
  { name: "NextJs", level: 90, icon: Zap },
  { name: "NestJs", level: 91, icon: Zap },
  { name: "Django", level: 71, icon: Zap },
  { name: "React", level: 72, icon: Zap },
  { name: "AWS", level: 90, icon: Zap },
  { name: "Docker", level: 92, icon: Zap },
  { name: "GraphQL", level: 90, icon: Zap },
  { name: "Rest", level: 90, icon: Zap },
]

const projects: Project[] = [
  {
    title: "NoteNest",
    description: "Developed a full-featured journaling platform with real-time inventory management and secure payment processing.",
    image: "/notenest.png",
    liveLink: "https://notenestd.vercel.app/",
    technologies: ["NextJs", "NestJs", "Postgresql", "Jest"]
  },
  {
    title: "Anonymate",
    description: "Mental health plaform centered on anonymity of users.",
    image: "/anonymate.jpg",
    liveLink: "https://github.com/Imukua/anonymous-mate",
    technologies: ["NextJs", "MongoDb", "Clerk"]
  },
  {
    title: "NoteNest API",
    description: "Journal taking API with CRUD operations, enhanced filtering and User Auth service",
    image: "/notenest-backend.jpg",
    liveLink: "https://notenest-backend-prod.vercel.app/",
    technologies: ["NestJs", "Vercel", "Postgresql"]
  }
]

const education: Education[] = [
  {
    degree: "Bachelor of Science in Biotechnology ",
    institution: "University of Nairobi",
    year: "2022"
  },
  {
    degree: "Software Engeenering Bootcamp",
    institution: "ALX School",
    year: "2023"
  },
  {
    degree: "AWS Cloud Practitioner",
    institution: "AWS Restart, Ajira",
    year: "2023"
  }
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('profile')
  const [currentPage, setCurrentPage] = useState<PageState>({
    skills: 1,
    projects: 1,
    education: 1,
  })

  const itemsPerPage = 3
  const itemsPerPageEdu = 2

  const paginateData = <T,>(data: T[], page: number): T[] => {
    const startIndex = (page - 1) * itemsPerPage
    return data.slice(startIndex, startIndex + itemsPerPage)
  }
  const paginateDataEdu = <T,>(data: T[], page: number): T[] => {
    const startIndex = (page - 1) * itemsPerPageEdu
    return data.slice(startIndex, startIndex + itemsPerPageEdu)
  }

  const updatePage = (section: keyof PageState, newPage: number) => {
    setCurrentPage(prev => ({ ...prev, [section]: newPage }))
  }


  const pageCount = (data: Skill[] | Project[]): number => Math.ceil(data.length / itemsPerPage)
  const pageCountEdu = (data: Education[]): number => Math.ceil(data.length / itemsPerPageEdu)

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
          <ProfileTab personalInfo={personalInfo} />
          <SkillsTab 
            skills={skills}
            currentPage={currentPage}
            updatePage={updatePage}
            pageCount={pageCount}
            paginateData={paginateData}
          />
          <ProjectsTab 
            projects={projects}
            currentPage={currentPage}
            updatePage={updatePage}
          />
          <EducationTab 
            education={education}
            currentPage={currentPage}
            updatePage={updatePage}
            pageCount={pageCountEdu}
            paginateData={paginateDataEdu}
          />
        </Tabs>
        <footer className="text-center border-t border-[#0466C8] pt-4">
          <div className="flex justify-center space-x-4 mb-4">
            {[
              { Icon: Github, color: '#6e5494', link: 'https://github.com/Imukua' },
              { Icon: Linkedin, color: '#0077b5', link: 'https://www.linkedin.com/in/ian-mukua-b78484261' },
              { Icon: Mail, color: '#D44638', link: 'mailto:ianmukuaa@gmail.com' },
              { Icon: TwitterLogoIcon, color: '#0077b5', link: 'x.com/imukua' }
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
      `}</style>
    </div>
  )
}
