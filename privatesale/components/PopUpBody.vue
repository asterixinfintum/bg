<template>
    <div>
      <div class="popupbody">
        <!-- Slot for dynamic content -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .popupbody {
    transition: all .5s ease;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    height: 100vh;
    width: 100vw;
    z-index: 10;
  }
  </style>