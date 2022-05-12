import nodemailer from 'nodemailer'
import { MailService, MailServiceData } from './../mail-services';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31ac80b509b7c6",
    pass: "7034415a83c872"
  }
});

export class NodemailerMailService implements MailService {
  async sendMail(data: MailServiceData) {
      await transport.sendMail({
        from: "Equipe Feedget <oi@gmail.com>",
        to: "Neto <fgcneto@gmail.com>",
        subject: data.subject,
            html: data.body
      });
  }
}