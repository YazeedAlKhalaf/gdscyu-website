<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  import Icon from "@iconify/svelte";

  export let Style: string;

  const theme = writable(localStorage.getItem("theme") || "light");

  onMount(() => {
    document.documentElement.classList.add($theme);
    localStorage.setItem("theme", $theme);
  });

  $: {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add($theme);
    localStorage.setItem("theme", $theme);
  }

  function toggleTheme() {
    theme.update((currentTheme) =>
      currentTheme === "light" ? "dark" : "light"
    );
  }
</script>

<button
  type="button"
  on:click={toggleTheme}
  aria-label="Dark Mode Toggle Button"
>
  <Icon icon="gg:dark-mode" class={Style} />
</button>
