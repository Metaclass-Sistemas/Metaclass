import { FileText } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero Header */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(0, 201, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 201, 235, 0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 text-white">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-totvs-cyan/20 backdrop-blur border border-totvs-cyan/30">
                <FileText className="h-7 w-7 text-totvs-cyan" />
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold">Termos de Uso</h1>
                <p className="mt-1 text-white/70 text-sm sm:text-base">
                  Última atualização: fevereiro de 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-3xl">
          <div className="space-y-8 text-gray-700">
            <p className="text-base leading-relaxed">
              Bem-vindo à Metaclass. Ao acessar ou utilizar nossa plataforma e produtos, você concorda com os
              presentes Termos de Uso. Recomendamos a leitura atenta antes de utilizar nossos
              serviços.
            </p>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                1. Aceitação dos termos
              </h2>
              <p className="text-base leading-relaxed">
                O uso dos produtos e serviços Metaclass implica a aceitação integral destes
                Termos. Caso não concorde com qualquer disposição, solicitamos que não utilize nossos
                produtos. A continuação do uso após alterações constitui aceitação das novas
                condições.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                2. Descrição dos serviços
              </h2>
              <p className="text-base leading-relaxed">
                A Metaclass oferece soluções SaaS de gestão empresarial para diferentes segmentos,
                incluindo BeautyGest e outros produtos. O escopo exato dos serviços depende do
                produto e plano contratado.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                3. Cadastro e responsabilidade
              </h2>
              <p className="text-base leading-relaxed">
                O usuário é responsável pela veracidade dos dados informados no cadastro e por
                manter a confidencialidade de sua senha. O uso da conta é de sua exclusiva
                responsabilidade. A Metaclass não se responsabiliza por uso indevido em caso de
                negligência do usuário.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                4. Uso aceitável
              </h2>
              <p className="text-base leading-relaxed">
                É vedado utilizar nossos produtos para fins ilícitos, ofensivos ou que prejudiquem
                terceiros. O usuário compromete-se a não violar leis aplicáveis, não difundir
                malware, não tentar acessar áreas restritas do sistema sem autorização e a respeitar
                a propriedade intelectual da Metaclass e de terceiros.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                5. Propriedade intelectual
              </h2>
              <p className="text-base leading-relaxed">
                Todo o conteúdo dos produtos Metaclass (interface, textos, marcas, lógica de negócio e
                demais elementos) é de propriedade da Metaclass ou de seus licenciadores. Nenhuma
                licença ou direito de uso é concedido além do acesso aos produtos nos termos
                contratados.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                6. Pagamento e cancelamento
              </h2>
              <p className="text-base leading-relaxed">
                Os valores e condições de pagamento constam no plano escolhido e em materiais
                promocionais aplicáveis. O cancelamento pode ser realizado conforme as condições
                do plano. Reembolsos estão sujeitos à política de reembolso vigente no momento da
                contratação.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                7. Limitação de responsabilidade
              </h2>
              <p className="text-base leading-relaxed">
                A Metaclass se empenha em manter os produtos estáveis e seguros, porém não se
                responsabiliza por danos indiretos, lucros cessantes ou perda de dados decorrentes
                do uso ou da impossibilidade de uso dos serviços, dentro dos limites permitidos pela
                lei.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                8. Alterações
              </h2>
              <p className="text-base leading-relaxed">
                Podemos alterar estes Termos de Uso a qualquer momento. Alterações relevantes
                serão comunicadas por e-mail ou por aviso nos produtos. O uso continuado após
                a divulgação constitui aceitação das alterações.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                9. Lei aplicável e foro
              </h2>
              <p className="text-base leading-relaxed">
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais
                disputas serão submetidas ao foro da comarca do domicílio do usuário, com
                renúncia a qualquer outro, por mais privilegiado que seja.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-gray-900 mb-3 border-b border-totvs-cyan/30 pb-2">
                10. Contato
              </h2>
              <p className="text-base leading-relaxed">
                Para dúvidas sobre estes Termos de Uso, entre em contato através do e-mail{' '}
                <a href="mailto:contato@metaclass.com.br" className="text-totvs-cyan hover:text-totvs-cyan font-medium underline underline-offset-2">
                  contato@metaclass.com.br
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
