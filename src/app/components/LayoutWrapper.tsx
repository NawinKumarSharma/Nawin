"use client"
import { useState } from 'react'
import { MAIN_CONTENT_MIN_HEIGHT } from '../../../constant'
import { Footer } from './Footer'
import { Header } from './Header/Header'
import { MobileNav } from './MobileNav/MobileNav'

export function LayoutWrapper({ children }:any) {
  let [navShow, setNavShow] = useState(false)
  let onToggleNav = () => setNavShow((status) => !status)

  return (
    <>
      <MobileNav navShow={navShow} onToggleNav={onToggleNav} />
      <Header onToggleNav={onToggleNav} />
      <div className="mx-auto max-w-3xl px-3 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex flex-col justify-between">
          <main style={{ minHeight: MAIN_CONTENT_MIN_HEIGHT }}>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}