type NotConnectedProps = {
  message: string
}

const NotConnected = ({ message }: NotConnectedProps) => {
  return (
    <div className="h-screen flex flex-col items-center pt-36">
      <h1 className="text-3xl font-bold">Not connected</h1>
      <p>{message}</p>
    </div>
  )
}

export default NotConnected
