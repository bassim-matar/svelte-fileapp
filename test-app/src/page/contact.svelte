<script lang="ts">
  import { pageContentLoaded } from '../../../src/router/router-store'
  import { onMount } from 'svelte'

  onMount(() => {
    $pageContentLoaded = true
  })
</script>

<div class="contact">
  <h1>Contact</h1>
  <p>Contact page with URL params support</p>
  <a href="#/">Back to Home</a>
</div>
