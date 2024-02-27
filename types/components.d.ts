import type { INSTALL_KEY } from './install'

declare module 'vue' {
  export interface GlobalComponents {
    'ap-affix': typeof import('@apathia/components')['ApAffix']
    'ap-alert': typeof import('@apathia/components')['ApAlert']
    'ap-button': typeof import('@apathia/components')['ApButton']
    'ap-cascader': typeof import('@apathia/components')['ApCascader']
    'ap-checkbox': typeof import('@apathia/components')['ApCheckbox']
    'ap-collapse': typeof import('@apathia/components')['ApCollapse']
    'ap-confirm': typeof import('@apathia/components')['ApConfirm']
    'ap-datepicker': typeof import('@apathia/components')['ApDatepicker']
    'ap-datepicker-group': typeof import('@apathia/components')['ApDatepickerGroup']
    'ap-dropdown': typeof import('@apathia/components')['ApDropdown']
    'ap-dropdown-item': typeof import('@apathia/components')['ApDropdownItem']
    'ap-dropdown-group': typeof import('@apathia/components')['ApDropdownGroup']
    'ap-form': typeof import('@apathia/components')['ApForm']
    'ap-form-item': typeof import('@apathia/components')['ApFormItem']
    'ap-icon': typeof import('@apathia/components')['ApIcon']
    'ap-image': typeof import('@apathia/components')['ApImage']
    'ap-input': typeof import('@apathia/components')['ApInput']
    'ap-loading': typeof import('@apathia/components')['ApLoading']
    'ap-modal': typeof import('@apathia/components')['ApModal']
    'ap-navbar': typeof import('@apathia/components')['ApNavbar']
    'ap-pagination': typeof import('@apathia/components')['ApPagination']
    'ap-radio': typeof import('@apathia/components')['ApRadio']
    'ap-radio-group': typeof import('@apathia/components')['ApRadioGroup']
    'ap-scroll-container': typeof import('@apathia/components')['ApScrollContainer']
    'ap-select': typeof import('@apathia/components')['ApSelect']
    'ap-option': typeof import('@apathia/components')['ApOption']
    'ap-side-nav': typeof import('@apathia/components')['ApSideNav']
    'ap-table': typeof import('@apathia/components')['ApTable']
    'ap-tabs': typeof import('@apathia/components')['ApTabs']
    'ap-textarea': typeof import('@apathia/components')['ApTextarea']
    'ap-tag': typeof import('@apathia/components')['ApTag']
    'ap-tags': typeof import('@apathia/components')['ApTags']
    'ap-slider': typeof import('@apathia/components')['ApSlider']
    'ap-switch': typeof import('@apathia/components')['ApSwitch']
    'ap-transfer': typeof import('@apathia/components')['ApTransfer']
    'ap-upload': typeof import('@apathia/components')['ApUpload']
  }
  interface ComponentCustomProperties {
    $toast: typeof import('@apathia/components')['toast']
    $modal: typeof import('@apathia/components')['modal']
    $removeModal: typeof import('@apathia/components')['removeModal']
  }
}

declare module 'vue' {
  export interface App {
    [INSTALL_KEY]?: boolean
  }
}

export {}
