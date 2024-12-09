<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { LearningModel } from '../types'
import LearningCard from './LearningCard.vue'

const learningItems = ref<LearningModel[]>([])
const isLoading = ref(true)
const errorMessage = ref<string | null>(null)

onMounted(async () => {
    try {
        const response = await fetch('http://localhost:3000/api/learning-content')
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
        learningItems.value = await response.json() as LearningModel[]
    } catch (error: any) {
        errorMessage.value = error?.message || "An error occurred while fetching data."
    } finally {
        isLoading.value = false
    }
})
</script>

<template>
    <div class="container my-4">
        <div v-if="isLoading" class="d-flex justify-content-center py-5">
            <div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>
        </div>
        <div v-else-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
        </div>
        <div v-else>
            <div class="row gy-4">
                <div v-for="(item, index) in learningItems" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <LearningCard :item="item" />
                </div>
            </div>
        </div>
    </div>
</template>
