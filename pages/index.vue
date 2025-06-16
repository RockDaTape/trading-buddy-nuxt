<!-- pages/index.vue -->
<template>
  <main>
    <Counter />
      <client-only>
        <tiptap-editor />
      </client-only>
  </main>
</template>

<script setup>
import TiptapEditor from '~/components/TiptapEditor.vue'
</script>