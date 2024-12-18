<template>
  <div class="scrollslidermobile">
    <div class="scrollslidermobile__swiper swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Rollup as a Service</h2>
            <p class="scrollslider__slideitem--p">
              Deploy production-grade & fully-serviced rollups natively integrated with
              Web3 Services
            </p>

            <button class="scrollslider__readmorebtn">
              <div class="scrollslider__readmorebtn--text">
                <span>Read more</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Rollup as a Service</h2>
            <p class="scrollslider__slideitem--p">
              Deploy production-grade & fully-serviced rollups natively integrated with
              Web3 Services
            </p>

            <button class="scrollslider__readmorebtn">
              <div class="scrollslider__readmorebtn--text">
                <span>Read more</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Rollup as a Service</h2>
            <p class="scrollslider__slideitem--p">
              Deploy production-grade & fully-serviced rollups natively integrated with
              Web3 Services
            </p>

            <button class="scrollslider__readmorebtn">
              <div class="scrollslider__readmorebtn--text">
                <span>Read more</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>

        <div class="swiper-slide">
          <div class="scrollslider__slideitem">
            <figure></figure>
            <h2 class="scrollslider__slideitem--h2">Rollup as a Service</h2>
            <p class="scrollslider__slideitem--p">
              Deploy production-grade & fully-serviced rollups natively integrated with
              Web3 Services
            </p>

            <button class="scrollslider__readmorebtn">
              <div class="scrollslider__readmorebtn--text">
                <span>Read more</span>
                <span>↗</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper } from "swiper";

export default {
  mounted() {
    this.$nextTick(() => {
      const swiper = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
      });
    });
  },
};
</script>

<style scoped lang="scss">
.scrollslidermobile {
  display: none;

  @media only screen and (max-width: 1024px) {
    display: block;

    position: relative;

    margin: #{scaleValue(300)} 0;
    padding-left: #{scaleValue(90)}
  }
}

.swiper {
  width: 100vw;
}

.swiper-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.swiper-slide {
  flex-shrink: 0;

  @media only screen and (max-width: 1024px) {
    width: 100vw !important;
    flex-shrink: 0;
  }
}
</style>
