<template>
  <div>
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

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { startCase } from "lodash";

export default {
  data: () => ({
    title: "",
  }),
  methods: {
    startCase: c => startCase(c),
    onSubmit(event) {
      event.preventDefault();
      console.log(this.title);
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.title = null;
      // Trick to reset/clear native browser form validation state
      // this.show = false;
      // this.$nextTick(() => {
      //   this.show = true;
      // });
    },
  },
};
</script>
