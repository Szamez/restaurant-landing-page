import { MenuPage } from "../components/menu-page";
import { getInitialLanguage } from "../components/site-data";

type MenuRouteProps = {
  searchParams: Promise<{
    lang?: string | string[];
  }>;
};

export default async function Page({ searchParams }: MenuRouteProps) {
  const params = await searchParams;

  return <MenuPage initialLanguage={getInitialLanguage(params.lang)} />;
}
