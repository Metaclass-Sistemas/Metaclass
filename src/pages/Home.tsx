import { useEffect, useState, useCallback } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Layers,
  BarChart3,
  Clock,
  Users,
  Code2,
  Star,
} from 'lucide-react'

/* ─── SLIDES ─────────────────────────────────────────────── */
const slides = [
  {
    id: 0,
    /* fundo: escuro + gradiente lateral suave */
    bgClass: 'bg-gradient-to-r from-slate-950 via-slate-900 to-[#0c1a2e]',
    badge: 'Engenharia Enterprise · Brasil',
    eyebrow: 'Parceiro técnico de ponta a ponta',
    headline: 'Sistemas críticos construídos com método, governança e foco em resultado',
    sub: 'Squads dedicados, integrações robustas, modernização e sustentação — do discovery ao go-live.',
    cta: { label: 'Falar com especialista', href: '/contato' },
    ctaSecondary: { label: 'Ver serviços', href: '/servicos' },
    statsRow: [
      { value: '+50', label: 'projetos entregues' },
      { value: '+30', label: 'clientes ativos' },
      { value: '99.8%', label: 'uptime médio' },
    ],
    photo: {
      src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
      alt: 'Profissional de tecnologia',
    },
    accent: 'text-totvs-cyan',
    tagBg: 'bg-totvs-cyan/10 border-totvs-cyan/30 text-totvs-cyan',
  },
  {
    id: 1,
    /* fundo: gradiente mais claro / azul-aço */
    bgClass: 'bg-gradient-to-r from-[#0f2944] via-[#0a1f38] to-slate-950',
    badge: 'Produto SaaS · BeautyGest by Metaclass',
    eyebrow: 'Gestão completa para o setor de beleza',
    headline: 'Do agendamento ao financeiro: uma plataforma para gerenciar tudo com profissionalismo',
    sub: 'Salões, barbearias e clínicas estéticas que usam o BeautyGest fecham mais, perdem menos e crescem com controle.',
    cta: { label: 'Conhecer BeautyGest', href: '/produtos' },
    ctaSecondary: { label: 'Solicitar demo', href: '/contato' },
    statsRow: [
      { value: '+28%', label: 'receita média' },
      { value: '-30%', label: 'cancelamentos' },
      { value: '3h/dia', label: 'economizadas' },
    ],
    photo: {
      src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80',
      alt: 'Profissional do setor de beleza',
    },
    accent: 'text-cyan-400',
    tagBg: 'bg-cyan-400/10 border-cyan-400/30 text-cyan-400',
  },
]

/* ─── HERO CAROUSEL ──────────────────────────────────────── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return
      setAnimating(true)
      setTimeout(() => {
        setCurrent(idx)
        setAnimating(false)
      }, 300)
    },
    [animating],
  )

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  /* auto-advance a cada 6 segundos */
  useEffect(() => {
    const t = setInterval(next, 6000)
    return () => clearInterval(t)
  }, [next])

  const s = slides[current]

  return (
    <div className={`relative overflow-hidden ${s.bgClass} transition-colors duration-700`} style={{ minHeight: '88vh' }}>
      {/* grade de fundo */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,201,235,0.2) 1px,transparent 1px),linear-gradient(90deg,rgba(0,201,235,0.2) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* blur decorativo topo-direita */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-totvs-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center transition-opacity duration-300 ${animating ? 'opacity-0' : 'opacity-100'}`}
        style={{ minHeight: '88vh' }}
      >
        <div className="w-full grid lg:grid-cols-12 gap-0 lg:gap-8 items-center py-20">

          {/* ── COLUNA ESQUERDA ── */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col gap-0">
            {/* badge topo */}
            <div className={`inline-flex self-start items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold mb-6 ${s.tagBg}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              {s.badge}
            </div>

            {/* eyebrow */}
            <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">
              {s.eyebrow}
            </p>

            {/* headline — tamanho moderado */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-[1.15] mb-5">
              {s.headline}
            </h1>

            {/* subtítulo */}
            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
              {s.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={s.cta.href}
                className="inline-flex items-center gap-2 bg-totvs-cyan text-slate-950 px-6 py-3 rounded-full font-bold text-sm hover:brightness-110 hover:shadow-xl hover:shadow-totvs-cyan/30 transition-all duration-300"
              >
                {s.cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={s.ctaSecondary.href}
                className="inline-flex items-center gap-2 border border-white/20 text-white/85 px-6 py-3 rounded-full font-semibold text-sm hover:border-white/50 hover:text-white transition-all duration-300"
              >
                {s.ctaSecondary.label}
              </a>
            </div>

            {/* linha de stats */}
            <div className="flex gap-6 border-t border-white/10 pt-6">
              {s.statsRow.map((st) => (
                <div key={st.label}>
                  <div className={`font-display text-2xl font-bold ${s.accent}`}>{st.value}</div>
                  <div className="text-white/45 text-xs mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── COLUNA DIREITA — FOTO ── */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 items-end justify-end relative">
            {/* card flutuante topo-esquerdo da foto */}
            <div className="absolute top-10 -left-4 z-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-totvs-cyan/20 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-totvs-cyan" />
              </div>
              <div>
                <div className="text-white font-semibold text-xs">LGPD by design</div>
                <div className="text-white/50 text-[10px]">Segurança em cada entrega</div>
              </div>
            </div>

            {/* card flutuante baixo-direito da foto */}
            <div className="absolute bottom-14 -left-2 z-20 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
              <div className="w-8 h-8 rounded-xl bg-totvs-cyan/20 flex items-center justify-center">
                <BarChart3 className="w-4 h-4 text-totvs-cyan" />
              </div>
              <div>
                <div className="text-white font-semibold text-xs">Resultado mensurável</div>
                <div className="text-white/50 text-[10px]">KPIs de negócio em cada sprint</div>
              </div>
            </div>

            {/* foto principal */}
            <div className="relative w-full max-w-lg ml-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10" />
              <img
                src={s.photo.src}
                alt={s.photo.alt}
                className="w-full h-[560px] object-cover rounded-3xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTROLES ── */}
      {/* setas — no mobile ficam embaixo ao lado dos dots, no desktop ficam nas laterais */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm hidden md:flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm hidden md:flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* dots + setas mobile */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Anterior"
          className="md:hidden w-8 h-8 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <div className="flex gap-2">
          {slides.map((sl) => (
            <button
              key={sl.id}
              onClick={() => goTo(sl.id)}
              aria-label={`Slide ${sl.id + 1}`}
              className={`rounded-full transition-all duration-300 ${current === sl.id ? 'w-8 h-2 bg-totvs-cyan' : 'w-2 h-2 bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Próximo"
          className="md:hidden w-8 h-8 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* indicador de slide — canto inferior direito */}
      <div className="absolute bottom-5 right-6 z-20 text-white/30 text-xs font-semibold tabular-nums">
        {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}

/* ─── HOME PAGE ──────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-20">
        <HeroCarousel />
      </div>

      {/* ── STRIP DE CONFIANÇA ── */}
      <section className="py-10 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/40 text-sm font-medium">
            {[
              'Entrega com CI/CD',
              '·',
              'Segurança & LGPD',
              '·',
              'Observabilidade nativa',
              '·',
              'SLA garantido',
              '·',
              'Squads dedicados',
              '·',
              'Discovery estruturado',
            ].map((t, i) => (
              <span key={i} className={t === '·' ? 'text-white/15 text-lg' : ''}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMO RESOLVEMOS O PROBLEMA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Nossa proposta</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
                Tecnologia que resolve um problema de negócio real — não que cria um novo
              </h2>
              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                Muitas empresas já tiveram a experiência de contratar tecnologia e receber código sem
                responsabilidade sobre o resultado. Na Metaclass o jogo é diferente: começamos com diagnóstico,
                entregamos com governança e sustentamos com SLA.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Isso transforma software de custo em ativo estratégico — com retorno mensurável.
              </p>
              <div className="mt-8">
                <a
                  href="/quem-somos"
                  className="inline-flex items-center gap-2 font-bold text-totvs-cyan hover:underline"
                >
                  Conheça nossa história
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Code2,
                  title: 'Código com padrão',
                  text: 'Review, testes e CI/CD em cada entrega — não como extra, mas como padrão.',
                },
                {
                  icon: Clock,
                  title: 'Prazo previsível',
                  text: 'Escopo claro, sprints estruturadas e métricas de progresso visíveis para você.',
                },
                {
                  icon: ShieldCheck,
                  title: 'Zero surpresas',
                  text: 'Reporting executivo quinzenal e comunicação ativa antes que os problemas virem incidentes.',
                },
                {
                  icon: Zap,
                  title: 'Velocidade sustentável',
                  text: 'Entregamos rápido porque temos processo — não apesar dele.',
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                  <div className="w-10 h-10 rounded-xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center mb-4">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-base">{c.title}</div>
                  <div className="mt-1 text-sm text-gray-600 leading-relaxed">{c.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUTO EM DESTAQUE: BEAUTYGEST ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100">
            <div className="grid md:grid-cols-2 items-stretch">
              {/* texto */}
              <div className="p-10 md:p-14 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-totvs-cyan border border-totvs-cyan/30 rounded-full px-3 py-1 bg-totvs-cyan/5 self-start mb-5">
                  Produto SaaS · Setor de Beleza
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-1">
                  BeautyGest
                </h2>
                <p className="text-xs text-gray-400 mb-4">by Metaclass</p>
                <p className="text-gray-500 text-base mb-4 leading-relaxed">
                  A plataforma que está transformando a gestão de salões no Brasil
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Agenda inteligente, controle financeiro, CRM de clientes, comissões automáticas e relatórios em tempo
                  real. Tudo que um negócio de beleza precisa para profissionalizar a gestão e crescer com controle.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {['Agendamento online', 'Financeiro completo', 'Multi-unidade', 'App para clientes', 'LGPD nativo'].map(
                    (t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold border border-gray-200 bg-gray-50 rounded-full px-3 py-1 text-gray-600"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
                <div className="flex gap-3">
                  <a
                    href="/produtos"
                    className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-6 py-3 rounded-full font-bold text-sm hover:shadow-lg transition-all duration-300"
                  >
                    Conhecer BeautyGest
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm hover:border-totvs-cyan hover:text-totvs-cyan transition-all duration-300"
                  >
                    Solicitar demo
                  </a>
                </div>
              </div>

              {/* imagem */}
              <div className="relative overflow-hidden min-h-[360px]">
                <img
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=80"
                  alt="Salão de beleza moderno"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                {/* badge sobre a foto */}
                <div className="absolute top-6 right-6 bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl px-4 py-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-sm">4.9 / 5.0</span>
                  </div>
                  <div className="text-white/70 text-xs">Avaliação média dos usuários</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SETORES QUE ATENDEMOS ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 mb-14">
            <div className="flex-1">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Setores</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
                Adaptamos nossa metodologia ao seu contexto — sem abrir mão do padrão
              </h2>
            </div>
            <a
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm font-bold text-totvs-cyan hover:underline whitespace-nowrap"
            >
              Ver todos os serviços
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: Users,
                sector: 'Serviços & Beleza',
                text: 'Plataformas de agendamento, gestão e CRM para negócios orientados a atendimento.',
                result: '+28% receita com BeautyGest',
              },
              {
                icon: Layers,
                sector: 'Varejo & E-commerce',
                text: 'Integrações com ERPs, marketplaces, logística e automação de processos críticos de venda.',
                result: '-45% retrabalho operacional',
              },
              {
                icon: BarChart3,
                sector: 'Financeiro & Fintechs',
                text: 'Plataformas de crédito, pagamentos, conciliação e conformidade regulatória.',
                result: 'LGPD e segurança nativos',
              },
              {
                icon: Code2,
                sector: 'SaaS & Startups',
                text: 'Squads para construir e escalar produtos digitais com governança desde o primeiro sprint.',
                result: '2x velocidade de release',
              },
              {
                icon: ShieldCheck,
                sector: 'Saúde & Healthtech',
                text: 'Prontuários, telemedicina, integrações com operadoras e sistemas de gestão clínica.',
                result: 'Conformidade e segurança',
              },
              {
                icon: Zap,
                sector: 'Indústria & Logística',
                text: 'WMS, TMS, rastreamento de pedidos, IoT e painéis operacionais em tempo real.',
                result: 'Automação fim-a-fim',
              },
            ].map((s) => (
              <div key={s.sector} className="rounded-3xl border border-gray-100 bg-gray-50 p-7 hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-totvs-cyan/10 border border-totvs-cyan/20 text-totvs-cyan flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-lg mb-2">{s.sector}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.text}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-totvs-cyan">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {s.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS / POR QUE METACLASS ── */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide">Por que escolher a Metaclass</div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                O que nos diferencia no mercado de tecnologia
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed text-lg">
                Não somos uma fábrica de software. Somos um time com mentalidade de produto, disciplina de
                engenharia e comprometimento genuíno com o resultado do cliente.
              </p>
              <a
                href="/cases"
                className="inline-flex items-center gap-2 mt-8 text-totvs-cyan font-bold hover:underline"
              >
                Ver cases de resultado
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
              {[
                {
                  number: '01',
                  title: 'Discovery antes de qualquer linha de código',
                  text: 'Mapeamos o problema real. Você sabe exatamente o que será entregue e quando antes de pagar.',
                },
                {
                  number: '02',
                  title: 'Time multidisciplinar com visão de produto',
                  text: 'Engenheiros que entendem negócio. PMs que conhecem tecnologia. QAs que pensam no usuário.',
                },
                {
                  number: '03',
                  title: 'Transparência sem esforço do cliente',
                  text: 'Reporting executivo, demos semanais e alertas antecipados. Você nunca fica no escuro.',
                },
                {
                  number: '04',
                  title: 'Sustentação real pós go-live',
                  text: 'Não sumimos após a entrega. Sustentação ativa com SLA, roadmap e evolução contínua.',
                },
              ].map((d) => (
                <div key={d.number} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                  <div className="text-totvs-cyan font-display text-3xl font-bold mb-3 opacity-40">{d.number}</div>
                  <div className="font-bold text-white mb-2">{d.title}</div>
                  <div className="text-white/55 text-sm leading-relaxed">{d.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTO / CITAÇÃO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide mb-6">O que nossos clientes dizem</div>
          <blockquote className="font-display text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
            "A Metaclass foi o parceiro técnico que precisávamos para escalar o produto sem quebrar o que já
            funcionava. Processo claro, qualidade real e um time que se importa com o resultado."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-totvs-cyan flex items-center justify-center text-slate-950 font-bold text-sm">
              R
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 text-sm">Ricardo M.</div>
              <div className="text-gray-500 text-xs">CTO · Plataforma SaaS de serviços</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1a2e] border border-slate-800 overflow-hidden">
            <div className="grid md:grid-cols-12 gap-0 items-stretch">
              {/* texto */}
              <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center">
                <div className="text-sm font-semibold text-totvs-cyan uppercase tracking-wide mb-4">Próximo passo</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                  Pronto para transformar tecnologia em resultado de negócio?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed mb-8">
                  Em uma conversa de 30 minutos com nosso time técnico, você recebe um diagnóstico inicial do seu
                  cenário e uma proposta clara de como podemos ajudar — sem compromisso.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-2 bg-totvs-cyan text-slate-950 px-7 py-3.5 rounded-full font-bold hover:brightness-110 hover:shadow-2xl hover:shadow-totvs-cyan/30 transition-all duration-300"
                  >
                    Falar com especialista
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href="/servicos"
                    className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-7 py-3.5 rounded-full font-semibold hover:border-white/40 hover:text-white transition-all duration-300"
                  >
                    Ver serviços
                  </a>
                </div>
              </div>

              {/* visual lateral */}
              <div className="md:col-span-5 relative min-h-[280px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
                  alt="Equipe de tecnologia"
                  className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent" />
                {/* mini métricas sobre a imagem */}
                <div className="relative z-10 h-full flex flex-col justify-center gap-4 p-10">
                  {[
                    { v: '+50', l: 'projetos entregues' },
                    { v: '99.8%', l: 'uptime médio' },
                    { v: '<48h', l: 'tempo médio de resposta' },
                  ].map((m) => (
                    <div key={m.l} className="flex items-center gap-3">
                      <div className="font-display text-3xl font-bold text-totvs-cyan">{m.v}</div>
                      <div className="text-white/60 text-sm">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
