import { Suspense, lazy } from 'react';
import { useRoute } from './hooks/useRoute';
import { Loader } from './components/common/Loader';
import { ErrorBoundary } from './components/common/ErrorBoundary';

const Portfolio = lazy(() => import('./pages/Portfolio'));
const ComingSoon = lazy(() => import('./pages/ComingSoon'));

const isComingSoonRoute = (path) =>
  path === '/coming-soon' || path === '/coming-soon/';

const App = () => {
  const path = useRoute();
  const Page = isComingSoonRoute(path) ? ComingSoon : Portfolio;

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Page />
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
