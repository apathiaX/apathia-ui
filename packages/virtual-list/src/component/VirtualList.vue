<script lang="ts" setup>
import { computed } from 'vue'
import { useVirtualList } from '../hook/useVirtualList'
import { Scrollbar } from '../scrollbar'
import type {
  IVirtualListEmit,
  IVirtualListProps,
  VirtualListEmitFn,
} from '../type'
import ObserverItem from './ObserverItem.vue'

const props = defineProps<IVirtualListProps>()
const emit = defineEmits<IVirtualListEmit>()

const emitFunction: VirtualListEmitFn = {
  scroll: (offset: number) => {
    emit('scroll', offset)
  },
  toTop: (firstItem: any) => {
    emit('toTop', firstItem)
  },
  toBottom: (lastItem: any) => {
    emit('toBottom', lastItem)
  },
  itemResize: (id: string, newSize: number) => {
    emit('itemResize', id, newSize)
  },
}

const {
  clientRefEl,
  listRefEl,
  stickyHeaderRefEl,
  headerRefEl,
  stickyFooterRefEl,
  footerRefEl,
  slotSize,
  reactiveData,
  renderList,
  resizeObserver,
  transformDistance,
  onScrollBarScroll,
  deletedList2Top,
  addedList2Top,
  getItemPosByIndex,
  forceUpdate,
  scrollIntoView,
  scrollToBottom,
  scrollToTop,
  scrollToIndex,
  scrollToOffset,
} = useVirtualList(props, emitFunction)

const listTotalSize = computed(
  () => reactiveData.listTotalSize + slotSize.headerSize + slotSize.footerSize,
)

defineExpose({
  reactiveData,
  deletedList2Top,
  addedList2Top,
  getItemPosByIndex,
  forceUpdate,
  scrollIntoView,
  scrollToBottom,
  scrollToTop,
  scrollToIndex,
  scrollToOffset,
})
</script>

<template>
  <div
    ref="clientRefEl"
    class="virt-list__client"
    style="width: 100%; height: 100%; position: relative"
    data-id="client"
  >
    <div
      :style="`height: 100%; width: 100%; ${
        horizontal
          ? `overflow-x: hidden; overflow-y: auto`
          : `overflow-x: auto; overflow-y: hidden`
      }`"
    >
      <div
        v-if="$slots.stickyHeader"
        ref="stickyHeaderRefEl"
        key="slot-sticky-header"
        data-id="stickyHeader"
        :class="stickyHeaderClass"
        :style="`position: sticky; z-index: 10; ${
          horizontal ? 'left: 0' : 'top: 0;'
        } ${stickyHeaderStyle}`"
      >
        <slot name="stickyHeader"></slot>
      </div>
      <div
        :style="`will-change: transform; transform: translate${
          horizontal ? 'X' : 'Y'
        }(${transformDistance}px);`"
      >
        <div
          v-if="$slots.header"
          ref="headerRefEl"
          key="slot-header"
          data-id="header"
          :class="headerClass"
          :style="headerStyle"
        >
          <slot name="header"></slot>
        </div>
        <div
          ref="listRefEl"
          :class="listClass"
          :style="horizontal ? `display: flex; ${listStyle}` : `${listStyle}`"
        >
          <template v-if="renderList.length === 0">
            <slot name="empty"></slot>
          </template>
          <template v-else>
            <ObserverItem
              v-for="(item, index) in renderList"
              :key="item[itemKey]"
              :class="itemClass"
              :style="itemStyle"
              :id="item[itemKey]"
              :resizeObserver="resizeObserver"
            >
              <slot
                :itemData="item"
                :index="index + reactiveData.renderBegin"
              ></slot>
            </ObserverItem>
          </template>
        </div>
        <div
          v-if="$slots.footer"
          ref="footerRefEl"
          key="slot-footer"
          data-id="footer"
          :class="footerClass"
          :style="footerStyle"
        >
          <slot name="footer"></slot>
        </div>
      </div>
      <div
        v-if="$slots.stickyFooter"
        ref="stickyFooterRefEl"
        key="slot-sticky-footer"
        data-id="stickyFooter"
        :class="stickyFooterClass"
        :style="`position: sticky; z-index: 10; ${
          horizontal ? 'right: 0' : 'bottom: 0;'
        } ${stickyFooterStyle}`"
      >
        <slot name="stickyFooter"></slot>
      </div>
    </div>

    <div
      v-if="renderList.length === 0"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    >
      <slot name="empty"></slot>
    </div>
    <Scrollbar
      :client-size="slotSize.clientSize"
      :listSize="listTotalSize"
      :direction="horizontal ? 'horizontal' : 'vertical'"
      :scrollFrom="
        reactiveData.offset /
        (reactiveData.listTotalSize +
          slotSize.headerSize +
          slotSize.footerSize -
          slotSize.clientSize)
      "
      @scroll="onScrollBarScroll"
    />
  </div>
</template>
