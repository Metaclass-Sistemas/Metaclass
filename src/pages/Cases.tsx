import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Users,
  RefreshCw,
  BarChart3,
  Star,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Cases() {
  const cases = [
    {
      sector: 'SaaS / Produto Digital',
      title: 'Plataforma SaaS escalável do zero',
      subtitle: 'Arquitetura cloud-native, CI/CD e governança para crescimento sustentável',
      context:
        'Uma startup de tecnologia precisava sair do MVP artesanal para uma plataforma robusta capaz de suportar crescimento de 10x em clientes sem aumentar o time proporcionalmente.',
      metrics: [
        { label: '-60%', desc: 'tempo de deploy com CI/CD automatizado' },
        { label: '2x', desc: 'velocidade de release de novas features' },
        { label: '99.8%', desc: 'uptime desde a migração' },
      ],
      before: [
        'Deploy manual com alto risco de falha em produção',
        'Sem cobertura de testes automatizados',
        'Baixa visibilidade de erros em produção',
        'Arquitetura monolítica difícil de escalar',
      ],
      after: [
        'CI/CD com gates de qualidade e rollback automático',
        'Cobertura de testes superior a 80%',
        'Observabilidade com alertas acionáveis em tempo real',
        'Arquitetura modular pronta para crescimento',
      ],
      stack: ['AWS (ECS, RDS, S3)', 'Node.js + TypeScript', 'React + Next.js', 'GitHub Actions, Datadog'],
      testimonial: {
        quote:
          'A Metaclass transformou completamente nossa capacidade de entrega. Saímos de deploys que duravam horas e quebravam produção para um processo automatizado e confiável. Em 3 meses, dobramos a velocidade de release sem aumentar o time.',
        name: 'Ricardo Mendes',
        role: 'CTO · TechVenture SaaS',
        photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=120&q=80',
      },
    },
    {
      sector: 'Varejo / Operações',
      title: 'Automação de processos operacionais',
      subtitle: 'Integração com ERP, eliminação de retrabalho e rastreabilidade total',
      context:
        'Uma empresa de varejo regional operava com dezenas de planilhas e processos manuais entre sistemas. O retrabalho consumia horas por dia e os dados chegavam inconsistentes para a tomada de decisão.',
      metrics: [
        { label: '-45%', desc: 'horas em atividades manuais repetitivas' },
        { label: '-80%', desc: 'incidentes por dados inconsistentes entre sistemas' },
        { label: '3 dias', desc: 'para fechamento mensal (antes eram 10 dias)' },
      ],
      before: [
        'Pedidos digitados manualmente em múltiplos sistemas',
        'Dados de estoque defasados e inconsistentes',
        'Relatórios feitos em planilhas após o fechamento',
        'Sem rastreabilidade de quem fez o quê e quando',
      ],
      after: [
        'Integração automática entre ERP, e-commerce e logística',
        'Estoque sincronizado em tempo real',
        'Dashboards com indicadores disponíveis 24/7',
        'Trilha de auditoria completa de todas as operações',
      ],
      stack: ['Node.js + Python', 'RabbitMQ (mensageria)', 'PostgreSQL + Redis', 'Grafana, Webhook integrations'],
      testimonial: {
        quote:
          'Antes, nosso time passava horas todo dia reconciliando dados entre sistemas. Hoje isso é automático. O fechamento mensal que levava 10 dias agora leva 3. A Metaclass entendeu o problema de negócio — não apenas entregou código.',
        name: 'Fernanda Costa',
        role: 'Diretora de Operações · Varejo Regional Express',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80',
      },
    },
    {
      sector: 'Serviços / Beleza',
      title: 'Gestão digital para rede de franquias',
      subtitle: 'Plataforma unificada de agendamento, financeiro e experiência do cliente',
      context:
        'Uma rede com múltiplas unidades operava com sistemas desconectados: agendamentos em um app, financeiro em planilhas e atendimento sem histórico centralizado. Isso gerava perda de receita e experiência inconsistente.',
      metrics: [
        { label: '+32%', desc: 'produtividade operacional por unidade' },
        { label: '-25%', desc: 'cancelamentos com lembretes automatizados' },
        { label: '+18%', desc: 'retorno de clientes em 6 meses' },
      ],
      before: [
        'Agendamentos em WhatsApp e planilhas separadas',
        'Sem histórico centralizado de atendimento por cliente',
        'Financeiro consolidado manualmente por unidade',
        'Dificuldade de replicar padrão entre franquias',
      ],
      after: [
        'Plataforma única de agendamento com app e web',
        'CRM com histórico completo por cliente',
        'Dashboard financeiro unificado por rede',
        'Padronização de processos em todas as unidades',
      ],
      stack: ['React Native (mobile)', 'Next.js (web)', 'Node.js + PostgreSQL', 'Twilio (notificações), Stripe'],
      testimonial: {
        quote:
          'Hoje tenho visibilidade total da rede em tempo real — do agendamento ao financeiro. Cada franquia opera com o mesmo padrão de qualidade. Nossos clientes percebem a diferença e isso se reflete diretamente no número de retornos.',
        name: 'Marcos Oliveira',
        role: 'CEO · Rede Estilo Franquias',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,201,235,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,235,0.4) 1px,transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=50"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-totvs-cyan/30 bg-totvs-cyan/10 px-4 py-1.5 mb-6">
                  <BadgeCheck className="w-4 h-4 text-totvs-cyan" />
                  <span className="text-totvs-cyan font-semibold text-sm">Cases & Resultados</span>
                </div>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Entregas que geram{' '}
                  <span className="text-totvs-cyan">impacto real e mensurável</span>
                </h1>
                <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-xl">
                  Cada case representa um problema real de negócio resolvido com engenharia sólida, processo
                  estruturado e foco em resultado — não em tecnologia pela tecnologia.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-2 bg-totvs-cyan text-slate-950 px-8 py-4 rounded-full font-bold hover:brightness-110 hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300"
                  >
                    Quero resultado como esse
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/servicos"
                    className="inline-flex items-center gap-2 border border-slate-700 text-white/90 px-8 py-4 rounded-full font-bold hover:border-totvs-cyan hover:text-totvs-cyan transition-all duration-300"
                  >
                    Ver como trabalhamos
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                {[
                  { value: '3+', label: 'setores atendidos com resultados expressivos' },
                  { value: '99.8%', label: 'de uptime médio em sistemas sustentados' },
                  { value: '2x', label: 'mais velocidade de release com CI/CD' },
                  { value: '-45%', label: 'de retrabalho operacional com automação' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur p-5">
                    <div className="font-display text-3xl font-bold text-totvs-cyan">{s.value}</div>
                    <div className="mt-1 text-xs text-white/50 leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimento em destaque */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gray-50 border border-gray-100 overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-4 relative overflow-hidden min-h-[280px]">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                    alt="Equipe em reunião"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/50 md:to-gray-50/80" />
                </div>
                <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-5xl text-totvs-cyan font-serif leading-none mb-4">"</div>
                  <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed max-w-2xl">
                    Trabalhar com a Metaclass é diferente. Eles entendem o problema antes de propor qualquer
                    solução. Cada entrega tem impacto direto nos nossos indicadores de negócio.
                  </p>
                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b1e0?auto=format&fit=crop&w=80&q=80"
                      alt="Ana Paula Ribeiro"
                      className="w-14 h-14 rounded-full object-cover border-2 border-totvs-cyan/30"
                    />
                    <div>
                      <div className="font-bold text-gray-900">Ana Paula Ribeiro</div>
                      <div className="text-sm text-gray-500">Diretora de Tecnologia · Grupo Innovate</div>
                    </div>
                    <div className="sm:ml-auto flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-totvs-cyan text-totvs-cyan" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases detalhados */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Cases detalhados</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
                Problemas reais, resultados concretos
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Nossa metodologia é agnóstica de setor. O mesmo rigor de engenharia e processo gera resultado em
                qualquer contexto.
              </p>
            </div>

            <div className="space-y-16">
              {cases.map((c, idx) => (
                <div
                  key={c.title}
                  className="rounded-3xl overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  {/* Header escuro do case */}
                  <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 md:p-10">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                      <div>
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-totvs-cyan border border-totvs-cyan/30 rounded-full px-3 py-1 bg-totvs-cyan/10 mb-3">
                          {c.sector}
                        </div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-white">{c.title}</h3>
                        <p className="text-white/50 mt-1.5">{c.subtitle}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <div className="w-10 h-10 rounded-xl bg-totvs-cyan/15 border border-totvs-cyan/25 text-totvs-cyan flex items-center justify-center">
                          <BadgeCheck className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-totvs-cyan">Case #{idx + 1}</span>
                      </div>
                    </div>

                    {/* Métricas */}
                    <div className="grid sm:grid-cols-3 gap-4">
                      {c.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-2xl border border-slate-700/60 bg-slate-800/50 p-5 text-center"
                        >
                          <div className="font-display text-4xl font-bold text-totvs-cyan">{m.label}</div>
                          <div className="text-xs text-white/50 mt-1.5 leading-snug">{m.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body branco */}
                  <div className="p-8 md:p-10 bg-white">
                    {/* Contexto */}
                    <div className="mb-8">
                      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contexto</div>
                      <p className="text-gray-600 leading-relaxed">{c.context}</p>
                    </div>

                    {/* Antes e Depois */}
                    <div className="grid md:grid-cols-2 gap-5 mb-8">
                      <div className="rounded-2xl border border-red-100 bg-red-50/40 p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                            <span className="text-[10px] text-red-500 font-bold">✕</span>
                          </div>
                          <div className="font-bold text-gray-700">Cenário anterior</div>
                        </div>
                        <ul className="space-y-2.5">
                          {c.before.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-300 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          </div>
                          <div className="font-bold text-gray-700">Após entrega Metaclass</div>
                        </div>
                        <ul className="space-y-2.5">
                          {c.after.map((a) => (
                            <li key={a} className="flex items-start gap-2.5 text-sm text-gray-600">
                              <CheckCircle2 className="w-4 h-4 text-totvs-cyan mt-0.5 flex-shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Depoimento do case */}
                    <div className="rounded-2xl border border-totvs-cyan/15 bg-gradient-to-br from-totvs-cyan/5 to-transparent p-6 mb-8">
                      <div className="text-3xl text-totvs-cyan font-serif leading-none mb-3">"</div>
                      <p className="text-gray-700 leading-relaxed italic mb-5">{c.testimonial.quote}</p>
                      <div className="flex items-center gap-3 flex-wrap">
                        <img
                          src={c.testimonial.photo}
                          alt={c.testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-totvs-cyan/20"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-bold text-sm text-gray-900">{c.testimonial.name}</div>
                          <div className="text-xs text-gray-500">{c.testimonial.role}</div>
                        </div>
                        <div className="sm:ml-auto flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-totvs-cyan text-totvs-cyan" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stack + CTA */}
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                          Stack utilizada
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {c.stack.map((s) => (
                            <span
                              key={s}
                              className="text-xs font-medium rounded-full border border-slate-200 bg-gray-50 px-3 py-1 text-gray-600"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href="/contato"
                        className="inline-flex items-center gap-2 bg-totvs-cyan text-slate-950 px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all duration-200 whitespace-nowrap"
                      >
                        Quero resultado similar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foto + CTA intermediário */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=700&q=80"
                  alt="Reunião técnica da equipe"
                  className="w-full h-72 lg:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-7">
                <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">
                  Case do seu setor
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
                  Vamos mapear como esses resultados se aplicam ao seu negócio
                </h2>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Em uma conversa técnica objetiva e sem compromisso, apresentamos um diagnóstico inicial do seu
                  cenário e como poderíamos endereçar os principais desafios com engenharia de verdade.
                </p>
                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Clock, label: 'Resposta em até 24h' },
                    { icon: ShieldCheck, label: 'Sem compromisso' },
                    { icon: Users, label: 'Diagnóstico técnico real' },
                  ].map((f) => (
                    <div key={f.label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center flex-shrink-0">
                        <f.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{f.label}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contato"
                  className="mt-8 inline-flex items-center gap-2 bg-totvs-cyan text-slate-950 px-8 py-4 rounded-full font-bold hover:brightness-110 hover:shadow-xl hover:shadow-totvs-cyan/20 transition-all duration-300"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Como chegamos aqui</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
                O processo por trás dos resultados
              </h2>
              <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                Cada case acima passou pelo mesmo método — e é esse método que garante previsibilidade e qualidade
                independente do contexto.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: 'Diagnóstico antes de qualquer código',
                  text: 'Mapeamos o problema real: entendemos o negócio, objetivos, restrições e definimos o que mede sucesso. Nenhum projeto começa sem esse alinhamento.',
                  check: 'Evita retrabalho e garante escopo realista',
                },
                {
                  icon: RefreshCw,
                  title: 'Entrega com transparência total',
                  text: 'Sprints semanais, demos para validação, métricas de qualidade e reporting executivo. Você sempre sabe o que foi feito, o que vem e por quê.',
                  check: 'Sem surpresas no final do projeto',
                },
                {
                  icon: Users,
                  title: 'Sustentação ativa pós-go-live',
                  text: 'Depois da entrega, mantemos observabilidade ativa, SLA de atendimento, roadmap de evolução e melhoria contínua com dados de uso real.',
                  check: 'O investimento continua gerando retorno',
                },
              ].map((p) => (
                <div
                  key={p.title}
                  className="rounded-3xl border border-gray-100 bg-gray-50 shadow-md p-7 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center mb-5">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <div className="font-bold text-xl">{p.title}</div>
                  <div className="mt-2 text-sm text-gray-600 leading-relaxed">{p.text}</div>
                  <div className="mt-5 flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-totvs-cyan mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{p.check}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mais depoimentos */}
        <section className="py-20 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">
                O que nossos clientes dizem
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-white">Resultados que falam por si</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    'A Metaclass não é uma fábrica de software. É um parceiro técnico que entende de negócio. A diferença está nos resultados — não apenas no código entregue.',
                  name: 'Beatriz Santos',
                  role: 'COO · StartupFlow',
                  photo:
                    'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80',
                },
                {
                  quote:
                    'Processo organizado, comunicação clara e resultado real. Em 4 meses transformaram nossa operação de logística completamente. Não esperava tanto impacto tão rápido.',
                  name: 'Carlos Ferreira',
                  role: 'Gerente de TI · LogPrime',
                  photo:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80',
                },
                {
                  quote:
                    'O que mais me impressionou foi a capacidade de simplificar problemas complexos. Entregaram em 3 meses o que outras empresas estimaram em 1 ano.',
                  name: 'Juliana Alves',
                  role: 'Fundadora · MedConnect',
                  photo:
                    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
                },
              ].map((t) => (
                <div key={t.name} className="rounded-3xl border border-slate-800 bg-slate-900 p-7">
                  <div className="flex gap-0.5 mb-5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-totvs-cyan text-totvs-cyan" />
                    ))}
                  </div>
                  <p className="text-white/70 leading-relaxed mb-6 text-sm italic">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-700"
                      loading="lazy"
                    />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-white/40">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-10 md:p-16 overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(0,201,235,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,235,0.4) 1px,transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <div className="relative grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Começar agora</div>
                  <div className="mt-3 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                    Seu negócio pode ser o próximo case de resultado expressivo
                  </div>
                  <div className="mt-4 text-white/60 text-lg leading-relaxed">
                    O primeiro passo é uma conversa objetiva: entendemos seu contexto e apresentamos como
                    poderíamos gerar impacto concreto para sua operação.
                  </div>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center gap-2 bg-totvs-cyan text-slate-950 px-8 py-4 rounded-full font-bold hover:brightness-110 hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300 w-full md:w-auto"
                  >
                    Solicitar proposta
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
