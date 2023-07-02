<script lang="ts">
  // used to control visibility of the button
  export let visible: boolean;

  const goBack = () => {
    const referrer = document.referrer;

    // Check if the referrer is from your website
    if (referrer.includes("gdscyu.com") || referrer.includes("localhost")) {
      window.history.back();
    } else {
      // Navigate to your index page
      window.location.href = "/"; // Replace with your index page URL
    }
  };
</script>

<button
  on:click={goBack}
  aria-label="Go Back Button"
  class={`${visible ? "visible" : "invisible"}`}
>
  <slot />
</button>
