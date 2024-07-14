'use client'
import { Input } from "../ui/Input"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { contractAbi, contractAddress } from "@/constants"
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { useToast } from "../ui/toaster"
import { Slider } from "../ui/slider"

const categories: string[] = [
  "Pop",
  "Rock",
  "Hip-Hop/Rap",
  "Jazz",
  "Classical",
  "Electronic",
  "R&B/Soul",
  "Country",
  "Reggae",
  "Blues"
]

const FormProject = () => {

  const { address } = useAccount();

  const [projectArtist, setProjectArtist] = useState<string>("");
  const [idSacem, setIdSacem] = useState<string>("");
  const [projectTitle, setProjectTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(1);
  const [amount, setAmount] = useState<number>(25);

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const { toast } = useToast();

  const handleSubmit = async () => {
    if (projectArtist || idSacem || projectTitle || genre || projectDescription || price || amount) {
      writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'createProject',
        account: address,
        args: [projectArtist, idSacem, projectTitle, genre, projectDescription, price, amount]
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
    if (isPending) {
      toast({
        title: "Transaction pending",
        description: "Your transaction is pending",
        className: 'bg-yellow-500'
      });
    }
    if (isSuccess) {
      toast({
          title: "Project created",
          description: "Your project has been created successfully",
          className: 'bg-sky-500'
      });
      setProjectArtist('');
      setIdSacem('');
      setProjectTitle('');
      setGenre('');
      setProjectDescription('');
      setPrice(1);
      setAmount(25);
    }
  }, [isSuccess, isPending, toast])

  return (
    <div className="h-screen flex flex-row mt-8">
      <div className="w-1/2 flex flex-col gap-4">
        <p>Artist :</p>
        <Input type="text" placeholder="Project name" onChange={(e) => setProjectArtist(e.target.value)} />
        <p>Id SACEM :</p>
        <Input type="text" placeholder="Id SACEM" onChange={(e) => setIdSacem(e.target.value)} />
        <p>Project title :</p>
        <Input type="text" placeholder="Project title" onChange={(e) => setProjectTitle(e.target.value)} />
        <p>Genre :</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <div
            key={index}
            className={`w-auto border py-1 px-2 rounded cursor-pointer ${genre === category ? 'border-sky-500' : 'border-white'}`}
            onClick={() => setGenre(category)}
          >
            <p className={`${genre === category ? 'text-sky-500' : 'text-white'}`}>{category}</p>
          </div>
          ))}
        </div>
        <p>Project description :</p>
        <Input type="text" placeholder="Project description" onChange={(e) => setProjectDescription(e.target.value)} />
        <p>Price : {price} ETH</p>
        <Slider defaultValue={[1]} max={16} min={1} step={1} className="py-2" onValueChange={(e) => setPrice(e)}/>
        <div className="flex flex-row justify-between">
          <p>How much copyright would you like to transfer ?</p>
          <p>{amount}% of copyright for {amount} NTFs</p>
        </div>
        <Slider defaultValue={[25]} max={49} min={1} step={1} className="py-2" onValueChange={(e) => setAmount(e)}/>
        <p>Price of an NFT : {price / amount} ETH</p>
        <Button disabled={isPending || !projectArtist || !idSacem || !projectTitle || !genre || !projectDescription || !price || !amount} onClick={handleSubmit}>Create project</Button>
      </div>
      <div className="w-1/2"></div>
    </div>
  )
}

export default FormProject
