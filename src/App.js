import "./App.css";
// import Cache from './components/SWRExample/Cache';
// import Profile from './components/SWRExample/Profile';
// import Fetcher from './components/SWRExample/Fetcher';
// import Mutate from './components/SWRExample/Mutate';
// import Pagination from './components/SWRExample/Pagination';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools"
import Example from "./components/ReactQueryExample/Example";
import QuickStart from "./components/ReactQueryExample/QuickStart";
import Pagination from "./components/ReactQueryExample/Pagination";
import InfiniteScroll from "./components/ReactQueryExample/InfiniteScroll";

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <Example /> */}
        {/* <QuickStart /> */}
        {/* <Pagination /> */}
        <InfiniteScroll />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
