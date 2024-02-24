import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface CrowdfundingProject {
  title: string;
  description: string;
  imageSrc: string;
  target: number;
  currentFunding: number;
}

export function ProjectCard({ title, description, imageSrc, target, currentFunding }: CrowdfundingProject) {
  const percentageFunded = (currentFunding / target) * 100;
  const truncatedDescription = description.length > 50 ? description.substring(0, 50) + '...' : description;
  
  return (
    <Card className="w-[350px] bg-black text-white">
      <CardHeader>
        <CardTitle className="text-xl text-[#4acd8d]">{title}</CardTitle>
        <CardDescription><p>{truncatedDescription}</p></CardDescription>
      </CardHeader>
      <CardContent>
        <img className="h-[200px] w-full rounded-xl" src={imageSrc} alt="" />
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-between gap-3">
        <div className="w-full">
          <p>Current Funding: ${currentFunding} Goal: ${target} {percentageFunded}% Funded</p>
        </div>
        <div className="flex items-center justify-start w-full gap-3">
          <Button className="bg-black border border-[#4acd8d] text-[#4acd8d]">View</Button>
          <Button className="bg-[#4acd8d]">Donate</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
