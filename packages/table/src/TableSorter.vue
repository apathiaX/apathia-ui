<template>
  <span :class="styles.arrowWrap">
    <span
      :class="{
        [styles.arrow]: true,
        [styles.active]: active,
      }"
      @click="sortChange"
    >
      <Icon :size="14">
        <SortUp v-if="sort.order === 'asc'" />
        <SortDown v-else />
      </Icon>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from "vue";
// @ts-ignore
import { style } from "@apathia/apathia.twind";
// @ts-ignore
import { Icon } from "@apathia/apathia.icon";
import type { Sorter } from "./types";
import { SortUp, SortDown } from "../../icon-svg/src";

export default defineComponent({
  name: "GridSorter",

  components: {
    Icon,
  },

  props: {
    sort: {
      type: Object as PropType<Sorter>,
      required: true,
    },
    prop: {
      type: String as PropType<string>,
      required: true,
    },
  },

  emits: ["sort-change"],

  setup(props, { emit }) {
    const styles = getStyles();
    const active = computed(() => props.prop === props.sort.prop);

    function sortChange() {
      const newOrder = active.value && props.sort.order === "desc" ? "asc" : "desc";
      emit("sort-change", { prop: props.prop, order: newOrder });
    }
    return {
      styles,
      active,
      sortChange,
    };
  },
});

const getStyles = () => ({
  arrowWrap: style`inline-block pl-px align-middle`,
  arrow: style`text-content-neutral cursor-pointer`,
  arrowIcon: style`h-3.5 w-3.5 align-middle`,
  active: style`text-content-accent`,
});
</script>
