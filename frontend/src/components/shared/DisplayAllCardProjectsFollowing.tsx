'use client';
import { useState, useEffect } from "react";
import { contractAddress, contractAbi } from "@/constants";
import { publicClient } from "@/utils/client";
import { parseAbiItem } from "viem";
import CardProjectFollowing from "../ui/CardProjectFollowing";
import { useAccount } from "wagmi";


const DisplayAllCardProjectsFollowing = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [balanceSender, setBalanceSender] = useState<any[]>([]);

  const { address } = useAccount();

  const getProjects = async () => {
    const getBalanceSender = await publicClient.readContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: 'getBalanceOfAllProjectsForTheSender',
      account: address
    });
    setBalanceSender(getBalanceSender);
    console.log(getBalanceSender);

    const projectSender = await Promise.all(getBalanceSender.map(async (project: any, index: number) => {
      if (Number(project) !== 0) {
        const data = await publicClient.readContract({
          abi: contractAbi,
          address: contractAddress,
          functionName: 'getOneProject',
          args: [index]
        });
        return {
          ...project,
          details: data
        };
      }
    }));

    setProjects(projectSender.filter((project: any) => project !== undefined));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-wrap justify-start gap-4 mt-6">
      {projects.length === 0 && <p>You are not following any project</p>}
      {projects.map((project, index) => (
        <div key={index} className="w-[32%]">
          <CardProjectFollowing project={project} amount={Number(balanceSender[index])} />
        </div>
      ))}
    </div>
  )
}

export default DisplayAllCardProjectsFollowing
