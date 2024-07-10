'use client'
import DisplayAllCardProjectsFollowing from "@/components/shared/DisplayAllCardProjectsFollowing";
import NotConnected from "@/components/shared/NotConnected";
import { useAccount } from "wagmi";

const FollowingProject = () => {

  const { isConnected } = useAccount();

  return (
    <div className='w-full min-h-screen p-10'>
      <h1><strong>Following projects</strong></h1>
      {isConnected ? (
        <DisplayAllCardProjectsFollowing />
      ) : (
        <NotConnected message="Please connect your wallet to see your following projects" />
      )}

    </div>
  )
}

export default FollowingProject
