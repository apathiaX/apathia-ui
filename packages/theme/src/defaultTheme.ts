// default theme set
export const defaultTheme = {
  darkMode: 'class',
  theme: {
    // extends 拓展主题，直接写是覆盖
    // colors: {
    //   brand: {
    //     primary: '#00AEEC',
    //     hover: '#24C1F9',
    //     active: '#0090C4',
    //     forbid: 'rgba(0, 174, 236, 0.5)',
    //     light: '#EFFBFF',
    //     fill: '#DBEAFE',
    //   },
    //   content: {
    //     primary: '#18191C',
    //     accent: '#61666D',
    //     secondary: '#9499A0',
    //     neutral: '#C9CCD0',
    //     white: '#FFFFFF',
    //     link: '#008AC5',
    //   },
    //   fill: {
    //     primary: '#61666D',
    //     accent: '#9499A0',
    //     secondary: '#C9CCD0',
    //     neutral: '#E3E5E7',
    //     gray: '#F1F2F3',
    //     light: '#F6F7F8',
    //     white: '#FFF',
    //   },
    //   line: {
    //     primary: '#C9CCD0',
    //     accent: '#E3E5E7',
    //     secondary: '#F1F2F3',
    //   },
    //   pink: {
    //     primary: '#FF6699',
    //     hover: '#FF70A3',
    //     active: '#E15584',
    //     forbid: 'rgba(255, 102, 153, 0.5)',
    //     light: '#FFF7F9',
    //   },

    //   success: {
    //     primary: '#2AC864',
    //     hover: '#3CE47A',
    //     active: '#009A29',
    //     forbid: 'rgba(42, 200, 100, 0.5)',
    //     light: '#E8FFEA',
    //   },

    //   warning: {
    //     primary: '#FF7F24',
    //     hover: '#FF9A2E',
    //     active: '#D25F00',
    //     forbid: 'rgba(255, 127, 36, 0.5)',
    //     light: '#FFF7E8',
    //   },

    //   error: {
    //     primary: '#F85A54',
    //     hover: '#FF7873',
    //     active: '#D94640',
    //     forbid: 'rgba(248, 90, 84, 0.5)',
    //     light: '#FFECE8',
    //   },

    //   info: {
    //     primary: '#F1F2F3',
    //     hover: '#F6F7F8',
    //     active: '#E3E5E7',
    //     forbid: 'rgba(241, 242, 243, 0.5)',
    //     light: '#FFFFFF',
    //   },

    //   transparent: 'transparent',
    // },

    colors: {
      primary: {
        dark: {
          default: '#4d86f7',
          hover: '#3e72ed',
          disabled: '#3d66d1',
          active: '#77a4f7',
          fill: '#2c3f72',
        },
        light: {
          default: '#3e72ed',
          hover: '#4d86f7',
          disabled: '#a6c4f7',
          active: '#3260c9',
          fill: '#ebf3ff',
        },
      },
      info: {
        light: {
          default: '#888d92',
          hover: '#a7abb0',
          disabled: '#d8dbde',
          active: '#6b7075',
          fill: '#f9f9f9',
        },
        dark: {
          default: '#6b7075',
          hover: '#555b61',
          disabled: '#41464c',
          active: '#888d92',
          fill: '#2e3238',
        },
      },
      success: {
        light: {
          default: '#3bb346',
          hover: '#5ac262',
          disabled: '#a4e0a7',
          active: '#30953c',
          fill: '#ecf7ec',
        },
        dark: {
          default: '#5dc264',
          hover: '#3fb349',
          disabled: '#3f7746',
          active: '#5dc264',
          fill: '#1e3d22',
        },
      },
      danger: {
        light: {
          default: '#ff442b',
          hover: '#ff684e',
          disabled: '#ffb9a7',
          active: '#d92616',
          fill: '#fef2ed',
        },
        dark: {
          default: '#ff745c',
          hover: '#ff5842',
          disabled: '#d9493b',
          active: '#ff9a85',
          fill: '#6c1f20',
        },
      },
      warning: {
        light: {
          default: '#fc8802',
          hover: '#fda632',
          disabled: '#fed998',
          active: '#d26701',
          fill: '#fff8ea',
        },
        dark: {
          default: '#fcac42',
          hover: '#fc9d2d',
          disabled: '#d17824',
          active: '#fcc571',
          fill: '#552d17',
        },
      },
      border: {
        light: {
          default: '#d8dbde',
          secondary: '#e6e8ea',
          hover: '#a7abb0',
          disabled: '#e6e8ea',
        },
        dark: {
          default: '#6b7075',
          secondary: '#555b61',
          hover: '#a7abb0',
          disabled: '#2e3238',
        },
      },
      text: {
        light: {
          default: '#1c2023',
          secondary: '#555b61',
          regular: '#888d92',
          placeholder: '#d8dbde',
          disabled: '#d8dbde',
          white: '#fff',
        },
        dark: {
          default: '#f9f9f9',
          secondary: '#6b7075',
          regular: '#a7abb0',
          placeholder: '#41464c',
          disabled: '#41464c',
          white: '#fff',
        },
      },
      bg: {
        light: {
          primary: '#ffffff',
          secondary: '#f9f9f9',
          ground: '#e6e8ea',
          top: '#1c2023',
        },
        dark: {
          primary: '#14171a',
          secondary: '#1c2023',
          ground: '#2e3238',
          top: '#f9f9f9',
        },
      },
      fill: {
        light: {
          default: '#f6f7f8',
          disabled: '#888d92',
        },
        dark: {
          default: '#2e3238',
          disabled: '#1c2023',
        },
      },
      transparent: 'transparent',
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.125rem' }], // 辅助文字 fontsize: 12px; line-height: 18px;
      sm: ['0.8125rem', { lineHeight: '1.25rem' }], // 正文 fontsize: 13px; line-height: 20px;
      base: ['0.875rem', { lineHeight: '1.375rem' }], // 正文大 fontsize: 14px; line-height: 22px;
      lg: ['1rem', { lineHeight: '1.5rem' }], // 标题 fontsize: 16px; line-height: 24px;
      xl: ['1.125rem', { lineHeight: '1.625rem' }], // 标题大 fontsize: 18px; line-height: 26px;
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }], // 超大标题 fontsize: 24px; line-height: 36px;
    },
    boxShadow: {
      sm: '0px 1px 2px rgba(0, 0, 0, 0.3);',
      DEFAULT:
        '0px 0px 2px rgba(0, 0, 0, 0.04), 0px 4px 10px rgba(0, 0, 0, 0.08)',
      md: '0px 0px 4px rgba(0, 0, 0, 0.06), 0px 12px 20px rgba(0, 0, 0, 0.1)',
      lg: '0px 0px 6px rgba(0, 0, 0, 0.08), 0px 20px 30px rgba(0, 0, 0, 0.12)',
      none: 'none',
    },

    padding: {
      // default
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',

      // add button preset
      'btn-sm-y': '0.25rem', // 4px
      'btn-md-y': '0.3125rem', // 5px
      'btn-lg-y': '0.4375rem', // 7px
    },
    zIndex: {
      0: '0',
      10: '10',
      20: '20',
      30: '30',
      40: '40',
      50: '50',
      modal: '900',
      popper: '910',
      dropdown: '950',
      alert: '999',
    },
  },
}
