import { LegalLayout } from "@/components/layout/legal-layout";
import { cookiesPolicyHtml } from "@/data/legal-texts";

export default function CookiesPolicy() {
  return (
    <LegalLayout title="Política de Cookies" htmlContent={cookiesPolicyHtml} />
  );
}
