import { ExternalLink, Scissors, Calendar, TrendingUp, Users } from 'lucide-react'

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="text-gradient">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ferramentas poderosas desenvolvidas para impulsionar seu negócio
          </p>
        </div>

        {/* BeautyGest Product Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Info */}
            <div className="p-8 md:p-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-totvs/10 border border-totvs-cyan/30 mb-6">
                <Scissors className="w-4 h-4 text-totvs-cyan" />
                <span className="text-sm font-semibold text-gray-700">Gestão de Salões</span>
              </div>
              
              <div className="mb-4">
                <h3 className="font-display text-3xl md:text-4xl font-bold">
                  BeautyGest
                </h3>
                <p className="text-sm text-gray-500 mt-1">by Metaclass</p>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Sistema completo de gestão para salões de beleza. Controle agendamentos, 
                finanças, clientes, equipe e estoque em uma plataforma moderna e intuitiva.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-totvs-cyan" />
                  <span>Agenda Inteligente</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <TrendingUp className="w-5 h-5 text-totvs-cyan" />
                  <span>Controle Financeiro Completo</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users className="w-5 h-5 text-totvs-cyan" />
                  <span>Gestão de Clientes e Equipe</span>
                </div>
              </div>

              <a
                href="/beautygest"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300"
              >
                Conhecer BeautyGest
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            {/* Right: Visual/Screenshot */}
            <div className="bg-gradient-to-br from-totvs-cyan to-totvs-cyan p-8 md:p-12 min-h-[400px] flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center">
                <img
                  src="/beautyg-horizontal.svg"
                  alt="BeautyGest"
                  className="h-20 w-auto mx-auto mb-4"
                />
                <p className="text-sm opacity-80 mt-2">by Metaclass</p>
                <p className="text-base opacity-90 mt-3">Gestão Profissional para Salões</p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Products Teaser */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-lg">
            Mais produtos incríveis em desenvolvimento... 🚀
          </p>
        </div>
      </div>
    </section>
  )
}
