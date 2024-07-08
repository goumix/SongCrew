'use client'
import FormProject from "@/components/shared/FormProject";
import NotConnected from "@/components/shared/NotConnected";
import { useAccount } from "wagmi";

const CreateProject = () => {

  const { isConnected } = useAccount();

  return (
    <div className='w-full p-10'>
      <h1><strong>Create your project</strong></h1>
      {isConnected ? (
        <FormProject />
      ) : (
        <NotConnected message="Please connect your wallet to create a project" />
      )}

    </div>
  )
}

export default CreateProject
