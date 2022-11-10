<script>
</script>

<div class="hero">
  <div class="video">
    <video loop muted autoplay preload="auto">
      <source src="/video.mp4" type="video/mp4" /> Your browser does not support
      the video tag.
    </video>
  </div>
  <div class="caption | stack box">
    <h1>Simple &amp; Intuitive</h1>
    <h2>We take care of the complexities of building on the blockchain.</h2>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

  div,
  div::after,
  video {
    border-radius: var(--s0);
  }

  .hero {
    display: grid;
    grid-template-areas: "stack";
    width: 100%;
    color: #494e62;
    position: relative;
    isolation: isolate;
    background-image: url("/images/background.png");
    background-size: 100%;
    overflow: hidden;
  }

  .hero > * {
    grid-area: stack;
  }

  .hero .video {
    -webkit-mask-image: url("/images/mask.png");
    mask-image: url("/images/mask.png");
    mask-repeat: no-repeat;
    mask-position: 5rem 8rem;
    mask-position: right bottom;
    mask-size: 70%;
    position: relative;
    isolation: isolate;
  }

  .hero::after {
    content: "";
    background-image: url("/images/union.png");
    background-size: 80%;
    background-position: right bottom;
    position: absolute;
    inset: 0;
    top: 7%;
    left: 7%;
    background-repeat: no-repeat;
    z-index: -10;
  }

  .hero .video::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 20;
    background: linear-gradient(to bottom right, #494e6280, #7be7ce80);
    backdrop-filter: hue-rotate(300deg) saturate(0.5);
  }

  .hero .caption {
    align-self: flex-start;
    justify-self: left;
    gap: var(--s1);
    z-index: 30;
    background-color: transparent;
    --padding: var(--s3);
  }

  .hero h1 {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fs-500);
    font-weight: 600;
  }

  .hero h2 {
    font-family: "Montserrat", sans-serif;
    font-size: var(--fs-400);
    max-width: 20ch;
    font-weight: 600;
    line-height: 1.25em;
  }
</style>
