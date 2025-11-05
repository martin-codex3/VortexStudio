<script setup lang="ts">

</script>

<template>
  <div class="app__main__wrapper">
    <div>
      <TopNavigation/>
    </div>

    <div class="">
      <div class="">
        <SideNavigation/>
      </div>

      <div class="pt-10 ps-20 z-0">
        <main>
          <slot/>
        </main>
      </div>
    </div>

  </div>
</template>
