<template>
  <div>
    <div class="alert alert-warning text-capitalize">
      {{ doubleClickToToggleMsg }}
    </div>
    <b-list-group>
      <b-list-group-item
        v-for="item in items"
        :key="item.id"
        class="d-flex justify-content-between align-items-center"
        :variant="item.completed ? 'success' : ''"
        @dblclick="toggleCompleted(item.id)"
      >
        <div v-b-tooltip.hover :title="startCase(doubleClickToToggleMsg)">
          {{ item.title }}
        </div>
        <b-badge pill variant="transparent">
          <b-button variant="danger">d</b-button>
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { startCase } from "lodash";

export default {
  data: () => ({
    doubleClickToToggleMsg: "double click to toggle complated status",
  }),
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    startCase: c => startCase(c),
    toggleCompleted(id) {
      const item = this.items.find(el => el.id == id);
      item.completed = !item.completed;
    },
  },
};
</script>
