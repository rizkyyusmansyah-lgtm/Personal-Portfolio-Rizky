import type { Certification } from '@/types';

// CV does not list specific certifications with credential IDs.
// Add your actual certificates here as you earn/verify them.
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'Associate Data Scientist Trainee – Program Vokasi Nasional',
    issuer: 'Kementerian Ketenagakerjaan RI',
    issueDate: 'Ags 2026',
    credentialId: '',
    credentialUrl: '',
    image: '',
  },
  // ✏️ Tambahkan sertifikat Anda di sini:
  // {
  //   id: 'cert-2',
  //   name: '[CERTIFICATE_NAME]',
  //   issuer: '[ISSUING_ORGANIZATION]',
  //   issueDate: '[ISSUE_DATE]',
  //   expiryDate: '[EXPIRY_DATE]',
  //   credentialId: '[CREDENTIAL_ID]',
  //   credentialUrl: '[CREDENTIAL_URL]',
  //   image: '[CERTIFICATE_IMAGE]',
  // },
];
