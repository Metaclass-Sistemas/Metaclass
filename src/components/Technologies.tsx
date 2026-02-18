import { Code2, Database, Cloud, Shield } from 'lucide-react'

export default function Technologies() {
  const techs = [
    { icon: Code2, title: 'React & TypeScript', description: 'Interfaces modernas e robustas' },
    { icon: Database, title: 'Supabase & PostgreSQL', description: 'Banco de dados escalável' },
    { icon: Cloud, title: 'Vercel & Edge Computing', description: 'Deploy global ultra-rápido' },
    { icon: Shield, title: 'Segurança de Ponta', description: 'Proteção de dados avançada' },
  ]

  return (
    <section id="tecnologias" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Tecnologias</span> de Ponta
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Utilizamos as melhores ferramentas do mercado para garantir 
            performance, segurança e escalabilidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-totvs rounded-xl flex items-center justify-center mb-4">
                <tech.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{tech.title}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
