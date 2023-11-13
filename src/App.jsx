import "./App.css";
import { Nav } from "./components";
import {
  Footer,
  Home,
  NewsLetter,
  OlderPosts,
  PopularTags,
  QuickRead,
} from "./sections";

function App() {
  return (
    <main className="bg-primary-background-color min-h-screen">
      <Nav />

      <div>
        <Home />
        <QuickRead />
        <OlderPosts />
        <PopularTags />
        <NewsLetter />
      </div>
      <Footer />
    </main>
  );
}

export default App;
