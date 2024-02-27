<template>
  <div :class="[
    {
      [styles.inputContainer]: true,
      [styles.active]: activeVal,
      [styles.disabled]: !!disableInput,
    },
    $attrs.class,
  ]" :style="attrs.style">
    <span v-if="withPrepend" :class="styles.prepend">
      <slot name="prepend"></slot>
    </span>
    <div :class="styles.inputWrapper">
      <input ref="inputRef" v-model="inputVal" v-bind="attrs" :type="type" :class="[
        {
          [styles.input]: true,
          [styles.disabled]: !!disableInput,
        },
        inputClass,
      ]" :disabled="!!disableInput" @input="handleInput" @blur="() => (activeVal = false)"
        @focus="() => (activeVal = true)" />
      <Icon v-if="showClearIcon" :class="[styles.clearableIcon, search ? styles.clearWithSuffix : '']"
        @click.stop="clear">
        <Close />
      </Icon>
      <Icon v-if="search" :class="styles.suffixBtn" @click="onSearch">
        <Search />
      </Icon>
    </div>
    <span v-if="withAppend" :class="styles.append">
      <slot name="append"></slot>
    </span>
  </div>
</template>

<script lang="ts">
import stringwidth from "string-width";
import { computed, defineComponent, toRef, ref, nextTick } from "vue";
import { useAttrs, useInjectProp } from "@apathia/apathia.hooks";
import { style, apply, tw } from "@apathia/apathia.twind";
import { Icon } from "@apathia/apathia.icon";
import { Close, Search } from "@apathia/apathia.icon-svg";

export default defineComponent({
  name: "Input",

  components: {
    Icon,
  },

  inheritAttrs: false,

  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    inputClass: {
      type: [String, Object],
      default: "",
    },
    search: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
    maxwords: {
      type: Number,
    },
  },

  emits: ["update:modelValue", "input", "search"],

  setup(props, ctx) {
    const inputRef = ref<HTMLInputElement | null>(null);
    const activeVal = ref<boolean>(false);

    const withPrepend = computed(() => ctx.slots.prepend !== undefined);
    const withAppend = computed(() => ctx.slots.append !== undefined);
    const disableInput = useInjectProp("FormDisabled", false, toRef(props, "disabled"));
    const showClearIcon = computed(
      () => props.clearable && props.modelValue && !disableInput.value
    );

    // excludes style and class
    const attrs = useAttrs();

    const inputVal = computed({
      get: () => props.modelValue as string,
      set: (val: string) => {
        const strWidth = stringwidth(val);
        if (props.maxwords !== undefined && strWidth > 2 * props.maxwords) {
          if (inputRef.value) {
            inputRef.value.value = getStringByWords(val, props.maxwords * 2);
          }
          return;
        }
        ctx.emit("update:modelValue", val);
      },
    });
    const handleInput = (e: Event) => {
      ctx.emit("input", e);
    };

    const getStringByWords = (str: string, width: number) => {
      let totalCnt = 0;
      let res = "";
      for (const char of str) {
        totalCnt += stringwidth(char);
        if (totalCnt > width) {
          return res;
        }
        res += char;
      }
      return res;
    };

    const onSearch = () => {
      if (inputRef.value) {
        inputRef.value.focus();
      }
      ctx.emit("search", props.modelValue);
    };
    const clear = () => {
      ctx.emit("update:modelValue", "");
      nextTick(() => {
        if (inputRef.value) {
          // 手动出发输入事件
          inputRef.value.dispatchEvent(new Event("input"));
        }
      });
    };

    const styles = getStyles();

    return {
      inputRef,
      inputVal,
      activeVal,
      handleInput,
      attrs,
      withPrepend,
      withAppend,
      disableInput,
      showClearIcon,

      onSearch,
      clear,

      styles,
    };
  },
});

const getStyles = () => {
  const prependAndAppend = apply`text(content-accent sm) px-2 inline-flex items-center bg-fill-gray`;
  const commonIcon = apply`absolute self-center text-fill-secondary`;
  const interactiveIcon = apply`${commonIcon}cursor-pointer hover:(text-fill-accent)`;

  return {
    inputContainer: style`relative flex w-full h-8 border rounded border-line-accent bg-content-white shadow`,
    inputWrapper: style`relative flex rounded flex-grow-1 bg-content-white`,
    input: style`w-full h-full rounded block text-sm outline-none py-1.5 pl-2`,

    withPrefix: style`pl-9`,
    disabled: style(
      "cursor-not-allowed pointer-events-none bg-info-forbid placeholder-content-secondary text-content-neutral"
    ),
    active: style`border-brand-primary`,

    prepend: tw`${prependAndAppend}${apply`rounded-l border-r-0`}`,

    clearableIcon: tw`${interactiveIcon}${apply`right-2`}`,
    clearWithSuffix: tw`${interactiveIcon}${apply`right-8`}`,
    append: tw`${prependAndAppend}${apply`rounded-r`}`,

    suffixBtn: tw`${interactiveIcon}${apply`right-2`}`,
  };
};
</script>
