import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Award, Briefcase, GraduationCap, Code, Zap, Star, Shield, Database, Layout, Server, Cpu } from "lucide-react"

export default function Component() {
  const [activeTab, setActiveTab] = useState('profile')
  const [systemStatus, setSystemStatus] = useState('Initializing...')

  useEffect(() => {
    const timer = setTimeout(() => {
      setSystemStatus('System Online')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <div className="max-w-4xl mx-auto border border-green-400 p-8 rounded-lg shadow-lg shadow-green-400/20">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2 glitch" data-text="Ian Mukua">Ian Mukua</h1>
          <p className="text-2xl mb-4">Netrunner | Code Architect | Digital Revolutionist</p>
          <div className="flex justify-center items-center space-x-4">
            <Badge variant="outline" className="text-lg py-1 px-3 border-green-400">
              System Status: {systemStatus}
            </Badge>
            <Progress value={100} className="w-64 h-2 bg-green-900" />
          </div>
        </header>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-4 bg-green-900">
            <TabsTrigger value="profile" className="data-[state=active]:bg-green-400 data-[state=active]:text-black">
              <Cpu className="w-5 h-5 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-green-400 data-[state=active]:text-black">
              <Zap className="w-5 h-5 mr-2" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="data-[state=active]:bg-green-400 data-[state=active]:text-black">
              <Code className="w-5 h-5 mr-2" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="network" className="data-[state=active]:bg-green-400 data-[state=active]:text-black">
              <Server className="w-5 h-5 mr-2" />
              Network
            </TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card className="bg-black border-green-400">
              <CardHeader>
                <CardTitle className="text-2xl">Netrunner Profile</CardTitle>
                <CardDescription>Core system specifications and enhancements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>OS:</span>
                  <Badge variant="outline">NeuroLink v7.5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Processor:</span>
                  <Badge variant="outline">Quantum Core i9</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Memory:</span>
                  <Badge variant="outline">128 TB Neural RAM</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Storage:</span>
                  <Badge variant="outline">1 PB Holographic Drive</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span>Network:</span>
                  <Badge variant="outline">Hyperspeed Neuro-Fiber</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="skills">
            <Card className="bg-black border-green-400">
              <CardHeader>
                <CardTitle className="text-2xl">Tech Augmentations</CardTitle>
                <CardDescription>Installed cybernetic enhancements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg flex items-center">
                      <Server className="mr-2" /> Neural Cloud Interface
                    </span>
                    <Badge variant="outline">Level 5</Badge>
                  </div>
                  <Progress value={100} className="h-2 bg-green-900" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg flex items-center">
                      <Code className="mr-2" /> Cybernetic Coding Implant
                    </span>
                    <Badge variant="outline">Level 4</Badge>
                  </div>
                  <Progress value={80} className="h-2 bg-green-900" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg flex items-center">
                      <Database className="mr-2" /> Quantum Data Processor
                    </span>
                    <Badge variant="outline">Level 3</Badge>
                  </div>
                  <Progress value={60} className="h-2 bg-green-900" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg flex items-center">
                      <Shield className="mr-2" /> Firewall Neuromods
                    </span>
                    <Badge variant="outline">Level 4</Badge>
                  </div>
                  <Progress value={80} className="h-2 bg-green-900" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="projects">
            <Card className="bg-black border-green-400">
              <CardHeader>
                <CardTitle className="text-2xl">Digital Heists</CardTitle>
                <CardDescription>High-profile tech operations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="text-lg py-1 px-3">
                    Legendary
                  </Badge>
                  <div>
                    <h3 className="text-xl font-semibold">Project Nexus</h3>
                    <p className="text-green-600">Infiltrated and optimized megacorp mainframe</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="text-lg py-1 px-3">
                    Epic
                  </Badge>
                  <div>
                    <h3 className="text-xl font-semibold">Operation Ghostwire</h3>
                    <p className="text-green-600">Developed untraceable communication network</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="outline" className="text-lg py-1 px-3">
                    Rare
                  </Badge>
                  <div>
                    <h3 className="text-xl font-semibold">Cipher Breakout</h3>
                    <p className="text-green-600">Cracked unhackable encryption in record time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="network">
            <Card className="bg-black border-green-400">
              <CardHeader>
                <CardTitle className="text-2xl">Neural Network</CardTitle>
                <CardDescription>Secure communication channels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Github className="mr-2 h-4 w-4" /> GitHub Nexus
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Linkedin className="mr-2 h-4 w-4" /> NeoLinked
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="mr-2 h-4 w-4" /> Encrypted Comms
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <footer className="text-center border-t border-green-400 pt-4">
          <p className="text-lg">
            "The code is mightier than the sword." - Netrunner's Creed
          </p>
        </footer>
      </div>
      <style jsx>{`
        .glitch {
          position: relative;
        }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(24px, 550px, 90px, 0);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim 2.5s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim {
          0% {
            clip: rect(10px, 9999px, 95px, 0);
          }
          25% {
            clip: rect(85px, 9999px, 155px, 0);
          }
          50% {
            clip: rect(35px, 9999px, 185px, 0);
          }
          75% {
            clip: rect(75px, 9999px, 145px, 0);
          }
          100% {
            clip: rect(15px, 9999px, 105px, 0);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(65px, 9999px, 200px, 0);
          }
          25% {
            clip: rect(25px, 9999px, 80px, 0);
          }
          50% {
            clip: rect(85px, 9999px, 135px, 0);
          }
          75% {
            clip: rect(15px, 9999px, 95px, 0);
          }
          100% {
            clip: rect(45px, 9999px, 210px, 0);
          }
        }
      `}</style>
    </div>
  )
}