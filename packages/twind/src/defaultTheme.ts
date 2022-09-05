// default theme set
export const defaultTheme = {
  theme: {
    colors: {
      brand: {
        primary: '#00AEEC',
        hover: '#24C1F9',
        active: '#0090C4',
        forbid: 'rgba(0, 174, 236, 0.5)',
        light: '#EFFBFF',
      },

      content: {
        primary: '#18191C',
        accent: '#61666D',
        secondary: '#9499A0',
        neutral: '#C9CCD0',
        white: '#FFFFFF',
        link: '#008AC5',
      },
      fill: {
        primary: '#61666D',
        accent: '#9499A0',
        secondary: '#C9CCD0',
        neutral: '#E3E5E7',
        gray: '#F1F2F3',
        light: '#F6F7F8',
        white: '#FFF',
      },
      line: {
        primary: '#C9CCD0',
        accent: '#E3E5E7',
        secondary: '#F1F2F3',
      },

      pink: {
        primary: '#FF6699',
        hover: '#FF70A3',
        active: '#E15584',
        forbid: 'rgba(255, 102, 153, 0.5)',
        light: '#FFF7F9',
      },

      success: {
        primary: '#2AC864',
        hover: '#3CE47A',
        active: '#009A29',
        forbid: 'rgba(42, 200, 100, 0.5)',
        light: '#E8FFEA',
      },

      warning: {
        primary: '#FF7F24',
        hover: '#FF9A2E',
        active: '#D25F00',
        forbid: 'rgba(255, 127, 36, 0.5)',
        light: '#FFF7E8',
      },

      error: {
        primary: '#F85A54',
        hover: '#FF7873',
        active: '#D94640',
        forbid: 'rgba(248, 90, 84, 0.5)',
        light: '#FFECE8',
      },

      info: {
        primary: '#F1F2F3',
        hover: '#F6F7F8',
        active: '#E3E5E7',
        forbid: 'rgba(241, 242, 243, 0.5)',
        light: '#FFFFFF',
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
