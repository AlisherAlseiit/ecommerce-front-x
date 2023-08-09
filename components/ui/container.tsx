interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div className="mx-auto max-x-7xl">
      {children}
    </div>
  )
}

export default Container