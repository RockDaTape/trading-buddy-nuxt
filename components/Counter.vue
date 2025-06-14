<template>
  <UCard class="counter-card">
    <div class="text-center py-6">
      <h1>{{ count }}</h1>
      <div class="button-group">
        <UButton class="reset-btn" variant="subtle" size="xl"  @click="reset">Reset</UButton>
        <UButton class="decrement-btn" variant="subtle" size="xl"  @click="change(-1)">−1</UButton>
        <UButton class="increment-btn" variant="subtle" size="xl"  @click="change(1)">+1</UButton>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
function change(n: number) { count.value += n }
function reset()       { count.value = 0 }
</script>

<style scoped>
.counter-card {
  /* sizing & centering */
  width: 100%;
  max-width: 56rem;        /* Tailwind’s max-w-4xl */
  margin: 1.5rem auto;     /* my-6 + mx-auto */
  padding: 0 1rem;         /* px-4 */
}

@media (min-width: 640px) { /* sm */
  .counter-card {
    padding: 0 1.5rem;     /* sm:px-6 */
  }
}

@media (min-width: 1024px) { /* lg */
  .counter-card {
    padding: 0 2rem;       /* lg:px-8 */
  }
}

/* background, border & shadow */
.counter-card {
  background-color: #2a292f;
  border: 1px solid #374151;
  /* neon blue glow: */
  box-shadow:
      0 0 8px rgba(41, 98, 255, 0.8),
      0 0 16px rgba(41, 98, 255, 0.6),
      0 0 24px rgba(41, 98, 255, 0.4),
      0 0 32px rgba(41, 98, 255, 0.2);
}

h1 {
  color: #2962ff;
  font-size: 5rem;
}

/* Layout & wrapping */
.button-group {
  display: flex;
  flex-wrap: wrap;           /* allow wrapping on small screens */
  gap: 1rem;                 /* space between buttons */
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

/* On very small viewports, force each button full-width */
@media (max-width: 400px) {
  .reset-btn .decrement-btn .increment-btn {
    flex: 1 1 100%;
  }
}

.reset-btn {
  background-color: #34343a;
  color: #b8b8b8;
  border-color: #b8b8b8;
  border-width: 2px;
  font-weight: bold;
  box-shadow:
      0 0 4px  rgba(184, 184, 184, 0.8),
      0 0 8px  rgba(184, 184, 184, 0.5);
}

.decrement-btn {
  background-color: #34343a;
  color: #b8b8b8;
  border-color: #b8b8b8;
  border-width: 2px;
  font-weight: bold;
  box-shadow:
      0 0 4px  rgba(184, 184, 184, 0.8),
      0 0 8px  rgba(184, 184, 184, 0.5);
}

.increment-btn {
  background-color: #34343a;
  color: #089981;
  border-color: #089981;
  border-width: 2px;
  font-weight: bold;
  /* Thinner neon glow on buttons */
    box-shadow:
        0 0 4px rgba(8, 153, 129, 0.8),
        0 0 8px rgba(8, 153, 129, 0.5);
}

</style>