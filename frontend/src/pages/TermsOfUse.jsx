import { LegalLayout } from "@/components/layout/legal-layout";
import { termsOfUseHtml } from "@/data/legal-texts";

export default function TermsOfUse() {
  return (
    <LegalLayout title="Termos de Uso" htmlContent={termsOfUseHtml} />
  );
}
