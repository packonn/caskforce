'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../contexts/LanguageContext'

interface NavigationItem {
  id: string
  link: Link
}

type Link = CustomLink | ReferenceLink

interface CustomLink {
  type: 'custom'
  newTab: boolean
  url: string
  label_fr: string
  label_en: string
}

interface ReferenceLink {
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

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navigations, setNavigations] = useState<NavigationItem[]>([])
  const { lang, setLang } = useLanguage()

  const fetchHeaderNav = async () => {
    const res = await fetch('/api/globals/header')
    const data = await res.json()

    setNavigations(data.navItems)
  }

  useEffect(() => {
    fetchHeaderNav()
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              width={100}
              height={100}
              alt=""
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigations?.map((item) => (
            <a
              key={item.id}
              href={item.link.url}
              className="text-sm font-semibold leading-6 text-white"
            >
              {lang === 'fr' ? item.link.label_fr : item.link.label_en}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                width={100}
                height={100}
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigations?.map((item) => (
                  <a
                    key={item.id}
                    href={item.link.url}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {lang === 'fr' ? item.link.label_fr : item.link.label_en}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <button
        className="text-white bg-red-800 rounded-full w-10 h-10"
        onClick={() => {
          if (lang === 'fr') setLang('en')
          else setLang('fr')
        }}
      >
        {lang}
      </button>
    </header>
  )
}
