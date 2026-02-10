<template>
  <div>
    <h2>{{ character.name }} {{ character.lastName }}</h2>
    <button >Editar</button>
    <button @click="removeCharacter(character.id)">Borrar</button>
  </div>
</template>
<script setup lang="ts">
import { type Character } from '@/models/characterModel';
import { useCharacterStore } from '@/stores/useCaracterStore';
import { useRouter } from 'vue-router';
defineProps<{
  character: Character
}>()

const characterStore = useCharacterStore()
const router = useRouter()

const editCharacter = (character: Character) => {
  //TODO falta la navegacion hacia la edicion
  // router.push()
}
const removeCharacter = async (id: number) => {
  await characterStore.deleteCharacter(id);
}
</script>
<style module lang="scss"></style>
