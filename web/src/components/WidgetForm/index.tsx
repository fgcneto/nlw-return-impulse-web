import { CloseButton } from "../CloseButton"

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "../Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "../Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "../Steps/FeedbackSuccessStep";


 export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto"
    },
  },
  IDEA: {
    title: "Idéia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada"
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de uma nuvem de pensamento"
    },
  }
}

// Object.entries(feedbackTypes) => retorna
/* 
[
  ["BUG", {...}],
  ["IDEA", {...}],
  ["THOUGHT", {...}]
] 
*/
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [feedbackType, setFeedBackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handledRestartFeedBack(){
    setFeedbackSent(false);
    setFeedBackType(null);
  }

  return (
    // w-[calc(100vw-2rem) -> ocupa 100% da tela menos 2rem=4
    // md:w-auto -> quando aumentar o tamanho da tela deixa fixo o widgetForm
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      { feedbackSent ? (
        <FeedbackSuccessStep handledRestartFeedBack={handledRestartFeedBack} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep 
            onFeedbackTypeChanged={setFeedBackType}
            />
          ) : (
            <FeedbackContentStep 
            feedbackType={feedbackType}
            onFeedbackRestartResquested={handledRestartFeedBack}
            onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        Desenvolvido por <a className="underline underline-offset-2" href="www.ftpinformatica.com">FTP Informática</a>
      </footer>
    </div>
  );
}