import { CardProps } from '@/app/next-types'
import Image from 'next/image'

export const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  onClick,
  className,
  ...rest
}) => {
  return (
    <div
      onClick={onClick}
      className={`max-w-sm rounded overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105 ${className}`}
      {...rest}
    >
      <Image className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  )
}
