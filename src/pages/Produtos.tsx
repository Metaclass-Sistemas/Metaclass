import {
  ArrowRight,
  Boxes,
  Shield,
  Zap,
  CheckCircle2,
  Scissors,
  Calendar,
  TrendingUp,
  Users,
  Star,
  BarChart3,
  Bell,
  CreditCard,
  Package,
  Smartphone,
  Globe,
  Lock,
  ExternalLink,
  Rocket,
  Stethoscope,
  FileText,
  ClipboardList,
  Heart,
  Activity,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Produtos() {
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
              <p className="text-brand-blue font-semibold uppercase tracking-wide text-sm">Produtos & Portfólio</p>
              <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold text-white leading-tight">
                Produtos SaaS com padrão enterprise —{' '}
                <span className="text-brand-blue">construídos para durar e escalar</span>
              </h1>
              <p className="mt-6 text-white/75 text-xl leading-relaxed max-w-2xl">
                Desenvolvemos plataformas SaaS verticais com arquitetura robusta, experiência moderna e evolução
                contínua. Cada produto nasce da mesma metodologia que usamos em projetos enterprise — e cresce com
                os negócios dos nossos clientes.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
                <a
                  href="#beautygest"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300"
                >
                  Ver BeautyGest
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#clinicnest"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-violet-600/30 transition-all duration-300"
                >
                  Ver ClinicNest
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 border border-slate-700 text-white/90 px-8 py-4 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
                >
                  Falar com especialista
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Por que nossos produtos são diferentes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Boxes,
                  title: 'Produto, não ferramenta',
                  text: 'Cada plataforma é desenhada com foco em UX, fluxo de negócio e produtividade real — não apenas em features técnicas.',
                },
                {
                  icon: Shield,
                  title: 'Segurança & LGPD nativos',
                  text: 'Conformidade com a Lei Geral de Proteção de Dados desde a arquitetura: criptografia, gestão de acessos e controle de dados.',
                },
                {
                  icon: Zap,
                  title: 'Evolução contínua',
                  text: 'Nossos produtos não ficam estagnados. Roadmap ativo com novas funcionalidades baseadas no uso real e feedback de clientes.',
                },
              ].map((b) => (
                <div key={b.title} className="rounded-3xl border border-gray-100 bg-white shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center">
                    <b.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-5 font-bold text-xl">{b.title}</div>
                  <div className="mt-2 text-gray-600 leading-relaxed">{b.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BeautyGest - destaque principal */}
        <section id="beautygest" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Produto em destaque</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                Conheça o <span className="text-gradient">BeautyGest</span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                A plataforma SaaS de gestão mais completa para salões de beleza, barbearias e clínicas estéticas.
              </p>
            </div>

            {/* Card principal do produto */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 mb-10">
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                {/* Info */}
                <div className="p-10 md:p-14">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/30 mb-6">
                    <Scissors className="w-4 h-4 text-brand-blue" />
                    <span className="text-sm font-semibold text-gray-700">Beleza & Estética</span>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-display text-4xl font-bold">BeautyGest</h3>
                    <p className="text-sm text-gray-400 mt-1">by Metaclass</p>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Sistema completo de gestão para salões de beleza, barbearias e clínicas estéticas. Do
                    agendamento ao financeiro, do controle de equipe ao relacionamento com clientes — tudo em
                    uma plataforma moderna, rápida e confiável.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      { icon: Calendar, text: 'Agenda inteligente com confirmação automática' },
                      { icon: TrendingUp, text: 'Controle financeiro completo com relatórios' },
                      { icon: Users, text: 'Gestão de clientes com histórico e CRM' },
                      { icon: Bell, text: 'Lembretes automáticos por WhatsApp e e-mail' },
                      { icon: CreditCard, text: 'Integração com meios de pagamento' },
                      { icon: Package, text: 'Controle de estoque de produtos' },
                    ].map((f) => (
                      <div key={f.text} className="flex items-center gap-3 text-gray-700">
                        <f.icon className="w-5 h-5 text-brand-blue flex-shrink-0" />
                        <span className="text-sm">{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/beautygest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-7 py-3.5 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Conhecer BeautyGest
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="/contato"
                      className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue transition-all duration-300"
                    >
                      Solicitar demo
                    </a>
                  </div>
                </div>

                {/* Visual */}
                <div className="bg-gradient-to-br from-brand-blue via-cyan-500 to-cyan-600 p-10 md:p-14 flex items-center justify-center min-h-[420px]">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-white text-center w-full max-w-xs">
                    <img
                      src="/beautyg-horizontal.svg"
                      alt="BeautyGest"
                      className="h-16 w-auto mx-auto mb-5"
                    />
                    <p className="text-sm opacity-80">by Metaclass</p>
                    <p className="text-lg font-semibold opacity-95 mt-3 leading-snug">
                      Gestão Profissional para o Setor de Beleza
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[
                        { value: '1k+', label: 'agendamentos' },
                        { value: '98%', label: 'uptime' },
                        { value: '4.9', label: 'avaliação' },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/15 rounded-xl py-2 px-1">
                          <div className="font-bold text-base">{s.value}</div>
                          <div className="text-xs opacity-70 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diferenciais do BeautyGest */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Smartphone,
                  title: 'Mobile e web',
                  text: 'Acesse de qualquer dispositivo. App para clientes agendar e painel web para gestão completa.',
                },
                {
                  icon: Globe,
                  title: 'Multi-unidade',
                  text: 'Gerencie múltiplas unidades ou franquias a partir de um único painel centralizado.',
                },
                {
                  icon: Lock,
                  title: 'Dados seguros',
                  text: 'LGPD by design: seus dados e dos seus clientes protegidos com criptografia e controle de acesso.',
                },
                {
                  icon: Star,
                  title: 'Suporte real',
                  text: 'Suporte humanizado com SLA definido. Você não fica sozinho quando precisa de ajuda.',
                },
              ].map((d) => (
                <div key={d.title} className="rounded-2xl border border-gray-100 bg-white shadow-md p-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center mb-4">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-base">{d.title}</div>
                  <div className="mt-1 text-sm text-gray-600 leading-relaxed">{d.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ClinicNest - destaque */}
        <section id="clinicnest" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-violet-600 uppercase tracking-wide">Mais novo produto</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold">
                Conheça o{' '}
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  ClinicNest
                </span>
              </h2>
              <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
                A plataforma SaaS de gestão mais completa para clínicas e consultórios médicos.
              </p>
            </div>

            {/* Card principal */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 mb-10 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                {/* Info */}
                <div className="p-10 md:p-14">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-600/10 border border-violet-600/30 mb-6">
                    <Stethoscope className="w-4 h-4 text-violet-600" />
                    <span className="text-sm font-semibold text-gray-700">Saúde & Clínicas</span>
                  </div>

                  <div className="mb-5">
                    <h3 className="font-display text-4xl font-bold">ClinicNest</h3>
                    <p className="text-sm text-gray-400 mt-1">by Metaclass</p>
                  </div>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Sistema completo de gestão para clínicas e consultórios. Prontuário eletrônico, agenda médica
                    inteligente, controle financeiro e gestão de equipe — tudo em uma plataforma segura, intuitiva
                    e em conformidade com a LGPD.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      { icon: FileText, text: 'Prontuário eletrônico completo e seguro' },
                      { icon: Calendar, text: 'Agenda médica inteligente com confirmação automática' },
                      { icon: Users, text: 'Gestão de pacientes com histórico clínico' },
                      { icon: TrendingUp, text: 'Controle financeiro e faturamento completo' },
                      { icon: ClipboardList, text: 'Prescrição digital integrada' },
                      { icon: Heart, text: 'Gestão de planos de saúde' },
                    ].map((f) => (
                      <div key={f.text} className="flex items-center gap-3 text-gray-700">
                        <f.icon className="w-5 h-5 text-violet-600 flex-shrink-0" />
                        <span className="text-sm">{f.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://clinicnest.metaclass.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-7 py-3.5 rounded-full font-bold hover:shadow-lg transition-all duration-300"
                    >
                      Conhecer ClinicNest
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href="/contato"
                      className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-7 py-3.5 rounded-full font-bold hover:border-violet-600 hover:text-violet-600 transition-all duration-300"
                    >
                      Solicitar demo
                    </a>
                  </div>
                </div>

                {/* Visual */}
                <div className="bg-gradient-to-br from-violet-600 via-indigo-600 to-indigo-700 p-10 md:p-14 flex items-center justify-center min-h-[420px]">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-white text-center w-full max-w-xs">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-5">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-lg font-bold">ClinicNest</p>
                    <p className="text-sm opacity-80 mt-1">by Metaclass</p>
                    <p className="text-base font-semibold opacity-95 mt-3 leading-snug">
                      Gestão Profissional para Clínicas e Consultórios
                    </p>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[
                        { value: '500+', label: 'avaliações' },
                        { value: '98%', label: 'uptime' },
                        { value: '4.9', label: 'nota' },
                      ].map((s) => (
                        <div key={s.label} className="bg-white/15 rounded-xl py-2 px-1">
                          <div className="font-bold text-base">{s.value}</div>
                          <div className="text-xs opacity-70 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Diferenciais do ClinicNest */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: Smartphone,
                  title: 'Acesso em qualquer dispositivo',
                  text: 'Web e mobile. Acesse prontuários, agenda e relatórios de qualquer lugar com segurança.',
                },
                {
                  icon: Shield,
                  title: 'LGPD by design',
                  text: 'Dados clínicos protegidos com criptografia e controle de acesso rigoroso desde a arquitetura.',
                },
                {
                  icon: Activity,
                  title: 'Relatórios clínicos',
                  text: 'Relatórios avançados de produtividade, faturamento por convênio e evolução dos pacientes.',
                },
                {
                  icon: Star,
                  title: 'Suporte humanizado',
                  text: 'SLA definido e suporte real. Sua equipe nunca fica sozinha quando precisar de ajuda.',
                },
              ].map((d) => (
                <div key={d.title} className="rounded-2xl border border-gray-100 bg-white shadow-md p-6">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-600/20 text-violet-600 flex items-center justify-center mb-4">
                    <d.icon className="w-5 h-5" />
                  </div>
                  <div className="font-bold text-base">{d.title}</div>
                  <div className="mt-1 text-sm text-gray-600 leading-relaxed">{d.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Para quem é o BeautyGest */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Para quem é</div>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight">
                  Ideal para negócios de beleza que querem crescer com controle
                </h2>
                <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                  O BeautyGest foi desenvolvido para profissionais e gestores do setor de beleza que estão cansados
                  de planilhas, aplicativos avulsos e processos manuais que tomam tempo e geram erros.
                </p>
                <div className="mt-8 space-y-3">
                  {[
                    'Salões de beleza de qualquer porte, do individual ao multi-cadeira',
                    'Barbearias modernas que buscam gestão profissional',
                    'Clínicas estéticas e spas que precisam de controle rigoroso',
                    'Redes e franquias que precisam padronizar e centralizar a gestão',
                    'Profissionais autônomos que querem imagem profissional para o cliente',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-10">
                <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide mb-6">O que muda na prática</div>
                <div className="space-y-5">
                  {[
                    {
                      before: 'Agenda em papel ou WhatsApp com risco de duplo agendamento',
                      after: 'Agenda digital com bloqueio automático e confirmação por WhatsApp',
                    },
                    {
                      before: 'Financeiro anotado em caderno ou planilha manual',
                      after: 'Dashboard financeiro em tempo real com relatórios por período',
                    },
                    {
                      before: 'Clientes sem histórico, sem fidelização e sem comunicação',
                      after: 'CRM com histórico completo, aniversários e campanhas de retorno',
                    },
                    {
                      before: 'Equipe sem controle de comissões e metas',
                      after: 'Comissões automáticas e relatório de performance por profissional',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-start gap-2 text-xs text-red-400">
                        <span className="mt-0.5">✕</span>
                        <span className="leading-snug">{item.before}</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-green-400">
                        <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{item.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas de impacto */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Impacto real</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">
                O que nossos clientes conquistam com o BeautyGest
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, value: '+28%', label: 'de aumento de receita média em 3 meses de uso' },
                { icon: Users, value: '-30%', label: 'de cancelamentos com lembretes automáticos' },
                { icon: BarChart3, value: '3h/dia', label: 'economizadas em tarefas administrativas' },
                { icon: Star, value: '4.9/5', label: 'de avaliação média pelos usuários da plataforma' },
              ].map((m) => (
                <div key={m.label} className="rounded-3xl border border-gray-100 bg-white shadow-lg p-7 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue flex items-center justify-center mx-auto">
                    <m.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-4 font-display text-4xl font-bold text-slate-900">{m.value}</div>
                  <div className="mt-2 text-sm text-gray-500 leading-snug">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Próximos produtos */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-10 md:p-14">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue border border-brand-blue/30 rounded-full px-3 py-1 bg-brand-blue/5 mb-5">
                    <Rocket className="w-3.5 h-3.5" />
                    Em desenvolvimento
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
                    Mais produtos SaaS chegando em breve
                  </h2>
                  <p className="mt-4 text-white/70 text-lg leading-relaxed">
                    Além do BeautyGest e ClinicNest, estamos desenvolvendo novas plataformas verticais com a
                    mesma metodologia e padrão de qualidade. Acompanhe as novidades ou entre em contato.
                  </p>
                  <div className="mt-6 space-y-2">
                    {[
                      'Plataformas verticais para outros segmentos de serviço',
                      'Integração nativa com os principais gateways e ERPs',
                      'APIs abertas para parceiros e integradores',
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-2 text-sm text-white/60">
                        <CheckCircle2 className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <a
                      href="/contato"
                      className="inline-flex items-center gap-2 bg-gradient-totvs text-white px-7 py-3.5 rounded-full font-bold hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300"
                    >
                      Quero ser avisado
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Plataforma pet shop', eta: 'Q3 2025', progress: 40 },
                    { label: 'Gestão de academias', eta: 'Q4 2025', progress: 20 },
                    { label: 'ERP para varejo', eta: 'Q1 2026', progress: 10 },
                    { label: 'Marketplace de serviços', eta: '2026', progress: 5 },
                  ].map((p) => (
                    <div key={p.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                      <div className="text-sm font-bold text-white">{p.label}</div>
                      <div className="text-xs text-white/40 mt-1">{p.eta}</div>
                      <div className="mt-3 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-brand-blue rounded-full"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                      <div className="text-xs text-white/30 mt-1">{p.progress}% concluído</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - solução customizada */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-white border border-gray-100 shadow-xl p-10 md:p-14">
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-8">
                  <div className="text-sm font-semibold text-brand-blue uppercase tracking-wide">Precisa de algo além do produto?</div>
                  <div className="mt-3 font-display text-3xl md:text-4xl font-bold leading-tight">
                    Desenvolvemos a solução completa para o seu cenário específico
                  </div>
                  <div className="mt-4 text-gray-600 text-lg leading-relaxed">
                    Além dos nossos produtos SaaS, atuamos como parceiro técnico para desenvolvimento de software
                    sob medida: discovery, arquitetura, integração com legado, automação e squads dedicados para
                    evolução contínua.
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Software sob medida', 'Squads dedicados', 'Integrações enterprise', 'Modernização de sistemas'].map((t) => (
                      <span key={t} className="text-xs font-semibold border border-gray-200 rounded-full px-3 py-1 text-gray-600 bg-gray-50">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-4 flex md:justify-end">
                  <a
                    href="/contato"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-totvs text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 w-full md:w-auto"
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
