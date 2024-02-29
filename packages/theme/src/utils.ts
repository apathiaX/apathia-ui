export const generateColor = (
  target: string,
  colorType: string,
  color: string,
  important = false,
) => {
  const styleTemplate = (theme: 'light' | 'dark') =>
    `${target}-${colorType}-${theme}-${color}${important ? '!' : ''}`
  return `${styleTemplate('light')} dark:${styleTemplate('dark')}`
}

export const generateInteractionColor = (
  selectors: string[],
  colors: string[],
) => selectors.map(s => `${s}:(${colors.join(' ')})`).join(' ')
