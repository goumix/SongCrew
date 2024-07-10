'use client';
import { useState, useEffect } from "react";
import { contractAddress, contractAbi } from "@/constants";
import { publicClient } from "@/utils/client";
import { parseAbiItem } from "viem";
import CardProjectFollowing from "../ui/CardProjectFollowing";


const DisplayAllCardProjectsFollowing = () => {
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
          <CardProjectFollowing project={project} />
        </div>
      ))}
    </div>
  )
}

export default DisplayAllCardProjectsFollowing
