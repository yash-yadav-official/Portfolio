import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TabsContent } from '@/components/ui/tabs'
import { ProfileTabProps } from '@/lib/types/types'

export function ProfileTab({ personalInfo }: ProfileTabProps) {
  return (
    <TabsContent value="profile">
      <Card className="bg-[#001845] border-[#0466C8] h-[300px] ">
        <CardHeader className="pb-2 sm:pb-4">
          <CardTitle className="text-xl sm:text-2xl md:text-3xl text-[#0466C8]">Professional Summary</CardTitle>
        </CardHeader>
        <CardContent className="text-[#979DAC] pt-0 h-[calc(100%-4rem)] sm:h-[calc(100%-5rem)]">
          <div className="overflow-y-auto h-full pr-2">
            <p className="text-sm sm:text-base">{personalInfo.summary}</p>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  )
}