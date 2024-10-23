import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { ProfileTabProps } from '@/lib/types/types'


export function ProfileTab({ personalInfo }: ProfileTabProps) {
  return (
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
  )
}