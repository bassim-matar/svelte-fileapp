import Navigo from 'navigo'
import { UrlParam } from '../url'
import { page } from './router-store'

const staticRender = 'static_render'
const httpProtocol = 'http'
const mailtoProtocol = 'mailto'

export const router = new Navigo('/', {
  hash: UrlParam.getAppMode() !== staticRender,
}) as Navigo & { incrementReload?: () => void }

let pageValue = ''
page.subscribe(value => (pageValue = value))

declare global {
  interface Window {
    goToHref: (event: MouseEvent, href: string) => void
  }
}

window.goToHref = (event: MouseEvent, href: string) => {
  if (event.ctrlKey || event.metaKey) return
  event.preventDefault()

  if (
    !href.startsWith(httpProtocol) &&
    !href.startsWith(mailtoProtocol) &&
    pageValue === href.split('?')[0]
  ) {
    router.navigate(href)
    router.incrementReload?.()
  } else {
    router.navigate(href)
  }
}
