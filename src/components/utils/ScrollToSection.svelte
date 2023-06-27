<script>
  import * as animateScroll from "svelte-scrollto-next";

  // parse URL parameters * refer to goBack component *
  const urlParams = new URLSearchParams(window.location.search);
  const scrollToSection = urlParams.get("scrollTo");

  // checks if scrollToSection to section is present
  if (scrollToSection) {
    // assings the section to a variable
    const mySection = document.getElementById(scrollToSection);
    // checks if the section exists
    if (mySection) {
      // scrolls to the section
      animateScroll.scrollTo({
        element: mySection,
        offset: 90,
      });
    }
  }
</script>
