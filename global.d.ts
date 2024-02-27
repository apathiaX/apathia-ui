declare module 'vue' {
  export interface GlobalComponents {
    'ap-affix': typeof import('apathia-ui/components')['ApAffix']
    'ap-alert': typeof import('apathia-ui/components')['ApAlert']
    'ap-button': typeof import('apathia-ui/components')['ApButton']
    'ap-checkbox': typeof import('apathia-ui/components')['ApCheckbox']
    'ap-cascader': typeof import('apathia-ui/components')['ApCascader']
    'ap-collapse': typeof import('apathia-ui/components')['ApCollapse']
    'ap-confirm': typeof import('apathia-ui/components')['ApConfirm']
    'ap-datepicker': typeof import('apathia-ui/components')['ApDatepicker']
    'ap-datepicker-group': typeof import('apathia-ui/components')['ApDatepickerGroup']
    'ap-dropdown': typeof import('apathia-ui/components')['ApDropdown']
    'ap-dropdown-item': typeof import('apathia-ui/components')['ApDropdownItem']
    'ap-dropdown-group': typeof import('apathia-ui/components')['ApDropdownGroup']
    'ap-form': typeof import('apathia-ui/components')['ApForm']
    'ap-form-item': typeof import('apathia-ui/components')['ApFormItem']
    'ap-icon': typeof import('apathia-ui/components')['ApIcon']
    'ap-image': typeof import('apathia-ui/components')['ApImage']
    'ap-input': typeof import('apathia-ui/components')['ApInput']
    'ap-loading': typeof import('apathia-ui/components')['ApLoading']
    'ap-modal': typeof import('apathia-ui/components')['ApModal']
    'ap-navbar': typeof import('apathia-ui/components')['ApNavbar']
    'ap-pagination': typeof import('apathia-ui/components')['ApPagination']
    'ap-radio': typeof import('apathia-ui/components')['ApRadio']
    'ap-radio-group': typeof import('apathia-ui/components')['ApRadioGroup']
    'ap-scroll-container': typeof import('apathia-ui/components')['ApScrollContainer']
    'ap-select': typeof import('apathia-ui/components')['ApSelect']
    'ap-option': typeof import('apathia-ui/components')['ApOption']
    'ap-side-nav': typeof import('apathia-ui/components')['ApSideNav']
    'ap-table': typeof import('apathia-ui/components')['ApTable']
    'ap-tabs': typeof import('apathia-ui/components')['ApTabs']
    'ap-textarea': typeof import('apathia-ui/components')['ApTextarea']
    'ap-tag': typeof import('apathia-ui/components')['ApTag']
    'ap-tags': typeof import('apathia-ui/components')['ApTags']
    'ap-slider': typeof import('apathia-ui/components')['ApSlider']
    'ap-switch': typeof import('apathia-ui/components')['ApSwitch']
    'ap-transfer': typeof import('apathia-ui/components')['ApTransfer']
    'ap-upload': typeof import('apathia-ui/components')['ApUpload']
  }

  interface ComponentCustomProperties {
    $toast: typeof import('apathia-ui/components')['toast']
    $modal: typeof import('apathia-ui/components')['modal']
    $removeModal: typeof import('apathia-ui/components')['removeModal']
  }
}

export {}
