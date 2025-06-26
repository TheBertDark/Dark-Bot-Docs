// VitePress theme index.js: AOS integration
import DefaultTheme from 'vitepress/theme'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../custom-style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      router.onAfterRouteChanged = () => {
        setTimeout(() => {
          AOS.refresh();
        }, 100);
      }
      setTimeout(() => {
        AOS.init({
          duration: 700,
          once: true,
          offset: 80,
          easing: 'ease-out-cubic',
        });
      }, 0);
    }
  }
}
