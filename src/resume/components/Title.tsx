interface TitleProps {
  title: string
}

export function Title({ title }: TitleProps) {
  return (
    <div>
      <h3 className="font-lighter">{title}</h3>
      <div className="mt-1.5 mb-2.5 h-px w-11 bg-secondary" />
    </div>
  )
}
