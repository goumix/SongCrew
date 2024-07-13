import { Badge } from "../ui/badge"
import Card from "./Card"

const CardProjectFollowing = ({ project, amount }: any) => {
  return (
    <Card>
      <div className="h-40 flex flex-col justify-around">
        <div className="flex flex-row items-center gap-4">
          <h1><strong>{project.details.title}</strong></h1>
          <Badge>{project.details.genre}</Badge>
        </div>
        <p>Artist : {project.details.artist}</p>
        <p>Description : {project.details.description}</p>
        <p>number of NFTs you own : {amount}</p>
      </div>
    </Card>
  )
}

export default CardProjectFollowing
