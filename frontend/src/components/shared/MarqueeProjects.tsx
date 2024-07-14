'use client';
import { useState, useEffect } from "react";
import { contractAddress, contractAbi } from "@/constants";
import { publicClient } from "@/utils/client";
import { parseAbiItem } from "viem";
import Marquee from "@/components/magicui/marquee";
import CardProject from "../ui/CardProject";

export function MarqueeDemo() {
  const [projects, setProjects] = useState<any[]>([]);

  const getProjects = async () => {
    const depositEvents = await publicClient.getLogs({
      address: contractAddress,
      event: parseAbiItem('event ProjectCreated(uint256 id, address addressArtist, string artist, string idSACEM, string title, string genre, string description, uint256 priceProject, uint256 numberOfCopies, uint256 priceNft)'),
      fromBlock: BigInt(0),
      toBlock: 'latest'
    });

    const eventsWithDetails = await Promise.all(depositEvents.map(async (event) => {
      const data = await publicClient.readContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: 'getOneProject',
        args: [event.args.id]
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

  const firstRow = projects.slice(0, projects.length / 2);

  return (
    <div className="absolute top-full flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-slate-800">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((project, index) => (
          <CardProject key={index} {...project} project={project} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-slate-800"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-slate-800"></div>
    </div>
  );
}
