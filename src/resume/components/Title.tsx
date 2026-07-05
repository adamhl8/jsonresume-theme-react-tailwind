interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => (
  <div>
    <h3 className="font-lighter">{title}</h3>
    <div className="bg-secondary mt-1.5 mb-2.5 h-px w-11" />
  </div>
)
