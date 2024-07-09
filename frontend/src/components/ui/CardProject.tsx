import { Badge } from "../ui/badge"
import Card from "./Card"

const CardProject = ({ project }: any) => {
  return (
    <Card>
      <div>
        <div className="flex flex-row items-center gap-6">
          <h1><strong>{project.details.title}</strong></h1>
          <Badge>{project.details.genre}</Badge>
        </div>
        <p>Artist : {project.details.artist}</p>
        <p>Description : {project.details.description}</p>
        <p>Number of NFTs remaining : {Number(project.details.numberOfCopies)}</p>
      </div>
    </Card>
  )
}

export default CardProject
