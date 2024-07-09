'use client';
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useWriteContract, useWaitForTransactionReceipt, useAccount , useReadContract} from 'wagmi'
import { contractAddress, contractAbi } from "@/constants";
import { publicClient } from "@/utils/client";
import { parseAbiItem } from "viem";
import CardProject from "../ui/CardProject";


const DisplayAllCardProjects = () => {

  const { toast } = useToast();
  const { address } = useAccount();
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
    <div>
      {projects.map((project, index) => (
        <CardProject key={index} project={project} />
      ))}
    </div>
  )
}

export default DisplayAllCardProjects
