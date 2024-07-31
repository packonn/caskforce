'use client'
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  onClick: () => void
  className?: string
  [key: string]: any
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${className}`}
      {...props}
    >
      {label}
    </button>
  )
}
