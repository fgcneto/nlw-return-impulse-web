import {ChatTeardropDots} from 'phosphor-react';
import { Popover } from '@headlessui/react';
import { WidgetForm } from '../components/WidgetForm/index';

export function Widget(){

  return (
    <Popover className='absolute bottom-4 right-4 flex flex-col items-end'>

      <Popover.Panel>
        <WidgetForm/>
      </Popover.Panel>
      {/* bg-brand-500 -> fundo roxo
       rounded-full -> arrendonda por completo
       px-3 h-12 -> definição altura e largura
       text-white -> define borda do icone na cor branca
       flex -> pocisiona um aolado do outro
       items-center -> centraliza no centro 
       group -> faz um agrupamento em todo o botão
       */}
        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="w-6 h-6"/>
            {/* overflow-hidden ->  oculta texto  ou conteudo que sobreponha uma div ou elemento ex: max-w-0, esconde o texto: feedback.
            group-hover:max-w-xs -> ao passar o mouse aumenta para valor 320px
            duration-500 -> 
            ease-linear -> define uma velocidade linear */}
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear ">
              <span className="pl-2"></span>
              Feedback
            </span>
        </Popover.Button>
      </Popover>
  )
} 