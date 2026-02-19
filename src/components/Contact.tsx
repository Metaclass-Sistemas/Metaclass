import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para transformar seu negócio com nossas soluções
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-14 h-14 bg-gradient-totvs rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <a href="mailto:contato@metaclass.com.br" className="text-brand-blue hover:underline">
              contato@metaclass.com.br
            </a>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-14 h-14 bg-gradient-totvs rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Telefone</h3>
            <a href="tel:+5511999999999" className="text-brand-blue hover:underline">
              (11) 99999-9999
            </a>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="w-14 h-14 bg-gradient-totvs rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold mb-2">Endereço</h3>
            <p className="text-gray-600">
              São Paulo, SP<br />Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
