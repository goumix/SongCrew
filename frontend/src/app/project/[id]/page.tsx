const Project = ({ params }: { params: { id: string }}) => {
  return (
    <div className='w-full min-h-screen p-10'>
      <h1><strong>Project</strong></h1>
      <p>Id : {params.id}</p>
    </div>
  )
}

export default Project
