export function scrollTop (dom) {
  let scrollTop
  if (!dom || !dom.ownerDocument) {
    scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0
  } else if (dom && dom.ownerDocument) {
    scrollTop = dom.scrollTop || 0
  }
  return scrollTop || 0
}

export function getRandomKey () {
  return 'id-' + String(Math.random()).replace('.', '')
}