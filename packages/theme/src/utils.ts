export const generateColor = (
  target: string,
  colorType: string,
  color: string,
) => {
  const styleTemplate = (theme: 'light' | 'dark') =>
    `${target}-${colorType}-${theme}-${color}`
  return `${styleTemplate('light')} dark:${styleTemplate('dark')}`
}

export const generateInteractionColor = (
  selectors: string[],
  colors: string[],
) => selectors.map(s => `${s}:(${colors.join(' ')})`).join(' ')
