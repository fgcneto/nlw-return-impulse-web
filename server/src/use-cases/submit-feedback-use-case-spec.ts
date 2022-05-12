import { SubmitFeedbackUseCase } from './submit-feedback-use-case'

describe('submit feedbackup', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedbackup = new SubmitFeedbackUseCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    )
    await expect(
      submitFeedbackup.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'teste.jpg'
      })
    ).resolves.not.toThrow()
  })
})
