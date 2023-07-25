interface ContianerProps {
  children: React.ReactNode
}

const Container: React.FC<ContianerProps> = ({ children }) => {
  return (
    <div
      className="
        mx-auto
        xl:px-20
        md:px-10
        px-4
      "
    >
      {children}
    </div>
  )
}

export default Container
