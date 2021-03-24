<script context="module">
  import { writable } from "svelte/store";

  export async function load({ page }) {
    const { query } = page;
    const q = query.get("q") || "";
    return {
      props: {
        q: writable(q),
      },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  export let q = writable("");

  onMount(async () => {
    console.log("---");
    console.log($q);
    console.log("---");
  });
</script>

<div class="text-center">
  {$q}
</div>
