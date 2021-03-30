
export function getStyle (dom, styleName) {
  if (!dom || !styleName) return

  let computedStyle = document.defaultView.getComputedStyle(dom, null)
  return computedStyle[styleName]
}
