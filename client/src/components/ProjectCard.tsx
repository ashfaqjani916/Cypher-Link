import * as React from "react"
import { useNavigate } from "react-router-dom";

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
  const navigate=useNavigate();
  return (
    <Card className="max-w-[400px] bg-black text-white border-none rounded-xl">
      <CardHeader>
      <img className="h-[200px] w-full rounded-xl object-cover" src={imageSrc} alt="" />
      </CardHeader>
      <CardContent>
      <CardTitle className="text-xl text-[#4acd8d]">{title}</CardTitle>
        <CardDescription><p>{truncatedDescription}</p></CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-between gap-3">
        <div className="w-full">
          <p>Current Funding: ${currentFunding} Goal: ${target} {percentageFunded}% Funded</p>
        </div>
        <div className="flex items-center justify-start w-full gap-3">
          <Button className="bg-black border border-[#4acd8d] text-[#4acd8d]" onClick={()=>navigate(`/campaign-details/${title}`)}>View</Button>
          <Button className="bg-[#4acd8d]">Donate</Button>
        </div>
        <div className="flex items-start justify-center gap-2">
          <img src="/metamask-icon.webp" className="w-5 h-5" alt="" />
          <p className="text-xs text-gray-500"> by 0x72857e5a7c0096f0729041d6DDAc28881....</p>
        </div>
     </CardFooter>
    </Card>
  );
}
