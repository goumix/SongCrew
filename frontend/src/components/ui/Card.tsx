type CardProps = {
  children: React.ReactNode;
  lgPadding?: boolean;
};

const Card = ({ children, lgPadding }: CardProps) => {

  const paddingClass = lgPadding ? 'p-6' : 'py-2 px-4';

  return (
    <div className={`border rounded-md bg-opacity-5 bg-white ${paddingClass}`}>
      {children}
    </div>
  )
}

export default Card
