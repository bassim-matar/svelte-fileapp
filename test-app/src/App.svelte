<script lang="ts">
  import GenericRouter from '../../src/router/GenericRouter.svelte'
  import routerIndex from './page/.router-index'
  import { pageContentLoaded } from '../../src/router/router-store'

  const whenAppReady = Promise.resolve()
</script>

<div id="wrapper">
  <section class="section">
    <GenericRouter {routerIndex} {whenAppReady} />
  </section>
</div>

{#if $pageContentLoaded}
  <div id="page-content-loaded" style="display: none;"></div>
{/if}
