import _error from './_error.svelte'
import _index from './_index.svelte'
import _loading from './_loading.svelte'
import about from './about.svelte'
import contact from './contact.svelte'

import type { Component } from 'svelte'
type RouteConfig = { component: Component<any>; param?: string }

export default {
  _error: { component: _error },
  _index: { component: _index },
  _loading: { component: _loading },
  about: { component: about },
  contact: { component: contact },
} as const satisfies Record<string, RouteConfig>
