'use client'
import FormIncome from "@/components/shared/FormIncome";
import NotConnected from "@/components/shared/NotConnected";
import { useAccount } from "wagmi";

const StreamsIncome = () => {

  const { isConnected } = useAccount();

  return (
    <div className='w-full min-h-screen p-10'>
      <h1><strong>Streams income</strong></h1>
      {isConnected ? (
        <FormIncome />
      ) : (
        <NotConnected message="Please connect your wallet to disburse payment to the artist" />
      )}

    </div>
  )
}

export default StreamsIncome
