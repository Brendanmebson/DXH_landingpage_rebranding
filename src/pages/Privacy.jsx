import LegalPage from "../components/LegalPage";

const sections = [
  [
    "Introduction",
    "At DX Innovation Hub, we take your privacy seriously. This Policy explains how we collect, use, and protect your personal data when you interact with our platform and services.",
  ],
  [
    "Data collection",
    "We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or apply for a program. This may include your name, email address, and professional background.",
  ],
  [
    "How we use your data",
    "Your data is used to provide and improve our services, communicate with you about your projects, and send you relevant innovation insights. We never sell your personal data to third parties.",
  ],
  [
    "Security",
    "We implement industry-standard security measures to protect your data from unauthorized access, loss, or alteration.",
  ],
];

const Privacy = () => <LegalPage title="Privacy Policy" updated="May 2024" sections={sections} />;

export default Privacy;
