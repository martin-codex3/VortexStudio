<script setup lang="ts">

</script>

<template>
  <nav class="px-3 border-r border-r-primary-main-border fixed top-10 w-20 h-full pt-8">
    <ul class="flex flex-col gap-3 items-center">
      <li>
        <button aria-label="button" class="flex items-center justify-center
        hover:bg-primary-main-orange/30
          cursor-pointer p-2 rounded-full transition-colors duration-200">
          <span class="icon-[tabler--folder] text-2xl"></span>
        </button>
      </li>

      <li>
        <button aria-label="button" class="flex items-center justify-center
        hover:bg-primary-main-orange/30
          cursor-pointer p-2 rounded-full transition-colors duration-200">
          <span class="icon-[material-symbols--commit] text-2xl"></span>
        </button>
      </li>

      <li>
        <button aria-label="button" class="flex items-center justify-center
        hover:bg-primary-main-orange/30
          cursor-pointer p-2 rounded-full transition-colors duration-200">
          <span class="icon-[tabler--layout-grid-add] text-2xl"></span>
        </button>
      </li>
    </ul>
  </nav>
</template>