import Image from 'next/image'
import Link from 'next/link'
import Card from './Card'

type CardAdvisorProps = {
  name: string
  role: string
  image: string
  link: string
};

const CardAdvisor = ({ name, role, image, link }: CardAdvisorProps) => {
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <Card>
        <div className="flex flex-col justify-start gap-2">
          <div className="flex flex-row gap-2">
            <Image src={image} alt="Goumix" width={25} height={25} className="rounded-full aspect-square" />
            <p className="text-center">@{name}</p>
          </div>
          <p>{role}</p>
        </div>
      </Card>
    </Link>
  )
}

export default CardAdvisor
