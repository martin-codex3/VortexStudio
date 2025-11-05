<script setup lang="ts">
import {string} from "#nuxt-scripts/validation/mock";

const store = useGetToolBox()
const { toggleToolBox } = storeToRefs(store)

// the value to bind to the editor here
const value = ref<string>("")

</script>

<template>
  <div class="">
    <!-- this is for the side folder structure here-->
    <div class="grid grid-cols-12 gap-5">
      <div class="sticky top-10" :class="[toggleToolBox ? 'hidden' : 'col-span-3 sticky top-10']">
        <div class="px-3">
          <h1>
            On the other hand, we denounce with righteous
            indignation and dislike men who are so beguiled and
            demoralized by the charms of pleasure of the moment,
            so blinded by desire, that they cannot foresee the pain
            and trouble that are bound to ensue; and equal blame belongs
            to those who fail in their duty through weakness of will,
            which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish.
            In a free hour, when our power of choice is untrammelled and when
            nothing prevents our being able to do what we like best, every
            pleasure is to be welcomed and every pain avoided. But in certain
            circumstances and owing to the claims of duty or the obligations
            of business it will frequently occur that pleasures have to be
            repudiated and annoyances accepted. The wise man therefore
            always holds in these matters to this principle of selection:
            he rejects pleasures to secure other greater pleasures,
            or else he endures pains to avoid worse pains.
          </h1>
        </div>
      </div>

      <!--    this is for the code editor here-->
      <div :class="[toggleToolBox ? 'col-span-12 overflow-auto' : 'col-span-9 overflow-auto']">
        <div class="min-h-screen">
          <MonacoEditor v-model="value"
                        lang="typescript"
                        :options="{theme: 'vs-dark'}"
                        style="height: 100vh; width: 100%">
            <div>
              <h1>loading editor</h1>
            </div>
          </MonacoEditor>
        </div>
      </div>

    </div>

  </div>
</template>
