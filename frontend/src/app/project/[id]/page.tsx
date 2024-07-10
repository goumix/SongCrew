/* eslint-disable react/no-unescaped-entities */
'use client'
import { publicClient } from '@/utils/client'
import { useState, useEffect } from "react"
import { contractAddress, contractAbi } from "@/constants";
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Project = ({ params }: { params: { id: string }}) => {

  const [project, setProject] = useState<any>(null);
  const [amount, setAmount] = useState<number>(1);

  const getProject = async () => {
    const set = await publicClient.readContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: 'getOneProject',
      args: [params.id]
    });
    setProject(set);
  }

  useEffect(() => {
    getProject();
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col p-10'>
      <h1><strong>Project</strong></h1>
      <div className='w-full flex flex-row'>
        <div className='w-1/2 mt-6'></div>
        <div className='w-1/2 h-screen flex flex-col justify-center gap-4 pb-40'>
          <div className="flex flex-row items-center gap-6">
            <h1><strong>{project?.title}</strong></h1>
            <Badge>{project?.genre}</Badge>
          </div>
          <p><strong>Artist :</strong> {project?.artist}</p>
          <p><strong>Description :</strong> {project?.description}</p>
          <p><strong>Number of NFTs remaining :</strong> {Number(project?.numberOfCopies)}</p>
          <p>Support the project by purchasing <strong>{amount}</strong> NFTs for <strong>{amount}</strong> of the artist's royalties</p>
          <div className='w-3/4 flex flex-row justify-around gap-4'>
            <Slider defaultValue={[1]} max={Number(project?.numberOfCopies)} min={1} step={1} className="py-2" onValueChange={(e) => setAmount(e)}/>
            <Button>Buy</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
