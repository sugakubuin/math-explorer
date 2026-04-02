import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './ssgRoutes';
import './index.css';
import 'katex/dist/katex.min.css';

export const createRoot = ViteReactSSG(
  { routes },
);
