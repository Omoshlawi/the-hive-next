import { Entity } from "../../types/base";
import { Pricing } from "../sass";

export interface Payment extends Entity {
  id: string;
  amount: string;
  user: string;
  complete: boolean;
  description?: string;
  pricing?: Partial<Pricing>;
  mpesaTransaction?: MpesaTransaction;
}

export interface MpesaTransaction extends Entity {
  id: string;
  amount: string;
  merchantRequestId: string;
  checkoutRequestId: string;
  resultCode?: string;
  resultDescription?: string;
  mpesareceiptNumber?: string;
  transactionDate?: number;
  phoneNumber?: number;
  paymentId?: string;
  payment?: Payment;
}
