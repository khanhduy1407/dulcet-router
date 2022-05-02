import warning from 'warning'

export default function routerWarning(falseToWarn, message, ...args) {
  message = `[dulcet-router] ${message}`
  warning(falseToWarn, message, ...args)
}
