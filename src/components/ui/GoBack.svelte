<script lang="ts">
  /* used to control visibilty of the button 
     & as an href for the goBack function    */
  export let goBackHref: string | boolean;

  // sends a URL parameter for scrollToSection component to read
  const goBack = () => {
    window.location.href = `/?scrollTo=${goBackHref}`;
  };
</script>

<button
  on:click={goBack}
  aria-label="Go Back Button"
  class={`${goBackHref ? "visible" : "invisible"}`}
>
  <slot />
</button>
