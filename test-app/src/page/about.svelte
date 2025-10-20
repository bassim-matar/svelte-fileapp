<script lang="ts">
  import { pageContentLoaded } from '../../../src/router/router-store'
  import { onMount } from 'svelte'

  onMount(() => {
    $pageContentLoaded = true
  })
</script>

<div class="about">
  <h1>About</h1>
  <p>This page tests the routing system</p>
  <a href="#/">Back to Home</a>
</div>
