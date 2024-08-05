export interface NavigationProps {
  navigations: NavigationItem[]
}
export interface NavigationItem {
  id: string
  link: Link
}

type Link = CustomLink | ReferenceLink

export interface CustomLink {
  type: 'custom'
  newTab: boolean
  url: string
  label_fr: string
  label_en: string
}

export interface ReferenceLink {
  type: 'reference'
  newTab: boolean | null
  reference: {
    relationTo: string
    value: {
      id: number
      title: string
      content: string
      media: number
      updatedAt: string
      createdAt: string
    }
  }
  url: string
  label_fr: string
  label_en: string
}

export interface CardProps {
  title: string
  description: string
  imageUrl: string
  onClick?: () => void
  className?: string
  [key: string]: any
}
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  onClick: () => void
  className?: string
  [key: string]: any
}
export interface InputProps {
  label: string
  type?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  [key: string]: any
}
