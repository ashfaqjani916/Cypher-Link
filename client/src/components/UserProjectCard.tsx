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
        <div className="w-full flex justify-between">
          <p>Current Funding: ${currentFunding}</p>
          <p>{percentageFunded}% Funded</p>
        </div>
      </CardFooter>
    </Card>
  );
}
