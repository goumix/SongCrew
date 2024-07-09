'use client'
import { Input } from "../ui/Input"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { contractAbi, contractAddress } from "@/constants"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { parseAbiItem } from "viem"
import { publicClient } from "@/utils/client"
import { useToast } from "../ui/toaster"
import { write } from "fs"

const FormProject = () => {

  const { address } = useAccount();

  const [projectArtist, setProjectArtist] = useState<string>("");
  const [idSacem, setIdSacem] = useState<string>("");
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const { toast } = useToast();

  const handleSubmit = async () => {
    if (projectArtist || idSacem || projectTitle || genre || projectDescription || amount) {
      writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'createProject',
        account: address,
        args: [projectArtist, idSacem, projectTitle, genre, projectDescription, amount]
      })
    } else {
      toast({
        title: "Error",
        description: "Please enter a correct address",
        className: 'bg-red-600'
      })
    }
  }

  const { isLoading: isConfirming, isSuccess, error: errorConfirming } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isSuccess) {
      setProjectArtist('');
      setIdSacem('');
      setProjectTitle('');
      setGenre('');
      setProjectDescription('');
      setAmount(0);
      toast({
          title: "transaction validated",
          description: "addres  added to whitelist",
          className: 'bg-green-600'
      });
    }
  }, [isSuccess, toast])

  return (
    <div className="h-screen flex flex-row mt-8">
      <div className="w-1/2 flex flex-col gap-4">
        <p>Artist :</p>
        <Input type="text" placeholder="Project name" onChange={(e) => setProjectArtist(e.target.value)} />
        <p>Id SACEM :</p>
        <Input type="text" placeholder="Id SACEM" onChange={(e) => setIdSacem(e.target.value)} />
        <p>Project title :</p>
        <Input type="text" placeholder="Project title" onChange={(e) => setProjectTitle(e.target.value)} />
        {/* faire des categories */}
        <p>Genre :</p>
        <Input type="text" placeholder="Genre" onChange={(e) => setGenre(e.target.value)} />
        <p>Project description :</p>
        <Input type="text" placeholder="Project description" onChange={(e) => setProjectDescription(e.target.value)} />
        <p>How much copyright would you like to transfer ?</p>
        <Input type="number" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <Button disabled={isPending} onClick={handleSubmit}>Create project</Button>
      </div>
      <div className="w-1/2"></div>
    </div>
  )
}

export default FormProject
