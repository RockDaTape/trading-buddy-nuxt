<template>
  <UCard class="tiptap-editor">
    <client-only>
      <div v-if="editor" class="container">
        <div class="control-group">
          <div class="button-group">
            <button @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
              Bold
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
              Italic
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
              Strike
            </button>
            <button @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
              Code
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
              H1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
              H2
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
              H3
            </button>
            <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
              Bullet list
            </button>
            <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
              Ordered list
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()">
              Horizontal rule
            </button>
            <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
              Undo
            </button>
            <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
              Redo
            </button>
          </div>
        </div>
        <editor-content :editor="editor" class="tiptap" />
      </div>
    </client-only>
  </UCard>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

// Persist editor content across reloads
const STORAGE_KEY  = 'tiptap-content';
const savedContent = localStorage.getItem(STORAGE_KEY) || '';

const editor = useEditor({
  // load saved HTML (or start empty)
  content: savedContent,
  extensions: [StarterKit],
  // after every change, write HTML back to localStorage
  onUpdate({ editor }) {
    localStorage.setItem(STORAGE_KEY, editor.getHTML());
  },
  // …any other config you already have…
});
</script>

<style scoped>
.tiptap-editor {
  /* sizing & centering */
  width: 100%;
  max-width: 56rem;        /* Tailwind’s max-w-4xl */
  margin: 3rem auto;     /* my-6 + mx-auto */
  padding: 0 1rem;         /* px-4 */
}

@media (min-width: 640px) { /* sm */
  .tiptap-editor {
    padding: 0 1.5rem;     /* sm:px-6 */
  }
}

@media (min-width: 1024px) { /* lg */
  .tiptap-editor {
    padding: 0 2rem;       /* lg:px-8 */
  }
}

/* background, border & shadow */
.tiptap-editor {
  background-color: #2a292f;
  border: 1px solid #374151;
  /* neon blue glow: */
  box-shadow:
      0 0 8px rgba(41, 98, 255, 0.8),
      0 0 16px rgba(41, 98, 255, 0.6),
      0 0 24px rgba(41, 98, 255, 0.4),
      0 0 32px rgba(41, 98, 255, 0.2);
}

/* Basic editor styles */
.button-group {
  margin-bottom: 2rem;
}

.button-group button {
  background-color: #3b3b4f;
  border: 1px solid #555;
  color: white;
  font-size: 0.85rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin: 0.25rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button-group button:hover {
  background-color: #4f46e5; /* Tailwind indigo-600 */
}

.button-group button.is-active {
  background-color: #6366f1; /* Tailwind indigo-500 */
  color: white;
}
</style>

<style>

  :first-child {
    margin-top: 0;
  }

  /* List styles */
  .tiptap-editor ul {
    list-style-type: disc;
    list-style-position: outside;
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;
  }

  .tiptap-editor ol {
    list-style-type: decimal;
    list-style-position: outside;
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;
  }

  .tiptap-editor ul li p,
  .tiptap-editor ol li p {
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  }

  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    margin-top: 2.5rem;
    text-wrap: pretty;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  code {
    background-color: #e0d4ff; /* lavender / light purple */
    border-radius: 0.4rem;
    color: #111;
  }

  pre {
    background: #111;
    color: #eee;
    border-radius: 0.5rem;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
  }

  blockquote {
    border-left: 3px solid #cbd5e1; /* Tailwind gray-300 */
  }

  hr {
    border-top: 1px solid #e2e8f0; /* Tailwind gray-200 */
  }
</style>