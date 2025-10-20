<script lang="ts">
  import { pageContentLoaded } from '../../../src/router/router-store'
  import { onMount } from 'svelte'

  onMount(() => {
    $pageContentLoaded = true
  })
</script>

<div class="error">
  <h1>404 - Page Not Found</h1>
  <p>The page you are looking for does not exist.</p>
  <a href="#/">Go to Home</a>
</div>
