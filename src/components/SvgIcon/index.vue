<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      default: 'icon'
    },
    color: {
      type: String,
      default: '#ccc'
    }
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    const iconColor = computed(() => props.color);
    return { symbolId, iconColor };
  }
});
</script>
<template>
  <svg aria-hidden="true">
    <use :href="symbolId" :fill="iconColor"></use>
  </svg>
</template>
