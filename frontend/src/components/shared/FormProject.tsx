import { Input } from "../ui/Input"

const FormProject = () => {
  return (
    <div className="h-screen flex flex-col gap-4 mt-8">
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
  )
}

export default FormProject
