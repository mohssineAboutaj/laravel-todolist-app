<template>
  <b-modal :id="modalType" hide-footer :title="startCase(modalType)">
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        :label="startCase('Todo Title:')"
        label-for="input-title"
        :description="startCase('The todo item title to add to the list')"
      >
        <b-form-input
          id="input-title"
          v-model="title"
          type="text"
          :placeholder="startCase('Enter todo title')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group class="text-right">
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import { startCase, isEmpty } from "lodash";

export default {
  props: {
    modalType: {
      type: String,
      required: true,
    },
    todo: {
      type: Object,
      required: false,
      default: {},
    },
  },
  created() {
    this.title = null;

    if (!isEmpty(this.todo)) {
      this.title = this.todo.title;
    }
  },
  data: () => ({
    title: "",
  }),
  methods: {
    startCase: c => startCase(c),
    onSubmit(event) {
      event.preventDefault();
      axios
        .post("/api/todos", {
          title: this.title,
        })
        .then(res => {
          console.log(res);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.title = null;
    },
  },
};
</script>
