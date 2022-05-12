import { MailService } from './../services/mail-services';
import { FeedbacksRepository } from './../repositories/feeedbacks-repository';

interface SubmitFeedbackUseCaseRequest {
  type: string,
  comment: string,
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  
  constructor(
    private feedbacksRepository: FeedbacksRepository, 
    private mailService: MailService
  ){}

  async execute(request: SubmitFeedbackUseCaseRequest){
    const {type, comment, screenshot} = request;

  if(screenshot && !screenshot.startsWith('data:image/png;base64')){
    throw new Error('Formato de Screenshot inválido')
  }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot
    })

    await this.mailService.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color:#111;">',
        '<p>Tipo de feedback:${type}</p>',
        '<p>Comentário:${comment}</p>',
        screenshot ? '<img src="${screenshot}" />' : null,
        '</div>'
      ].join('\n')
     })
  }
}