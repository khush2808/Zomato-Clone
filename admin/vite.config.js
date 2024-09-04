import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	server: {
    proxy: {
    '/': {
      target: 'https://zomato-clone-three-rho.vercel.app/',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\//, '')
    },
    cors:false
    },
  },
  define: {
    'process.env': {}
  }
}
)
