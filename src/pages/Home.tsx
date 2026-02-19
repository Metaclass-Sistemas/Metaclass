import { useEffect, useState, useCallback, useRef } from 'react'
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
  TrendingUp,
} from 'lucide-react'

/* ─── ANIMATED COUNTER ──────────────────────────────────── */
function useCountUp(end: number, duration = 2000, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    let raf: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [end, duration, start])
  return value
}

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ─── SLIDES ─────────────────────────────────────────────── */
const slides = [
  {
    id: 0,
    badge: 'Parceiro técnico · Enterprise · Brasil',
    headline: 'Sistemas críticos entregues',
    headlineAccent: 'com método e resultado',
    sub: 'Squads dedicados, arquitetura robusta e governança ativa — do discovery ao go-live. Sem surpresas, sem retrabalho.',
    cta: { label: 'Falar com especialista', href: '/contato' },
    ctaSecondary: { label: 'Ver serviços', href: '/servicos' },
    stats: [
      { value: '+50', label: 'Projetos' },
      { value: '+30', label: 'Clientes' },
      { value: '99.8%', label: 'Uptime' },
      { value: '<48h', label: 'SLA' },
    ],
    visual: 'tech' as const,
  },
  {
    id: 1,
    badge: 'Produto SaaS · Setor de Beleza',
    headline: 'Do agendamento ao financeiro,',
    headlineAccent: 'uma plataforma para crescer',
    sub: 'Agenda inteligente, CRM, comissões automáticas e relatórios em tempo real. O que o seu negócio de beleza precisa.',
    cta: { label: 'Conhecer BeautyGest', href: '/produtos' },
    ctaSecondary: { label: 'Solicitar demo', href: '/contato' },
    stats: [
      { value: '+28%', label: 'Receita' },
      { value: '-30%', label: 'Faltas' },
      { value: '3h/dia', label: 'Economizadas' },
      { value: '4.9★', label: 'Avaliação' },
    ],
    visual: 'beauty' as const,
  },
]

/* ─── MOCK VISUAL: TECH (slide 0) ────────────────────────── */
function TechVisual() {
  return (
    <div className="relative w-full max-w-[430px] ml-auto">
      {/* glow atrás do card */}
      <div className="absolute -inset-6 bg-brand-blue/15 rounded-3xl blur-2xl pointer-events-none" />

      {/* card principal */}
      <div className="relative rounded-2xl bg-[#0d1b2a] border border-brand-blue/20 p-6 shadow-2xl">
        {/* header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/70 text-xs">Sistema em produção</span>
          </div>
          <span className="text-[10px] font-mono text-white/45">v2.4.1</span>
        </div>

        {/* métrica principal */}
        <div className="mb-4">
          <div className="text-white/55 text-[11px] mb-1">Receita processada (mês)</div>
          <div className="flex items-end gap-3">
            <span className="font-display text-3xl font-bold text-white leading-none">R$&nbsp;284.500</span>
            <span className="text-green-400 text-xs font-bold mb-0.5 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />+23%
            </span>
          </div>
        </div>

        {/* sparkline */}
        <div className="flex items-end gap-1 h-14 mb-5">
          {[35, 55, 42, 68, 60, 78, 65, 90, 72, 88, 55, 100].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                backgroundColor: i === 11 ? '#60A5FA' : 'rgba(96,165,250,0.22)',
              }}
            />
          ))}
        </div>

        {/* linha de stats */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-4">
          {[
            { v: '12', l: 'deploys/sem' },
            { v: '99.8%', l: 'uptime' },
            { v: '0', l: 'incidentes' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-brand-blue text-sm font-bold">{s.v}</div>
              <div className="text-white/55 text-[10px]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* badge flutuante: LGPD */}
      <div className="absolute -top-4 -left-10 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2.5 shadow-xl">
        <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
        <div>
          <div className="text-white text-[11px] font-semibold">LGPD by design</div>
          <div className="text-white/40 text-[9px]">Conformidade garantida</div>
        </div>
      </div>

      {/* badge flutuante: CI/CD */}
      <div className="absolute -bottom-4 right-2 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2.5 shadow-xl">
        <Zap className="w-4 h-4 text-yellow-400 shrink-0" />
        <div>
          <div className="text-white text-[11px] font-semibold">CI/CD automático</div>
          <div className="text-white/40 text-[9px]">Deploy em segundos</div>
        </div>
      </div>
    </div>
  )
}

/* ─── MOCK VISUAL: BEAUTYGEST (slide 1) ──────────────────── */
const appointments = [
  { time: '09:00', client: 'Ana Santos', service: 'Corte + Escova', dot: 'bg-pink-500' },
  { time: '10:30', client: 'Carlos R.', service: 'Coloração completa', dot: 'bg-purple-400' },
  { time: '14:00', client: 'Maria J.', service: 'Hidratação', dot: 'bg-sky-400' },
  { time: '16:30', client: 'Fernanda L.', service: 'Manicure + Pedicure', dot: 'bg-rose-400' },
]

function BeautyVisual() {
  return (
    <div className="relative w-full max-w-[430px] ml-auto">
      <div className="absolute -inset-6 bg-sky-400/10 rounded-3xl blur-2xl pointer-events-none" />

      <div className="relative rounded-2xl bg-[#0d1b2a] border border-sky-400/20 p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-white/70 text-xs">Agenda de hoje</span>
          </div>
          <span className="text-[10px] text-white/45">Ter, 18 Fev</span>
        </div>

        <div className="space-y-0">
          {appointments.map((a) => (
            <div key={a.time} className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0">
              <span className="text-white/55 text-[11px] font-mono w-9 shrink-0">{a.time}</span>
              <div className={`w-1 h-7 rounded-full ${a.dot} shrink-0`} />
              <div className="min-w-0">
                <div className="text-white text-xs font-semibold truncate">{a.client}</div>
                <div className="text-white/40 text-[10px] truncate">{a.service}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-sky-400/10 border border-sky-400/20 px-4 py-2.5 flex items-center justify-between">
          <span className="text-white/65 text-xs">Caixa do dia</span>
          <span className="text-sky-400 text-sm font-bold">R$ 1.840,00</span>
        </div>
      </div>

      <div className="absolute -top-4 -left-10 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2.5 shadow-xl">
        <TrendingUp className="w-4 h-4 text-green-400 shrink-0" />
        <div>
          <div className="text-white text-[11px] font-bold">+28% receita</div>
          <div className="text-white/40 text-[9px]">vs. mês anterior</div>
        </div>
      </div>

      <div className="absolute -bottom-4 right-2 flex items-center gap-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2.5 shadow-xl">
        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 shrink-0" />
        <div>
          <div className="text-white text-[11px] font-bold">4.9 / 5.0</div>
          <div className="text-white/40 text-[9px]">Avaliação dos usuários</div>
        </div>
      </div>
    </div>
  )
}

/* ─── HERO CAROUSEL ──────────────────────────────────────── */
const SLIDE_DURATION = 6000

function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [progress, setProgress] = useState(0)

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return
      setAnimating(true)
      setProgress(0)
      setTimeout(() => {
        setCurrent(idx)
        setAnimating(false)
      }, 350)
    },
    [animating],
  )

  const prev = () => goTo((current - 1 + slides.length) % slides.length)
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])

  /* barra de progresso */
  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    const id = setInterval(() => {
      setProgress(Math.min(((Date.now() - start) / SLIDE_DURATION) * 100, 100))
    }, 50)
    return () => clearInterval(id)
  }, [current])

  /* auto-advance */
  useEffect(() => {
    const t = setInterval(next, SLIDE_DURATION)
    return () => clearInterval(t)
  }, [next])

  const s = slides[current]

  return (
    <div
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#091522] to-slate-950"
      style={{ minHeight: '92vh' }}
    >
      {/* padrão de pontos */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.9) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />
      {/* orb topo-direita */}
      <div className="absolute -top-32 -right-32 w-[580px] h-[580px] rounded-full bg-brand-blue/8 blur-3xl pointer-events-none" />
      {/* orb baixo-esquerda */}
      <div className="absolute -bottom-32 -left-16 w-[420px] h-[420px] rounded-full bg-blue-900/18 blur-3xl pointer-events-none" />

      {/* conteúdo */}
      <div
        className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center
          transition-all duration-300 ease-out
          ${animating ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}
        style={{ minHeight: '92vh' }}
      >
        <div className="w-full grid lg:grid-cols-12 gap-12 items-center py-24">

          {/* ── ESQUERDA: texto ── */}
          <div className="lg:col-span-6 flex flex-col">
            {/* badge */}
            <div className="inline-flex self-start items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-xs font-semibold text-brand-blue mb-7 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
              {s.badge}
            </div>

            {/* headline — tipografia de impacto */}
            <h1
              className="font-display font-extrabold text-white leading-[1.07] mb-6"
              style={{ fontSize: 'clamp(2rem, 4.2vw, 3.5rem)' }}
            >
              {s.headline}{' '}
              <span className="bg-gradient-to-r from-brand-blue via-blue-300 to-sky-300 bg-clip-text text-transparent">
                {s.headlineAccent}
              </span>
            </h1>

            {/* subtítulo */}
            <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-9 max-w-xl">
              {s.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={s.cta.href}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-blue to-blue-400 text-slate-950 px-7 py-3.5 rounded-full font-bold text-sm hover:shadow-xl hover:shadow-brand-blue/30 hover:scale-[1.02] transition-all duration-300"
              >
                {s.cta.label}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={s.ctaSecondary.href}
                className="inline-flex items-center gap-2 border border-white/25 text-white/85 px-7 py-3.5 rounded-full font-semibold text-sm hover:border-white/50 hover:text-white transition-all duration-300"
              >
                {s.ctaSecondary.label}
              </a>
            </div>

            {/* stats */}
            <div className="flex gap-6 sm:gap-8 border-t border-white/15 pt-6">
              {s.stats.map((st) => (
                <div key={st.label}>
                  <div className="font-display text-2xl font-bold text-brand-blue">{st.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── DIREITA: visual mockado ── */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-end">
            {s.visual === 'tech' ? <TechVisual /> : <BeautyVisual />}
          </div>
        </div>
      </div>

      {/* barra de progresso */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
        <div
          className="h-full bg-brand-blue"
          style={{ width: `${progress}%`, transition: 'width 50ms linear' }}
        />
      </div>

      {/* setas — desktop */}
      <button onClick={prev} aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 rounded-full items-center justify-center bg-white/8 border border-white/12 text-white hover:bg-white/15 transition-all duration-200">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={next} aria-label="Próximo"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex w-10 h-10 rounded-full items-center justify-center bg-white/8 border border-white/12 text-white hover:bg-white/15 transition-all duration-200">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* dots + setas mobile */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        <button onClick={prev} aria-label="Anterior"
          className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-white/8 border border-white/12 text-white">
          <ChevronLeft className="w-4 h-4" />
        </button>
        {slides.map((sl) => (
          <button key={sl.id} onClick={() => goTo(sl.id)} aria-label={`Slide ${sl.id + 1}`}
            className={`rounded-full transition-all duration-300 ${current === sl.id ? 'w-7 h-2 bg-brand-blue' : 'w-2 h-2 bg-white/25 hover:bg-white/50'}`}
          />
        ))}
        <button onClick={next} aria-label="Próximo"
          className="md:hidden w-8 h-8 rounded-full flex items-center justify-center bg-white/8 border border-white/12 text-white">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* contador de slide */}
      <div className="absolute bottom-5 right-6 z-20 text-white/45 text-xs font-mono tabular-nums">
        {String(current + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
      </div>
    </div>
  )
}

/* ─── MÉTRICAS COM COUNTER ANIMADO ───────────────────────── */
function MetricsSection() {
  const { ref, inView } = useInView(0.3)
  const projetos = useCountUp(50, 2000, inView)
  const clientes = useCountUp(30, 2000, inView)
  const uptime = useCountUp(99, 1800, inView)
  const satisfacao = useCountUp(98, 2000, inView)

  const metrics = [
    { value: `+${projetos}`, label: 'Projetos entregues', caption: 'Sistemas críticos em produção' },
    { value: `+${clientes}`, label: 'Clientes ativos', caption: 'Em 8 segmentos de mercado' },
    { value: `${uptime}.8%`, label: 'Uptime médio', caption: 'Monitorado 24/7 com SLA' },
    { value: `${satisfacao}%`, label: 'Satisfação', caption: 'Avaliação pós-projeto' },
  ]

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-slate-950 via-[#091828] to-slate-900 overflow-hidden">
      {/* padrão de pontos */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.9) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* orb decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-brand-blue/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-4">
            Números que comprovam
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Resultados que{' '}
            <span className="bg-gradient-to-r from-brand-blue via-blue-300 to-sky-300 bg-clip-text text-transparent">
              falam por si
            </span>
          </h2>
        </div>

        {/* grid: borda sutil entre as células usando gap-px */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="bg-slate-900/50 backdrop-blur-sm px-6 py-10 flex flex-col items-center text-center
                hover:bg-slate-800/60 transition-colors duration-300"
            >
              <div
                className="font-display font-extrabold leading-none mb-3
                  bg-gradient-to-br from-white via-brand-blue/80 to-brand-blue bg-clip-text text-transparent"
                style={{ fontSize: 'clamp(2.6rem, 5vw, 4.5rem)' }}
              >
                {m.value}
              </div>
              <div className="text-white text-sm font-bold mb-1">{m.label}</div>
              <div className="text-white/55 text-[11px]">{m.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
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

      {/* ── MÉTRICAS DE IMPACTO ── */}
      <MetricsSection />

      {/* ── COMO RESOLVEMOS O PROBLEMA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Nossa proposta</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">

                Tecnologia que resolve um <span className="text-brand-blue">problema de negócio real</span> — não que cria um novo
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
                  className="inline-flex items-center gap-2 font-bold text-brand-blue hover:underline"
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
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center mb-4">
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
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue border border-brand-blue/30 rounded-full px-3 py-1 bg-brand-blue/5 self-start mb-5">
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
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
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
              <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Setores</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">

                Adaptamos nossa metodologia ao seu <span className="text-brand-blue">contexto</span> — sem abrir mão do padrão
              </h2>
            </div>
            <a
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:underline whitespace-nowrap"
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
                <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-lg mb-2">{s.sector}</div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.text}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {s.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA INTERMEDIÁRIO ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-3">Comece agora</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-4">
            Quer entender como a Metaclass pode <span className="text-brand-blue">acelerar seu projeto</span>?
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Agende uma conversa gratuita de 30 minutos com nosso time técnico e receba um diagnóstico inicial.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/contato"
              className="inline-flex items-center gap-2 bg-brand-blue text-slate-950 px-7 py-3.5 rounded-full font-bold text-sm hover:brightness-110 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300"
            >
              Falar com especialista
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/servicos"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-semibold text-sm hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS / POR QUE METACLASS ── */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0c1a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Por que escolher a Metaclass</div>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-white leading-tight">

                O que nos <span className="text-brand-blue">diferencia</span> no mercado de tecnologia
              </h2>
              <p className="mt-4 text-white/65 leading-relaxed text-lg">
                Não somos uma fábrica de software. Somos um time com mentalidade de produto, disciplina de
                engenharia e comprometimento genuíno com o resultado do cliente.
              </p>
              <a
                href="/cases"
                className="inline-flex items-center gap-2 mt-8 text-brand-blue font-bold hover:underline"
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
                  <div className="text-brand-blue font-display text-3xl font-bold mb-3 opacity-40">{d.number}</div>
                  <div className="font-bold text-white mb-2">{d.title}</div>
                  <div className="text-white/70 text-sm leading-relaxed">{d.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTO / CITAÇÃO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-6">O que nossos clientes dizem</div>
          <blockquote className="font-display text-2xl md:text-3xl font-semibold text-gray-900 leading-relaxed">
            "A Metaclass foi o parceiro técnico que precisávamos para escalar o produto sem quebrar o que já
            funcionava. Processo claro, qualidade real e um time que se importa com o resultado."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-slate-950 font-bold text-sm">
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
                <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-4">Próximo passo</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
  
                Pronto para transformar tecnologia em <span className="text-brand-blue">resultado de negócio</span>?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed mb-8">
                  Em uma conversa de 30 minutos com nosso time técnico, você recebe um diagnóstico inicial do seu
                  cenário e uma proposta clara de como podemos ajudar — sem compromisso.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/contato"
                    className="inline-flex items-center gap-2 bg-brand-blue text-slate-950 px-7 py-3.5 rounded-full font-bold hover:brightness-110 hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300"
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
                      <div className="font-display text-3xl font-bold text-brand-blue">{m.v}</div>
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
