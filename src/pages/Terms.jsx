import LegalPage from "../components/LegalPage";

const sections = [
  [
    "Acceptance of terms",
    "By accessing or using the DX Innovation Hub platform, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
  ],
  [
    "User responsibilities",
    "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to provide accurate and complete information.",
  ],
  [
    "Intellectual property",
    "All content, trademarks, and data on this platform are the property of DX Innovation Hub or its licensors. You may not use, reproduce, or distribute any content without our express permission.",
  ],
  [
    "Limitation of liability",
    "DX Innovation Hub shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the platform.",
  ],
];

const Terms = () => <LegalPage title="Terms of Service" updated="May 2024" sections={sections} />;

export default Terms;
