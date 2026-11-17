import { motion } from "framer-motion";
import { Award } from "lucide-react";
import CertificateCard from "../components/CertificateCard";
import SectionTitle from "../components/SectionTitle";
import { certificates } from "../data/certificates";

export default function Certifications() {
  return (
    <section
      id="certificates"
      className="bg-surface/30 px-4 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Credentials"
          title="Certifications & Professional Learning"
          description="Verified certificates and completed learning credentials."
          icon={<Award size={16} />}
        />

        {certificates.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45 }}
              >
                <CertificateCard certificate={certificate} />
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState>
            No verified certifications have been added yet.
          </EmptyState>
        )}
      </div>
    </section>
  );
}

function EmptyState({ children }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center">
      <p className="text-sm text-textMuted">{children}</p>
    </div>
  );
}
