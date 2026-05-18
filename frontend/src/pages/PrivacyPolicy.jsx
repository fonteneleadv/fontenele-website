import { LegalLayout } from "@/components/layout/legal-layout";
import { privacyPolicyHtml } from "@/data/legal-texts";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidade" htmlContent={privacyPolicyHtml} />
  );
}
