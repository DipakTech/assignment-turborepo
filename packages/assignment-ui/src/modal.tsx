export function Modal({
  children,
  title,
}: {
  children: React.ReactNode
  title: String
}): JSX.Element {
  return (
    <div className='w-[395px] flex items-start justify-start bg-white rounded-md p-10 shadow-[60px_60px_32px_5px_rgba(162,37,92,0.20)] min-h-[300px] flex-col'>
      <h1 className='text-2xl font-semibold mb-10'>{title}</h1>
      {children}
    </div>
  )
}
