import { UseLoadingContext } from 'app/providers/StoreProvider'
import { MutableRefObject, useEffect, useRef } from 'react'

export const useStickyHeader = (): {
  headerRef: MutableRefObject<HTMLElement>
} => {
  const isLoading = UseLoadingContext()
  let headerState = true
  let lastScroll = 0
  let headerHeight = 0
  const headerRef = useRef(null)

  const setScrollPosition = () =>
    window.pageYOffset || document.documentElement.scrollTop

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (headerRef.current && !isLoading) {
        headerHeight = headerRef.current.offsetHeight
        if (
          setScrollPosition() > lastScroll &&
          headerState &&
          setScrollPosition() > headerHeight
        ) {
          headerRef.current.style.transform = `translateY(-${headerHeight}px)`
          headerState = false
        } else if (setScrollPosition() < lastScroll && !headerState) {
          headerRef.current.style.transform = 'translateY(0px)'
          headerState = true
        }
        lastScroll = window.pageYOffset || document.documentElement.scrollTop
      }
    })
  }, [])

  return { headerRef }
}
