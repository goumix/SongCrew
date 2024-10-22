import Link from "next/link"
import { Badge } from "../ui/badge"
import Card from "./Card"

const CardProject = ({ project }: any) => {
  return (
    <Link href={`/project/${project.details.id}`}>
      <Card>
        <div className="h-40 flex flex-col justify-around">
          <div className="flex flex-row items-center gap-4">
            <h1><strong>{project.details.title}</strong></h1>
            <Badge>{project.details.genre}</Badge>
          </div>
          <p>Artist : {project.details.artist}</p>
          <p>Description : {project.details.description}</p>
          {(Number(project.details.numberOfCopies) === 0) ?
            <p><strong>Project sold out</strong></p> :
            <p>Number of NFTs remaining : {Number(project.details.numberOfCopies)}</p>
          }
        </div>
      </Card>
    </Link>
  )
}

export default CardProject
