'use client'
import { Input } from "../ui/Input"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { contractAbi, contractAddress } from "@/constants"
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { useToast } from "../ui/toaster"

const FormIncome = () => {

  const { address } = useAccount();

  const [idSacem, setIdSacem] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const { data: hash, isPending, error, writeContract } = useWriteContract();

  const { toast } = useToast();

  const handleSubmit = async () => {
    if (idSacem || price) {
      writeContract({
        address: contractAddress,
        abi: contractAbi,
        functionName: 'payInvestors',
        account: address,
        args: [idSacem],
        value: BigInt(price * 10**18),
        gas: BigInt(1000000)
      })
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid Id SACEM and price",
        className: 'bg-red-600'
      })
    }
  }

  const { isLoading: isConfirming, isSuccess, error: errorConfirming } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (isPending) {
      toast({
        title: "Processing",
        description: "Your transaction is being processed",
        className: 'bg-sky-500'
      });
    }
    if (isSuccess) {
      toast({
          title: "Artist paid",
          description: "The artist has been paid",
          className: 'bg-sky-500'
      });
      setIdSacem('');
      setPrice(0);
    }
  }, [isSuccess, isPending, toast])

  return (
    <div className="h-screen flex flex-row mt-8">
      <div className="w-1/2 flex flex-col gap-4">
        <p>Id SACEM :</p>
        <Input type="text" placeholder="Id SACEM" onChange={(e) => setIdSacem(e.target.value)} />
        <p>Price : {price} ETH</p>
        <Input type="number" placeholder="Price" onChange={(e) => setPrice(Number(e.target.value))} />
        <Button disabled={isPending} onClick={handleSubmit}>Create project</Button>
      </div>
      <div className="w-1/2"></div>
    </div>
  )
}

export default FormIncome
