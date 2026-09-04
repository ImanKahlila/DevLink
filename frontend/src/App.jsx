import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AppShell } from "./components/layout/AppShell.jsx";
import { ComposerDialog } from "./components/overlays/ComposerDialog.jsx";
import { RouteLoader } from "./components/overlays/RouteLoader.jsx";
import { useRoute } from "./hooks/useRoute.js";
import { AddPostPage } from "./pages/AddPostPage.jsx";
import { FeedPage } from "./pages/FeedPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { ProfilePage } from "./pages/ProfilePage.jsx";
import { SearchPage } from "./pages/SearchPage.jsx";
import { SettingsPage } from "./pages/SettingsPage.jsx";
import "./App.css";

function RoutedPage({ route, onComposerOpen }) {
  if (route === "login") return <LoginPage />;
  if (route === "home") return <HomePage />;

  const screen =
    route === "feed" ? (
      <FeedPage onComposerOpen={onComposerOpen} />
    ) : route === "search" ? (
      <SearchPage />
    ) : route === "profile" ? (
      <ProfilePage />
    ) : route === "settings" ? (
      <SettingsPage />
    ) : (
      <AddPostPage onComposerOpen={onComposerOpen} />
    );

  return (
    <AppShell route={route} onComposerOpen={onComposerOpen}>
      {screen}
    </AppShell>
  );
}

export default function App() {
  const { route, isNavigating } = useRoute();
  const [composerOpen, setComposerOpen] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {isNavigating ? (
          <motion.div
            key="route-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
          >
            <RouteLoader />
          </motion.div>
        ) : (
          <motion.div
            key={route}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <RoutedPage
              route={route}
              onComposerOpen={() => setComposerOpen(true)}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ComposerDialog open={composerOpen} onOpenChange={setComposerOpen} />
    </>
  );
}
