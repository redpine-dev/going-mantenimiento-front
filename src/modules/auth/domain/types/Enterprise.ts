type Enterprise = {
  enterpriseRut: string;
  SIIpassword: string;
  enterpriseName: string;
  paysWithChecks: boolean;
  emitsInvoices: boolean;
  ownerRut?: string;
  ownerSiiPassword?: string;
  ownerSignature?: string;
  enterpriseCity?: string;
};

export type { Enterprise };
