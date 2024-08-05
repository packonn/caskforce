import { InputProps } from '@/app/next-types'

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className={` ${className}`} {...rest}>
      <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="relative mt-2">
        <input
          type={type}
          id={label}
          name={label}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-indigo-600"
        />
      </div>
    </div>
  )
}
