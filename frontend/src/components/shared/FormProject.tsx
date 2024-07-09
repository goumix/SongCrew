import { Input } from "../ui/Input"

const FormProject = () => {
  return (
    <div className="h-screen flex flex-row mt-8">
      <div className="w-1/2 flex flex-col gap-4">
        <p>Artist :</p>
        <Input type="text" placeholder="Project name" />
        <p>Id SACEM :</p>
        <Input type="text" placeholder="Id SACEM" />
        <p>Project title :</p>
        <Input type="text" placeholder="Project title" />
        {/* faire des categories */}
        <p>Genre :</p>
        <Input type="text" placeholder="Genre" />
        <p>Project description :</p>
        <Input type="text" placeholder="Project description" />
        <p>How much copyright would you like to transfer ?</p>
        <Input type="number" placeholder="Amount" />
      </div>
      <div className="w-1/2"></div>
    </div>
  )
}

export default FormProject
