<script>
  import Icon from "@iconify/svelte";

  let ArCapable =
    /iPhone|iPad|iPod/.test(navigator.userAgent) ||
    (/Mac/.test(navigator.userAgent) &&
      screen.width < 1024 &&
      screen.height < 1366);
</script>

<div>
  {#if ArCapable}
    <a rel="ar" href="/assets/3d-models/gdsc-logo.usdz" class="w-full">
      <img src="/assets/3d-models/hack.jpg" class="opacity-0" alt="hack" />
      <p class="flex items-center justify-center text-lg font-medium">
        View the GDSC Logo in AR <Icon icon="ion:logo-apple-ar" class="ml-2" />
      </p>
    </a>
  {/if}
</div>
