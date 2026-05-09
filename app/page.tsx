import { LandingPage } from "./components/landing-page";
import { getInitialLanguage } from "./components/site-data";

type HomeProps = {
  searchParams: Promise<{
    lang?: string | string[];
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  return <LandingPage initialLanguage={getInitialLanguage(params.lang)} />;
}
