import './styles/index.css'
import { ViteReactSSG } from 'vite-react-ssg'
import routes from './App.jsx'

// ViteReactSSG decide sozinha: renderToString no build, hydrateRoot no cliente.
export const createRoot = ViteReactSSG({ routes })
