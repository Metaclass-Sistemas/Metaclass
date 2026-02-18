import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Handshake,
  Layers,
  Shield,
  Zap,
  Code2,
  GitMerge,
  Cloud,
  Database,
  Monitor,
  Lock,
  ClipboardList,
  BarChart3,
  Settings,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Servicos() {
  const services = [
    {
      icon: Layers,
      tag: 'Produto Digital',
      title: 'Squads & Produto Digital',
      description:
        'Times multidisciplinares dedicados para construir e evoluir produtos digitais com velocidade, qualidade e governança. Do MVP à escala enterprise.',
      bullets: [
        'Product Manager dedicado ao seu produto',
        'Engenheiros full-stack, mobile e QA',
        'Sprints semanais com critérios de aceite claros',
        'Roadmap priorizado com foco em negócio',
        'Code review, CI/CD e cobertura de testes',
      ],
      useCases: ['Aplicativos e plataformas web', 'Sistemas de gestão internos', 'APIs e microsserviços', 'Produtos SaaS verticais'],
    },
    {
      icon: Zap,
      tag: 'Automação',
      title: 'Integrações & Automação',
      description:
        'Conectamos sistemas legados e modernos, automatizamos fluxos críticos e eliminamos retrabalho operacional — com rastreabilidade e observabilidade em tempo real.',
      bullets: [
        'Integrações via REST, GraphQL, SOAP e filas',
        'Automação de processos manuais e repetitivos',
        'ETL, pipelines de dados e sincronização',
        'Webhooks, eventos e mensageria (RabbitMQ, SQS)',
        'Monitoramento e alertas de integrações',
      ],
      useCases: ['ERPs, CRMs e sistemas legados', 'Marketplaces e gateways de pagamento', 'Plataformas de logística', 'Ferramentas de BI e analytics'],
    },
    {
      icon: Shield,
      tag: 'Infraestrutura',
      title: 'Modernização & Segurança',
      description:
        'Migração para cloud, refatoração de sistemas críticos, hardening de segurança e conformidade com LGPD — sem parar a operação.',
      bullets: [
        'Migração para AWS, GCP ou Azure',
        'Containerização com Docker e Kubernetes',
        'Hardening de segurança e gestão de acessos',
        'Conformidade com LGPD by design',
        'Observabilidade: logs, métricas e alertas',
      ],
      useCases: ['Sistemas monolíticos para cloud', 'Adequação à LGPD', 'Performance e estabilidade', 'Redução de custo de infraestrutura'],
    },
  ]

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
              <p className="text-totvs-cyan font-semibold uppercase tracking-wide text-sm">Serviços Enterprise</p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
                Construímos e evoluímos sistemas críticos com{' '}
                <span className="text-totvs-cyan">padrão enterprise</span>
              </h1>
              <p className="mt-6 text-white/75 text-xl leading-relaxed max-w-2xl">
                Do discovery ao deploy em produção: squads dedicados, integrações robustas, modernização de
                infraestrutura e sustentação contínua — com foco em impacto de negócio mensurável.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="/contato"
                  className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300"
                >
                  Solicitar proposta
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/cases"
                  className="inline-flex items-center gap-2 border border-slate-700 text-white/90 px-8 py-4 rounded-full font-bold hover:border-totvs-cyan hover:text-totvs-cyan transition-all duration-300"
                >
                  Ver cases de sucesso
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais rápidos */}
        <section className="py-14 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code2, title: 'Engenharia com padrão', text: 'Code review, CI/CD, testes e rastreabilidade em todo ciclo' },
                { icon: GitMerge, title: 'Delivery previsível', text: 'Sprints estruturadas, critérios de aceite e reporting executivo' },
                { icon: Lock, title: 'Segurança & LGPD', text: 'Privacidade e segurança integradas por design em cada sistema' },
                { icon: BarChart3, title: 'Foco em resultado', text: 'Métricas de negócio como norte de cada decisão técnica' },
              ].map((d) => (
                <div key={d.title} className="flex gap-4 items-start p-5 rounded-2xl border border-slate-800 bg-slate-900">
                  <div className="w-10 h-10 rounded-xl bg-totvs-cyan/15 border border-totvs-cyan/20 flex items-center justify-center flex-shrink-0">
                    <d.icon className="w-5 h-5 text-totvs-cyan" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{d.title}</div>
                    <div className="text-white/55 text-xs mt-1 leading-snug">{d.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços detalhados */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">O que fazemos</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                Serviços que <span className="text-gradient">geram resultado real</span>
              </h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Cada serviço é desenhado para resolver um problema de negócio específico — não para vender tecnologia
                pela tecnologia.
              </p>
            </div>

            <div className="space-y-10">
              {services.map((s, idx) => (
                <div
                  key={s.title}
                  className={`rounded-3xl border border-gray-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
                >
                  <div className="grid lg:grid-cols-12 gap-0">
                    <div className="lg:col-span-7 p-8 md:p-10">
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-totvs-cyan border border-totvs-cyan/30 rounded-full px-3 py-1 bg-totvs-cyan/5 mb-4">
                        <s.icon className="w-3.5 h-3.5" />
                        {s.tag}
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold">{s.title}</h3>
                      <p className="mt-3 text-gray-600 leading-relaxed text-lg">{s.description}</p>
                      <div className="mt-6 space-y-2">
                        {s.bullets.map((b) => (
                          <div key={b} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-totvs-cyan mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-5 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-gray-100">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Casos de uso</div>
                      <div className="space-y-3">
                        {s.useCases.map((u) => (
                          <div key={u} className="flex items-center gap-3 rounded-xl bg-white border border-gray-100 px-4 py-3 text-sm font-medium text-gray-700 shadow-sm">
                            <div className="w-2 h-2 rounded-full bg-totvs-cyan flex-shrink-0" />
                            {u}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href="/contato"
                          className="inline-flex items-center gap-2 text-sm font-bold text-totvs-cyan hover:underline"
                        >
                          Solicitar proposta para este serviço
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack e tecnologias */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Tecnologia</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Stack moderno com profundidade real</h2>
              <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                Trabalhamos com as tecnologias mais sólidas do mercado — escolhidas pelo fit com o problema,
                não pela moda.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  category: 'Frontend & Mobile',
                  items: ['React, Next.js, TypeScript', 'React Native (iOS & Android)', 'Vue.js, Angular', 'Tailwind CSS, design systems'],
                },
                {
                  icon: Database,
                  category: 'Backend & APIs',
                  items: ['Node.js, Python, Java, Go', 'REST, GraphQL, gRPC', 'Microserviços e event-driven', 'PostgreSQL, MySQL, MongoDB, Redis'],
                },
                {
                  icon: Cloud,
                  category: 'Cloud & Infra',
                  items: ['AWS, GCP, Azure', 'Docker, Kubernetes', 'Terraform, IaC', 'CI/CD com GitHub Actions, GitLab'],
                },
                {
                  icon: GitMerge,
                  category: 'Integrações',
                  items: ['REST, SOAP, webhooks', 'RabbitMQ, SQS, Kafka', 'ETL e pipelines de dados', 'ERPs, CRMs e marketplaces'],
                },
                {
                  icon: Monitor,
                  category: 'Observabilidade',
                  items: ['Datadog, New Relic, Grafana', 'ELK Stack (logs)', 'Alertas e dashboards', 'Rastreamento distribuído'],
                },
                {
                  icon: Lock,
                  category: 'Segurança',
                  items: ['OWASP top 10', 'LGPD by design', 'Gestão de segredos (Vault)', 'Pen testing e auditoria'],
                },
              ].map((t) => (
                <div key={t.category} className="rounded-3xl border border-gray-100 bg-white shadow-lg p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center">
                      <t.icon className="w-5 h-5" />
                    </div>
                    <div className="font-bold">{t.category}</div>
                  </div>
                  <div className="space-y-2">
                    {t.items.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-totvs-cyan mt-1.5 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo de entrega */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Como entregamos</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                Um processo que garante resultado
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Cada projeto passa pelo mesmo método rigoroso — adaptado à complexidade e urgência do seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  icon: ClipboardList,
                  title: 'Discovery',
                  text: 'Mapeamos o problema real: entendemos o negócio, objetivos, restrições técnicas e definimos escopo, roadmap e critérios de sucesso antes de qualquer linha de código.',
                  deliverables: ['Documento de contexto', 'Roadmap priorizado', 'Estimativa técnica'],
                },
                {
                  step: '02',
                  icon: Settings,
                  title: 'Arquitetura',
                  text: 'Definimos as decisões técnicas fundamentais: stack, modelo de dados, segurança, escalabilidade e padrões de integração — com documentação e revisão técnica.',
                  deliverables: ['Diagrama de arquitetura', 'Decisões técnicas documentadas', 'Plano de segurança'],
                },
                {
                  step: '03',
                  icon: Code2,
                  title: 'Entrega',
                  text: 'Sprints semanais com entrega contínua, code review, CI/CD e observabilidade desde o início. Você acompanha o progresso em tempo real com reporting executivo.',
                  deliverables: ['Demos semanais', 'Métricas de qualidade', 'Atualizações de progresso'],
                },
                {
                  step: '04',
                  icon: BarChart3,
                  title: 'Sustentação',
                  text: 'Depois do go-live, mantemos observabilidade ativa, SLA de atendimento, evolução contínua e roadmap orientado ao crescimento do produto.',
                  deliverables: ['SLA de atendimento', 'Relatórios mensais', 'Roadmap de evolução'],
                },
              ].map((step) => (
                <div key={step.step} className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-totvs text-white font-bold flex items-center justify-center text-lg">
                      {step.step}
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-totvs-cyan/10 border border-totvs-cyan/20 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-totvs-cyan" />
                    </div>
                  </div>
                  <div className="font-bold text-xl">{step.title}</div>
                  <div className="mt-2 text-sm text-gray-600 leading-relaxed">{step.text}</div>
                  <div className="mt-5 space-y-1.5">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Entregáveis</div>
                    {step.deliverables.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-totvs-cyan mt-0.5 flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modelos de engajamento + Governança */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Modelos */}
              <div className="lg:col-span-7 rounded-3xl border border-gray-100 bg-white shadow-lg p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold">Modelos de engajamento</div>
                    <div className="text-gray-600 text-sm">Escolha o formato ideal para sua urgência e previsibilidade.</div>
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-3 gap-5">
                  {[
                    {
                      title: 'Discovery',
                      badge: 'Exploratório',
                      text: 'Diagnóstico técnico completo com roadmap e estimativa. Ideal para quem ainda não sabe exatamente o escopo.',
                      duration: '1–2 semanas',
                    },
                    {
                      title: 'Squad dedicado',
                      badge: 'Contínuo',
                      text: 'Time alocado mensalmente para construir e evoluir continuamente seu produto ou sistema.',
                      duration: 'Mensal renovável',
                    },
                    {
                      title: 'Escopo fechado',
                      badge: 'Por projeto',
                      text: 'Entrega por projeto com marcos, critérios de aceite e previsibilidade total de prazo e custo.',
                      duration: 'Por entrega',
                    },
                  ].map((m) => (
                    <div key={m.title} className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
                      <div className="text-xs font-bold text-totvs-cyan mb-1">{m.badge}</div>
                      <div className="font-bold text-base">{m.title}</div>
                      <div className="mt-2 text-sm text-gray-600 leading-relaxed">{m.text}</div>
                      <div className="mt-3 text-xs text-gray-400 font-semibold">{m.duration}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Governança */}
              <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/15 border border-totvs-cyan/25 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-totvs-cyan" />
                  </div>
                  <div>
                    <div className="text-white font-display text-2xl font-bold">Governança & Qualidade</div>
                    <div className="text-white/70 text-sm">Padrão enterprise em cada entrega.</div>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    'Código limpo + code review obrigatório em todo PR',
                    'CI/CD com testes automatizados a cada deploy',
                    'Observabilidade: logs, métricas e alertas em produção',
                    'Segurança e LGPD validados antes de cada release',
                    'Documentação técnica e de decisões arquiteturais',
                    'Rotina de alinhamento e reporting executivo quinzenal',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2 text-sm text-white/75">
                      <CheckCircle2 className="w-4 h-4 text-totvs-cyan mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Setores atendidos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Setores</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
                Experiência em múltiplos segmentos
              </h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                Adaptamos nossa metodologia ao contexto de cada setor sem abrir mão dos padrões de qualidade.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { sector: 'Serviços & Beleza', description: 'Plataformas de gestão, agendamento e experiência do cliente' },
                { sector: 'Varejo & E-commerce', description: 'Integrações de estoque, pedidos, logística e omnichannel' },
                { sector: 'Saúde & Healthtech', description: 'Prontuários, telemedicina, integrações com planos de saúde' },
                { sector: 'Financeiro & Fintechs', description: 'Plataformas de crédito, pagamentos e conformidade regulatória' },
                { sector: 'Educação & EdTech', description: 'LMS, portais aluno, automação pedagógica e relatórios' },
                { sector: 'Indústria & Logística', description: 'WMS, TMS, rastreamento, IoT e painéis operacionais' },
              ].map((s) => (
                <div key={s.sector} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:shadow-md transition-all duration-200">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-totvs-cyan" />
                    <div className="font-bold text-base">{s.sector}</div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">{s.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8 md:p-12">
              <div className="font-display text-3xl md:text-4xl font-bold mb-2">Perguntas frequentes</div>
              <p className="text-gray-600 mb-8">Dúvidas comuns sobre como trabalhamos e o que entregamos.</p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    q: 'Vocês entregam só o desenvolvimento ou também a arquitetura?',
                    a: 'Os dois. Começamos com discovery e arquitetura — definimos stack, modelo de dados, segurança e padrões antes de codar. Você tem visibilidade das decisões técnicas desde o início.',
                  },
                  {
                    q: 'Como funciona o modelo de squad dedicado?',
                    a: 'Alocamos profissionais por competência (frontend, backend, produto, QA) com rotina de sprints, code review, CI/CD e indicadores. O time opera como extensão do seu negócio.',
                  },
                  {
                    q: 'Vocês integram com sistemas legados?',
                    a: 'Sim. Fazemos integrações via APIs REST, GraphQL, SOAP, filas de mensagem e webhooks. Temos experiência com ERPs (SAP, TOTVS), CRMs, marketplaces e plataformas de pagamento.',
                  },
                  {
                    q: 'Como garantem qualidade e segurança nas entregas?',
                    a: 'Boas práticas de código, code review em todo PR, CI/CD com testes automatizados, observabilidade em produção e postura de segurança e LGPD by design em cada sistema.',
                  },
                  {
                    q: 'Como funciona o processo de sustentação pós-entrega?',
                    a: 'Oferecemos sustentação com SLA definido: monitoramento ativo, atendimento de incidentes, evolução contínua e roadmap trimestral priorizado com base em dados de uso.',
                  },
                  {
                    q: 'Qual o prazo mínimo para começar um projeto?',
                    a: 'Um projeto de Discovery pode começar em 1 semana após o alinhamento inicial. Para squads dedicados, o onboarding médio é de 2–3 semanas.',
                  },
                ].map((item) => (
                  <div key={item.q} className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                    <div className="font-semibold text-gray-900">{item.q}</div>
                    <div className="mt-2 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                >
                  Solicitar proposta
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
