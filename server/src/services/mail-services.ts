export interface MailServiceData {
  subject: string,
  body: string
}

export interface MailService {
  sendMail: (data: MailServiceData) => Promise<void>;
}