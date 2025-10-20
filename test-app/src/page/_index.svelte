<script lang="ts">
  import { pageContentLoaded } from '../../../src/router/router-store'
  import { onMount } from 'svelte'

  onMount(() => {
    $pageContentLoaded = true
  })
</script>

<div class="home">
  <h1>Welcome to Test App</h1>
  <p>This is the homepage testing svelte-fileapp</p>
  <ul>
    <li><a href="#/about">About</a></li>
    <li><a href="#/contact">Contact</a></li>
  </ul>
</div>
