import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Mail,
  Code2,
  Laptop,
  Users,
  TrendingUp,
  Heart,
  Zap,
  MessageSquare,
  BookOpen,
  Globe,
  Coffee,
  Star,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TrabalheConosco() {
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
              <p className="text-totvs-cyan font-semibold uppercase tracking-wide text-sm">Trabalhe conosco</p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
                Construa coisas que importam, com um time que{' '}
                <span className="text-totvs-cyan">leva qualidade a sério</span>
              </h1>
              <p className="mt-6 text-white/75 text-xl leading-relaxed max-w-2xl">
                Na Metaclass, profissionais de tecnologia trabalham em produtos e sistemas que geram impacto real —
                com processo, padrões e autonomia para fazer o trabalho com excelência.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:talentos@metaclass.com.br?subject=Trabalhe%20conosco%20-%20Metaclass"
                  className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300"
                >
                  Enviar currículo
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/quem-somos"
                  className="inline-flex items-center gap-2 border border-slate-700 text-white/90 px-8 py-4 rounded-full font-bold hover:border-totvs-cyan hover:text-totvs-cyan transition-all duration-300"
                >
                  Conhecer a Metaclass
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Por que trabalhar conosco */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-14 items-start">
              <div className="lg:col-span-5">
                <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Nosso jeito</div>
                <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold leading-tight">
                  Remote-first, sem abrir mão do profissionalismo
                </h2>
                <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                  Somos um time 100% remoto — e isso funciona porque investimos em processo, não em controle.
                  Comunicação clara, contexto compartilhado, responsabilidade por entrega e padrões técnicos
                  rigorosos criam um ambiente onde profissionais sérios prosperam.
                </p>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  Aqui você trabalha com autonomia real, em projetos que chegam em produção e são usados por pessoas
                  reais — com a satisfação de saber que o que você fez importa.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    'Comunicação assíncrona eficiente com checkpoints objetivos',
                    'Planejamento claro com critérios de aceite bem definidos',
                    'Code review estruturado e feedback técnico de qualidade',
                    'Documentação ativa de decisões e contexto de projeto',
                    'Autonomia técnica com responsabilidade compartilhada',
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
                    icon: Code2,
                    title: 'Padrão de engenharia',
                    text: 'Boas práticas como rotina: code review em todo PR, testes automatizados, CI/CD e arquitetura documentada. Aqui você aprende e é cobrado pelo padrão certo.',
                  },
                  {
                    icon: Laptop,
                    title: 'Ambiente remoto de verdade',
                    text: 'Processo pensado para o remote: documentação clara, comunicação assíncrona eficiente e reuniões apenas quando necessárias.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Orientado a impacto',
                    text: 'Projetos reais, clientes reais, resultados mensuráveis. O que você constrói entra em produção e muda a operação de empresas.',
                  },
                  {
                    icon: BookOpen,
                    title: 'Evolução contínua',
                    text: 'Aprendizado como parte do trabalho: trocas técnicas, revisões de arquitetura, feedback ativo e espaço para crescer sem burocracia.',
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

        {/* Cultura / Valores */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Cultura</div>
              <h2 className="mt-3 font-display text-4xl font-bold text-white">O que valorizamos em quem trabalha conosco</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Mais do que skills técnicas, buscamos pessoas que se identificam com nossa forma de trabalhar.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  icon: Star,
                  title: 'Excelência sem ego',
                  text: 'Você busca fazer o melhor trabalho possível, recebe feedback bem, dá feedback construtivo e coloca o resultado acima da vaidade.',
                },
                {
                  icon: MessageSquare,
                  title: 'Comunicação clara',
                  text: 'Você comunica bloqueios cedo, documenta decisões e escreve mensagens que as pessoas entendem sem precisar perguntar.',
                },
                {
                  icon: Heart,
                  title: 'Responsabilidade real',
                  text: 'Você trata o projeto como seu: monitora, avisa problemas antes que virem incidentes e se importa com o resultado final.',
                },
                {
                  icon: Zap,
                  title: 'Senso de urgência',
                  text: 'Você entende que deadlines importam e sabe priorizar o que gera mais impacto — sem travar em detalhes que não fazem diferença.',
                },
                {
                  icon: Globe,
                  title: 'Visão de produto',
                  text: 'Você pensa além da task: entende o contexto de negócio e faz perguntas que melhoram o produto, não só o código.',
                },
                {
                  icon: Coffee,
                  title: 'Consistência',
                  text: 'Você entrega com regularidade, mantém a qualidade no dia a dia e não depende de motivação extra para fazer um bom trabalho.',
                },
              ].map((v) => (
                <div key={v.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
                  <div className="w-11 h-11 rounded-2xl bg-totvs-cyan/15 border border-totvs-cyan/20 flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-totvs-cyan" />
                  </div>
                  <div className="font-bold text-white text-lg">{v.title}</div>
                  <div className="mt-2 text-white/60 text-sm leading-relaxed">{v.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas e perfis buscados */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Perfis</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                Áreas em que sempre estamos de olho
              </h2>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                Mesmo sem vagas abertas no momento, mantemos banco de talentos ativo. Se seu perfil tiver aderência,
                entraremos em contato.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  area: 'Engenharia Backend',
                  description: 'APIs, microsserviços, integrações e sistemas distribuídos',
                  stack: ['Node.js, Python, Java, Go', 'PostgreSQL, Redis, MongoDB', 'Docker, Kubernetes, AWS'],
                  seniority: 'Pleno / Sênior',
                },
                {
                  area: 'Engenharia Frontend',
                  description: 'Interfaces modernas, performáticas e acessíveis',
                  stack: ['React, Next.js, TypeScript', 'Tailwind CSS, design systems', 'Testes, performance e SEO'],
                  seniority: 'Pleno / Sênior',
                },
                {
                  area: 'Mobile (React Native)',
                  description: 'Apps iOS e Android com experiência nativa de qualidade',
                  stack: ['React Native + TypeScript', 'Expo, deep links, notificações', 'CI/CD mobile e lojas'],
                  seniority: 'Pleno / Sênior',
                },
                {
                  area: 'Product Manager',
                  description: 'Produto orientado a dados com visão de negócio',
                  stack: ['Discovery, roadmap e priorização', 'Métricas e analytics', 'Comunicação com stakeholders'],
                  seniority: 'Sênior',
                },
                {
                  area: 'DevOps / SRE',
                  description: 'Infraestrutura, CI/CD, observabilidade e confiabilidade',
                  stack: ['AWS/GCP/Azure, Terraform', 'GitHub Actions, GitLab CI', 'Datadog, Grafana, alertas'],
                  seniority: 'Pleno / Sênior',
                },
                {
                  area: 'QA / SDET',
                  description: 'Qualidade integrada ao processo de desenvolvimento',
                  stack: ['Testes automatizados E2E', 'Jest, Playwright, Cypress', 'Estratégia de testes e CI'],
                  seniority: 'Pleno / Sênior',
                },
              ].map((a) => (
                <div key={a.area} className="rounded-3xl border border-gray-100 bg-white shadow-lg p-7 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="font-bold text-lg">{a.area}</div>
                    <div className="text-xs font-semibold text-totvs-cyan border border-totvs-cyan/30 rounded-full px-2.5 py-1 bg-totvs-cyan/5 whitespace-nowrap ml-2">
                      {a.seniority}
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{a.description}</p>
                  <div className="mt-5 space-y-1.5">
                    {a.stack.map((s) => (
                      <div key={s} className="flex items-start gap-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-totvs-cyan mt-1.5 flex-shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Benefícios</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">O que faz parte do pacote</h2>
              <p className="mt-3 text-gray-600 max-w-xl mx-auto">
                Além de trabalho desafiador, oferecemos condições para você trabalhar com qualidade de vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Laptop,
                  title: '100% remoto',
                  text: 'Trabalhe de onde você quiser, com horário flexível orientado a entrega — não a presença.',
                },
                {
                  icon: TrendingUp,
                  title: 'Crescimento real',
                  text: 'Feedback contínuo, projetos desafiadores e evolução técnica como parte do trabalho, não extra.',
                },
                {
                  icon: Users,
                  title: 'Time sênior',
                  text: 'Trabalhe lado a lado com profissionais experientes que elevam o nível do time.',
                },
                {
                  icon: BadgeCheck,
                  title: 'Padrões que importam',
                  text: 'Você vai aprender e praticar as melhores práticas de engenharia de software no dia a dia.',
                },
              ].map((b) => (
                <div key={b.title} className="rounded-3xl border border-gray-100 bg-white shadow-lg p-7">
                  <div className="w-12 h-12 rounded-2xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-5 font-bold text-lg">{b.title}</div>
                  <div className="mt-2 text-sm text-gray-600 leading-relaxed">{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo seletivo */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-8 md:p-14">
              <div className="grid md:grid-cols-12 gap-10 items-start">
                <div className="md:col-span-4">
                  <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Processo seletivo</div>
                  <div className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">Objetivo, respeitoso e transparente</div>
                  <div className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Nosso processo é desenhado para avaliar o que importa de verdade — experiência real, forma de
                    pensar e alinhamento cultural — sem tarefas longas sem propósito.
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      'Você recebe feedback em todas as etapas',
                      'Sem testes de 8 horas sem contexto',
                      'Prazos e próximos passos sempre comunicados',
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-totvs-cyan mt-0.5 flex-shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
                  {[
                    {
                      step: '01',
                      title: 'Triagem inicial',
                      text: 'Análise do currículo ou LinkedIn. Precisamos entender área de atuação, senioridade, stack principal e disponibilidade. Links (GitHub, portfólio) são bem-vindos.',
                      duration: '2–3 dias úteis',
                    },
                    {
                      step: '02',
                      title: 'Conversa técnica',
                      text: 'Papo direto sobre sua experiência real: projetos que tocou, decisões técnicas que tomou, trade-offs que enfrentou e como você resolve problemas complexos.',
                      duration: '45–60 minutos',
                    },
                    {
                      step: '03',
                      title: 'Desafio técnico',
                      text: 'Apenas quando fizer sentido para a vaga: um desafio curto, com contexto claro, que pode ser feito em algumas horas. Sempre com feedback detalhado após.',
                      duration: '2–4 horas',
                    },
                    {
                      step: '04',
                      title: 'Proposta & onboarding',
                      text: 'Clareza total de expectativas, remuneração, rotinas, projetos e o que esperar do primeiro mês. Onboarding estruturado com plano de 30 dias.',
                      duration: 'Início rápido',
                    },
                  ].map((p) => (
                    <div key={p.step} className="rounded-3xl border border-gray-100 bg-gray-50 p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-totvs text-white font-bold flex items-center justify-center text-lg">
                          {p.step}
                        </div>
                        <div className="text-xs font-semibold text-gray-400">{p.duration}</div>
                      </div>
                      <div className="font-bold text-xl">{p.title}</div>
                      <div className="mt-2 text-gray-600 leading-relaxed text-sm">{p.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA / Contato */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-10 md:p-16">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Pronto para começar?</div>
                  <div className="mt-3 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                    Envie seu perfil e vamos ver se existe fit
                  </div>
                  <div className="mt-4 text-white/70 text-lg leading-relaxed">
                    Mande seu currículo ou LinkedIn para{' '}
                    <span className="text-totvs-cyan font-semibold">talentos@metaclass.com.br</span> com:
                    sua área de atuação, senioridade, stack principal e links de trabalhos anteriores, se tiver.
                  </div>
                  <div className="mt-4 text-white/50 text-sm">
                    Respondemos todos os contatos com aderência a oportunidades abertas ou futuras.
                  </div>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a
                    href="mailto:talentos@metaclass.com.br?subject=Trabalhe%20conosco%20-%20Metaclass"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300 w-full md:w-auto"
                  >
                    <Mail className="w-5 h-5" />
                    Enviar currículo
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
