import { ReservationPage } from "../components/reservation-page";
import { getInitialLanguage } from "../components/site-data";

type ReservationRouteProps = {
  searchParams: Promise<{
    lang?: string | string[];
  }>;
};

export default async function Page({ searchParams }: ReservationRouteProps) {
  const params = await searchParams;

  return <ReservationPage initialLanguage={getInitialLanguage(params.lang)} />;
}
