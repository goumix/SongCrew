'use client'
import { publicClient } from '@/utils/client'
import { useState, useEffect } from "react"
import { contractAddress, contractAbi } from "@/constants";

const Project = ({ params }: { params: { id: string }}) => {

  const [project, setProject] = useState<any>(null);

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
    <div className='w-full min-h-screen p-10'>
      <h1><strong>Project</strong></h1>
      <p>Name : {project?.title}</p>
    </div>
  )
}

export default Project
