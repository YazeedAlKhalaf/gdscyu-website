<script>
  import Icon from "@iconify/svelte";
  import * as animateScroll from "svelte-scrollto-next";
  import DarkMode from "./DarkMode.svelte";

  import { navData } from "../../data/nav";

  let opened;

  const handleClick = () => {
    // toggle opened state to show/hide mobile nav & swap its icon
    opened = !opened;
    // toggle overflow-hidden class to prevent scrolling when mobile nav is open
    document.body.classList.toggle("overflow-hidden");
  };

  const isMobile = window.innerWidth < 912;
</script>

<header class="font-bold">
  {#if isMobile}
    <!-- mobile nav -->
    <nav>
      <!-- toggles fixed class when the menu is opened -->
      <div class="z-50 flex w-full justify-between p-5" class:fixed={opened}>
        <DarkMode Style="h-9 w-9" />
        <button
          on:click={handleClick}
          aria-label={!opened
            ? "Open Navigation Menu"
            : "Close Navigation Menu"}
        >
          <Icon
            icon={opened ? "ri:close-fill" : "ri:menu-4-fill"}
            class="h-9 w-9"
          />
        </button>
      </div>
      <!-- hidden when the menu is closed -->
      <div
        class="default fixed z-40 flex h-screen w-screen flex-col items-center justify-center gap-y-10"
        class:hidden={!opened}
      >
        <!-- Links -->
        {#each navData as link}
          <button
            on:click={() => {
              animateScroll.scrollTo({
                element: link.href,
                offset: 90,
              });
              handleClick();
            }}
          >
            <p class="text-2xl">{link.name}</p>
          </button>
        {/each}
      </div>
    </nav>
  {/if}
  <!-- Desktop nav -->
  {#if !isMobile}
    <nav class="flex justify-between p-6">
      <div class="h-9 w-9 hover:scale-110" />
      <!-- Links -->
      <div class="flex gap-x-7">
        {#each navData as link}
          <button
            on:click={() =>
              animateScroll.scrollTo({
                element: link.href,
                offset: 90,
              })}
          >
            <p class="text-xl hover:scale-110">
              {link.name}
            </p>
          </button>
        {/each}
      </div>
      <DarkMode Style="h-9 w-9 hover:scale-110" />
    </nav>
  {/if}
</header>
