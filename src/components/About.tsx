import { Target, Lightbulb, Users, Award } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Sobre a <span className="text-gradient">Metaclass</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma empresa de tecnologia brasileira especializada em desenvolver 
            soluções SaaS inovadoras que transformam a gestão de negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-totvs rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Missão</h3>
            <p className="text-gray-600">
              Simplificar a gestão empresarial através de tecnologia de ponta
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-totvs rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Visão</h3>
            <p className="text-gray-600">
              Ser referência nacional em soluções SaaS para diversos segmentos
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-totvs rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Valores</h3>
            <p className="text-gray-600">
              Inovação, qualidade, transparência e foco no cliente
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-totvs rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-2">Excelência</h3>
            <p className="text-gray-600">
              Compromisso com resultados e satisfação dos nossos clientes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
