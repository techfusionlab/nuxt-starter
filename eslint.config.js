import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  pinia: true,
  typescript: true,
  ignores: ['!**/store/**', '!**/stores/**'],
})
