<template>
  <div v-typo class="layout">
    <Header />
    <main class="layout__main">
      <slot />
    </main>
    <AppFooter />
    <ContactModal />
  </div>
</template>
