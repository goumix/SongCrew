'use client';
import { useState, useEffect } from "react";
import { contractAddress, contractAbi } from "@/constants";
import { publicClient } from "@/utils/client";
import { parseAbiItem } from "viem";
import CardProject from "../ui/CardProject";


const DisplayAllCardProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  const getProjects = async () => {
    const depositEvents = await publicClient.getLogs({
      address: contractAddress,
      event: parseAbiItem('event ProjectCreatedNumber(uint256 projectId)'),
      fromBlock: 0n,
      toBlock: 'latest'
    });

    const eventsWithDetails = await Promise.all(depositEvents.map(async (event) => {
      const data = await publicClient.readContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: 'getOneProject',
        args: [event.args.projectId]
      });
      return {
        ...event,
        details: data
      };
    }));

    setProjects(eventsWithDetails);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="flex flex-wrap justify-start gap-4 mt-6">
      {projects.map((project, index) => (
        <div key={index} className="w-[32%]">
          <CardProject id={index} project={project} />
        </div>
      ))}
    </div>
  )
}

export default DisplayAllCardProjects
