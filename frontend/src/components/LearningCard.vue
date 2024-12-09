<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { LearningModel } from '../types'

const props = defineProps<{ item: LearningModel }>()

const isModule = computed(() => props.item.type === 'module')
const title = computed(() => props.item.data.name)
const description = computed(() => props.item.data.description)
const status = computed(() => props.item.context.status)

// Status to badge color mapping
const statusBadgeClass = computed(() => {
  const statusColorMap: Record<string, string> = {
    completed: 'bg-success text-white',
    incomplete: 'bg-warning text-dark',
    locked: 'bg-secondary text-white',
    pending: 'bg-info text-white',
    attended: 'bg-success text-white',
    attending: 'bg-info text-white',
    invited: 'bg-primary text-white',
    declined: 'bg-danger text-white'
  }
  return statusColorMap[status.value] || 'bg-light text-dark'
})

const formatDate = (isoString: string) => {
  return new Date(isoString).toLocaleString()
}
</script>

<template>
  <div class="card h-100">
    <img v-if="item.data.imagePath" :src="item.data.imagePath" class="card-img-top" alt="Card image">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text" v-if="description">{{ description }}</p>

      <div v-if="isModule">
        <span class="badge bg-dark me-2">{{ item.data.moduleType }}</span>
        <span class="badge" :class="statusBadgeClass">{{ item.context.status }}</span>
      </div>

      <div v-else>
        <p class="mb-1"><strong>Location:</strong> {{ item.data.location }}</p>
        <p class="mb-1"><strong>Starts:</strong> {{ formatDate(item.data.startDate) }}</p>
        <p class="mb-1"><strong>Ends:</strong> {{ formatDate(item.data.endDate) }}</p>
        <span class="badge" :class="statusBadgeClass">{{ item.context.status }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
}
</style>
