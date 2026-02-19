import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="solucoes" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dark Background - Consistente com Navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Sutis efeitos de luz */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 201, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 201, 235, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-brand-blue/20 mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-brand-blue" />
            <span className="text-sm font-semibold text-white/90">
              Transformando negócios através da tecnologia
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Tecnologia que acelera operações
            <br />e sustenta crescimento
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Desenvolvemos sistemas SaaS de ponta que elevam a produtividade e
            impulsionam resultados reais para empresas que querem crescer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#produtos"
              className="group bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 flex items-center gap-2"
            >
              Conheça Nossos Produtos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-700 text-white hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
            >
              Fale Conosco
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">+500</div>
              <div className="text-gray-400">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">99.9%</div>
              <div className="text-gray-400">Uptime Garantido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-400">Suporte Dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
