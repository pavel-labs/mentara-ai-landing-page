import { LOCALES, type Locale } from '../../../i18n';
import { defaultLanding } from '../../../marketing/content';
export const getStaticPaths = () =>
  LOCALES.map((locale) => ({ params: { locale }, props: { locale } }));
export const GET = ({ props }: { props: { locale: Locale } }) =>
  new Response(JSON.stringify(defaultLanding(props.locale)), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
