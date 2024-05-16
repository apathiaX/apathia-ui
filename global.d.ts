declare module 'vue' {
  export interface GlobalComponents {
    'ap-affix': typeof import('apathia-ui')['ApAffix']
    'ap-alert': typeof import('apathia-ui')['ApAlert']
    'ap-button': typeof import('apathia-ui')['ApButton']
    'ap-checkbox': typeof import('apathia-ui')['ApCheckbox']
    'ap-cascader': typeof import('apathia-ui')['ApCascader']
    'ap-collapse': typeof import('apathia-ui')['ApCollapse']
    'ap-confirm': typeof import('apathia-ui')['ApConfirm']
    // 'ap-datepicker': typeof import('apathia-ui')['ApDatepicker']
    // 'ap-datepicker-group': typeof import('apathia-ui')['ApDatepickerGroup']
    'ap-dropdown': typeof import('apathia-ui')['ApDropdown']
    'ap-dropdown-item': typeof import('apathia-ui')['ApDropdownItem']
    'ap-dropdown-group': typeof import('apathia-ui')['ApDropdownGroup']
    'ap-form': typeof import('apathia-ui')['ApForm']
    'ap-form-item': typeof import('apathia-ui')['ApFormItem']
    'ap-icon': typeof import('apathia-ui')['ApIcon']
    'ap-image': typeof import('apathia-ui')['ApImage']
    'ap-input': typeof import('apathia-ui')['ApInput']
    'ap-loading': typeof import('apathia-ui')['ApLoading']
    'ap-modal': typeof import('apathia-ui')['ApModal']
    'ap-navbar': typeof import('apathia-ui')['ApNavbar']
    'ap-pagination': typeof import('apathia-ui')['ApPagination']
    'ap-radio': typeof import('apathia-ui')['ApRadio']
    'ap-radio-group': typeof import('apathia-ui')['ApRadioGroup']
    'ap-scroll-container': typeof import('apathia-ui')['ApScrollContainer']
    'ap-select': typeof import('apathia-ui')['ApSelect']
    'ap-option': typeof import('apathia-ui')['ApOption']
    'ap-side-nav': typeof import('apathia-ui')['ApSideNav']
    'ap-table': typeof import('apathia-ui')['ApTable']
    'ap-tabs': typeof import('apathia-ui')['ApTabs']
    // 'ap-textarea': typeof import('apathia-ui')['ApTextarea']
    'ap-tag': typeof import('apathia-ui')['ApTag']
    'ap-tags': typeof import('apathia-ui')['ApTags']
    'ap-slider': typeof import('apathia-ui')['ApSlider']
    'ap-switch': typeof import('apathia-ui')['ApSwitch']
    'ap-transfer': typeof import('apathia-ui')['ApTransfer']
    'ap-upload': typeof import('apathia-ui')['ApUpload']
    'ap-virtual-tree': typeof import('apathia-ui')['ApVirtualTree']
  }

  interface ComponentCustomProperties {
    $toast: typeof import('apathia-ui')['toast']
    $modal: typeof import('apathia-ui')['modal']
    $removeModal: typeof import('apathia-ui')['removeModal']
  }
}

export {}
