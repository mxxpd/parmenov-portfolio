import Typograf from 'typograf'

const typograf = new Typograf({
  locale: ['ru', 'en-US'],
})

typograf.enableRule('common/nbsp/replaceNbsp')

const SKIP_TAGS = new Set([
  'A',
  'CODE',
  'KBD',
  'NOSCRIPT',
  'OPTION',
  'PRE',
  'SCRIPT',
  'STYLE',
  'TEXTAREA',
])

const typo = (text: string) => {
  if (!text) {
    return ''
  }

  return typograf.execute(text)
}

const typoTextNode = (text: string) => {
  const match = text.match(/^(\s*)([\s\S]*?)(\s*)$/)

  if (!match) {
    return typo(text)
  }

  const [, leadingSpace, content, trailingSpace] = match

  if (!content) {
    return text
  }

  return `${leadingSpace}${typo(content)}${trailingSpace}`
}

const shouldSkipNode = (node: Node | null) => {
  let current = node?.parentNode

  while (current) {
    if (current instanceof HTMLElement) {
      if (current.dataset.noTypo !== undefined || SKIP_TAGS.has(current.tagName) || current.isContentEditable) {
        return true
      }
    }

    current = current.parentNode
  }

  return false
}

const applyTypografToElement = (element: HTMLElement) => {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
  const textNodes: Text[] = []

  while (walker.nextNode()) {
    const node = walker.currentNode

    if (node instanceof Text && node.textContent?.trim() && !shouldSkipNode(node)) {
      textNodes.push(node)
    }
  }

  for (const node of textNodes) {
    node.textContent = typoTextNode(node.textContent ?? '')
  }
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('typo', {
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement) {
      if (import.meta.client) {
        applyTypografToElement(el)
      }
    },
    updated(el: HTMLElement) {
      if (import.meta.client) {
        applyTypografToElement(el)
      }
    },
  })

  return {
    provide: {
      typo,
    },
  }
})

declare module '#app' {
  interface NuxtApp {
    $typo: (text: string) => string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $typo: (text: string) => string
  }
}
