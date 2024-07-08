'use client'
import NotConnected from "@/components/shared/NotConnected";
import { useAccount } from "wagmi";

const FollowingProject = () => {

  const { isConnected } = useAccount();

  return (
    <div className='w-full p-10'>
      <h1><strong>Following projects</strong></h1>
      {isConnected ? (
        <div>
          <p>Connected</p>
        </div>
      ) : (
        <NotConnected message="Please connect your wallet to see your following projects" />
      )}

    </div>
  )
}

export default FollowingProject
