import LinkParticle from "./shared/components/Particles";
import useTheme from "./shared/hooks/useTheme";
import "./App.scss";
import ProfileCard from "./shared/components/ProfileCard/ProfileCard";
import ContentCard from "./shared/components/ContentCard/ContentCard";
import Header from "./shared/components/Header/Header";
function App() {
  const { theme } = useTheme();

  return (
    <>
      <LinkParticle theme={theme} />
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 lg:flex-row">
        <Header />
        <ProfileCard />
        <ContentCard />
      </div>
    </>
  );
}

export default App;
