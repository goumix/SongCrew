/* eslint-disable react/no-unescaped-entities */
'use client'
import { publicClient } from '@/utils/client'
import { useState, useEffect } from "react"
import { contractAddress, contractAbi } from "@/constants";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { useToast } from "@/components/ui/toaster"
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

const Project = ({ params }: { params: { id: string }}) => {

  const { address } = useAccount();

  const [project, setProject] = useState<any>(null);
  const [amount, setAmount] = useState<number>(1);

  const { toast } = useToast();

  const getProject = async () => {
    const set = await publicClient.readContract({
      abi: contractAbi,
      address: contractAddress,
      functionName: 'getOneProject',
      args: [params.id]
    });
    setProject(set);
  }

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const handleBuy = async () => {
    console.log(amount, Number(project?.numberOfCopies))
    if (amount <= Number(project?.numberOfCopies)) {
      writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'buyNft',
        account: address,
        args: [params.id, amount]
      })
    } else {
      toast({
        title: "Error",
        description: "Please select a valid amount of NFTs to purchase",
        className: 'bg-red-600'
      })
    }
  }

  const { isLoading: isConfirming, isSuccess, error: errorConfirming } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    getProject();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      toast({
          title: "Project purchased",
          description: "Your project has been purchased successfully",
          className: 'bg-sky-500'
      });
      setAmount(1);
      getProject();
    }
  }, [isSuccess, toast])

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
          {(Number(project?.numberOfCopies) === 0) ?
            <p><strong>Project is sold out</strong></p>
          : (
            <>
              <p><strong>Number of NFTs remaining :</strong> {Number(project?.numberOfCopies)}</p>
              <p>Support the project by purchasing <strong>{amount}</strong> NFTs for <strong>{amount}</strong> of the artist's royalties</p>
              <div className='w-3/4 flex flex-row justify-around gap-4'>
                <Slider defaultValue={[1]} max={Number(project?.numberOfCopies)} min={1} step={1} className="py-2" onValueChange={(e) => setAmount(e[0])}/>
                <Button onClick={handleBuy}>Buy</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
