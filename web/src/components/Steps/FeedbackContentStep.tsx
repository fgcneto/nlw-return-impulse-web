import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import { CloseButton } from "../CloseButton";
import { Loading } from "../Loading";
import { FeedbackType, feedbackTypes } from "../WidgetForm/index";
import { ScreenshotButton } from "../WidgetForm/ScreenshotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartResquested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
  feedbackType, 
  onFeedbackRestartResquested, 
  onFeedbackSent 
} : FeedbackContentStepProps) {
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback (event: FormEvent){
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot
    });
    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
  // <> -> fragment
  <> 
    <header>
      <button 
      type="button" 
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
      onClick={ onFeedbackRestartResquested }
      >
        <ArrowLeft weight="bold" className="w-4 h-4"/>
      </button>
      <span className="text-xl leading-6 flex items-center gap-2">
        <img src={ feedbackTypeInfo.image.source } alt={ feedbackTypeInfo.image.alt } className="w-6 h-6" />
        { feedbackTypeInfo.title }
      </span>

      <CloseButton/>
    </header>

    <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
      <textarea 
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-x-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-track-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte seu Problema..."
        // atualiza o estado setComment em tempo real que o usuário atualiza o texto
        onChange={event => setComment(event.target.value)}
      />

      <footer className="flex gap-2 mt-2">

      <ScreenshotButton
        screenshot = {screenshot}
        onScreenshotTook = {setScreenshot}
      />

        <button
          type="submit"
          disabled={comment.length === 0}
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          { isSendingFeedback ? <Loading /> :  'Enviar Feedback' }
        </button>
      </footer>
    </form>
  </>
  )
}