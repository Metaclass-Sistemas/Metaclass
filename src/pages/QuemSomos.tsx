import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Target,
  Users,
  Rocket,
  TrendingUp,
  Globe,
  Award,
  Lightbulb,
  Heart,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function QuemSomos() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 201, 235, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 201, 235, 0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-totvs-cyan font-semibold tracking-wide uppercase text-sm">Quem somos</p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
                Tecnologia que transforma operações em{' '}
                <span className="text-totvs-cyan">vantagem competitiva</span>
              </h1>
              <p className="mt-6 text-white/75 text-xl leading-relaxed max-w-2xl">
                A Metaclass é uma empresa de tecnologia especializada em engenharia de software enterprise. Combinamos
                rigor técnico, metodologia de produto e parceria de longo prazo para entregar software que funciona —
                e continua funcionando.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300"
                >
                  Falar com especialista
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/cases"
                  className="inline-flex items-center gap-2 border border-slate-700 text-white/90 px-8 py-4 rounded-full font-bold hover:border-totvs-cyan hover:text-totvs-cyan transition-all duration-300"
                >
                  Ver resultados
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Números / Prova social */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: '+50', label: 'projetos entregues com padrão enterprise', icon: Rocket },
                { value: '+30', label: 'clientes e parceiros atendidos no Brasil', icon: Users },
                { value: '100%', label: 'entregas com governança, CI/CD e observabilidade', icon: BadgeCheck },
                { value: 'LGPD', label: 'conformidade nativa em todos os sistemas desenvolvidos', icon: ShieldCheck },
              ].map((s) => (
                <div key={s.label} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                  <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/15 border border-totvs-cyan/20 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-totvs-cyan" />
                  </div>
                  <div className="mt-4 font-display text-4xl font-bold text-white">{s.value}</div>
                  <div className="mt-2 text-sm text-white/60 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nossa história */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-14 items-start">
              <div className="lg:col-span-5">
                <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Nossa origem</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
                  Nascemos para resolver problemas reais — não para vender horas
                </h2>
                <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                  A Metaclass nasceu da insatisfação com um mercado que entregava código sem responsabilidade sobre o
                  resultado. Fundada por profissionais que viveram a dor de sistemas frágeis, deploys manuais e
                  projetos sem governança, decidimos construir algo diferente.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Nossa premissa é simples: tecnologia sem processo é risco. Por isso integramos engenharia, produto
                  e gestão em cada entrega — desde o discovery até a sustentação em produção.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    'Experiência acumulada em produtos SaaS e sistemas críticos de negócio',
                    'Método próprio de entrega: discovery, arquitetura, sprints e critérios de aceite claros',
                    'Visibilidade real: indicadores, reporting e rastreabilidade em todo o ciclo',
                    'Evolução contínua: sustentação ativa, observabilidade e roadmap orientado a negócio',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-totvs-cyan mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: BadgeCheck,
                    title: 'Engenharia com critério',
                    text: 'Padrões rigorosos de código, revisão contínua, testes automatizados e rastreabilidade em cada entrega. Velocidade sem abrir mão de qualidade.',
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Segurança & LGPD by design',
                    text: 'Privacidade e segurança integradas desde a concepção: gestão de acessos, criptografia, logs de auditoria e conformidade com a legislação.',
                  },
                  {
                    icon: Target,
                    title: 'Foco em resultado de negócio',
                    text: 'Não entregamos features — entregamos impacto. Cada sprint é orientado a KPIs de negócio: eficiência, redução de risco e previsibilidade.',
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Parceria de longo prazo',
                    text: 'Construímos e sustentamos. Depois do go-live, mantemos observabilidade ativa, roadmap contínuo e melhoria progressiva do produto.',
                  },
                ].map((c) => (
                  <div key={c.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-7 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center">
                      <c.icon className="w-6 h-6" />
                    </div>
                    <div className="mt-5 font-bold text-xl">{c.title}</div>
                    <div className="mt-2 text-gray-600 leading-relaxed">{c.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manifesto / Por que existimos */}
        <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Nossa crença</div>
              <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold text-white leading-tight">
                Tecnologia que não gera resultado é custo
              </h2>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Acreditamos que software bem feito é um ativo estratégico, não uma despesa. Quando construído com
                método, governança e foco no negócio, ele reduz custos operacionais, acelera processos e cria
                vantagem competitiva sustentável.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: 'Clareza antes do código',
                  text: 'Todo projeto começa com discovery: mapeamos o problema real, definimos escopo e alinhamos expectativas antes de escrever a primeira linha de código.',
                },
                {
                  icon: Award,
                  title: 'Qualidade como rotina',
                  text: 'Code review, CI/CD, testes automatizados e observabilidade não são opcionais — fazem parte do fluxo padrão de todas as nossas entregas.',
                },
                {
                  icon: Globe,
                  title: 'Transparência total',
                  text: 'Reporting executivo, indicadores de progresso e comunicação clara. Você sempre sabe o que está sendo feito, o que vem a seguir e por quê.',
                },
              ].map((p) => (
                <div key={p.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                  <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/15 border border-totvs-cyan/20 flex items-center justify-center">
                    <p.icon className="w-6 h-6 text-totvs-cyan" />
                  </div>
                  <div className="mt-5 font-bold text-xl text-white">{p.title}</div>
                  <div className="mt-3 text-white/60 leading-relaxed">{p.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultura e jeito de ser */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Cultura</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
                  Um time que pensa em produto, não só em tarefa
                </h2>
                <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                  Na Metaclass, engenheiros têm contexto de negócio. Designers pensam em conversão. Product managers
                  priorizam com dados. Essa visão integrada é o que nos permite entregar produtos que as pessoas
                  realmente usam — e que os negócios realmente precisam.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Operamos de forma remota, com comunicação assíncrona estruturada, documentação ativa e rituais
                  leves que mantêm o time alinhado sem reuniões desnecessárias.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[
                  {
                    icon: Heart,
                    title: 'Propósito claro',
                    text: 'Cada projeto tem contexto de impacto. Sabemos por que estamos construindo e para quem.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Melhoria contínua',
                    text: 'Retrospectivas, métricas de qualidade e evolução técnica fazem parte da nossa rotina.',
                  },
                  {
                    icon: Users,
                    title: 'Colaboração real',
                    text: 'Times multidisciplinares com responsabilidade compartilhada sobre o resultado.',
                  },
                  {
                    icon: Rocket,
                    title: 'Velocidade com controle',
                    text: 'Entregamos rápido sem abrir mão de padrões — porque processo é o que garante velocidade sustentável.',
                  },
                ].map((c) => (
                  <div key={c.title} className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
                    <div className="w-10 h-10 rounded-xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="mt-4 font-bold text-base">{c.title}</div>
                    <div className="mt-1 text-sm text-gray-600 leading-relaxed">{c.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trajetória / Marcos */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Nossa jornada</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">Da prática ao padrão enterprise</h2>
              <p className="mt-4 text-lg text-gray-600">
                Cada fase da nossa trajetória foi construída com aprendizado real — de projeto em projeto, cliente em
                cliente, entrega em entrega.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {[
                {
                  phase: 'Fase 1',
                  title: 'Fundação na prática',
                  text: 'Começamos resolvendo gargalos operacionais reais: integrações entre sistemas legados, automação de processos manuais e desenvolvimento de software sob medida para operações que dependiam de estabilidade.',
                  highlights: ['Primeiros projetos de integração', 'Foco em disponibilidade e confiabilidade', 'Consolidação de processo de entrega'],
                },
                {
                  phase: 'Fase 2',
                  title: 'Maturidade de entrega',
                  text: 'Com o volume de projetos crescendo, investimos em processo, governança e padrões técnicos. CI/CD, code review estruturado, observabilidade e reporting executivo passaram a ser parte padrão de cada engajamento.',
                  highlights: ['Método de delivery consolidado', 'Time multidisciplinar estruturado', 'Primeiros squads dedicados'],
                },
                {
                  phase: 'Fase 3',
                  title: 'Produtos SaaS próprios',
                  text: 'A maturidade de produto nos permitiu lançar plataformas SaaS verticais, começando com o BeautyGest — solução completa de gestão para o setor de beleza e estética. Mais produtos em desenvolvimento.',
                  highlights: ['BeautyGest em produção', 'Arquitetura cloud-native', 'Roadmap de novos produtos'],
                },
              ].map((m) => (
                <div key={m.title} className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="inline-block text-xs font-bold text-totvs-cyan border border-totvs-cyan/30 rounded-full px-3 py-1 bg-totvs-cyan/5">
                    {m.phase}
                  </div>
                  <div className="mt-4 font-bold text-xl">{m.title}</div>
                  <div className="mt-2 text-gray-600 leading-relaxed text-sm">{m.text}</div>
                  <div className="mt-5 space-y-2">
                    {m.highlights.map((h) => (
                      <div key={h} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-totvs-cyan mt-0.5 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-10 md:p-16">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Próximo passo</div>
                  <div className="mt-3 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                    Vamos mapear seu cenário e construir um plano de entrega sob medida
                  </div>
                  <div className="mt-4 text-white/70 text-lg leading-relaxed">
                    Em uma conversa objetiva com nosso time técnico, você recebe diagnóstico, direcionamento e
                    estimativa — com total clareza do que será entregue e em quanto tempo.
                  </div>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300 w-full md:w-auto"
                  >
                    Solicitar contato
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
