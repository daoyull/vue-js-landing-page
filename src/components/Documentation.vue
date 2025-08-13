<template>
  <div class="untree_co-section">
    <div class="container">
        <!-- <div class="row mb-4">
          <div class="col-12">
            <button @click="$emit('back')" class="btn btn-primary">返回主页</button>
          </div>
        </div> -->
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div v-html="renderedMarkdown"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

defineEmits(['back']);
import { marked } from 'marked';

const renderedMarkdown = ref('');

onMounted(async () => {
  try {
    const response = await fetch('/docs/guide.md');
    if (response.ok) {
      const markdownText = await response.text();
      renderedMarkdown.value = marked(markdownText);
    } else {
      renderedMarkdown.value = '<p>Error loading documentation.</p>';
    }
  } catch (error) {
    console.error('Error fetching markdown:', error);
    renderedMarkdown.value = '<p>Error loading documentation.</p>';
  }
});
</script>

<style scoped>
.container {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>
