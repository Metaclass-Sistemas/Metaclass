# 🚀 Metaclass - Landing Page Oficial

Landing page corporativa da **Metaclass**, empresa brasileira de tecnologia especializada em soluções SaaS.

## 🎨 Design

Inspirado na **TOTVS**, utilizando:
- **Paleta de cores tech**: Ciano (#00dbff), Azul (#00c9eb)
- **Tipografia moderna**: Inter + Space Grotesk
- **Animações suaves** e design responsivo

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy na Vercel

1. Faça push deste código para o GitHub
2. Importe o repositório na Vercel
3. Configure o domínio: `www.metaclass.com.br`
4. Deploy automático!

## 📂 Estrutura do Projeto

```
metaclass-website/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Menu de navegação
│   │   ├── Hero.tsx        # Seção principal
│   │   ├── Products.tsx    # Produtos (BeautyGest)
│   │   ├── About.tsx       # Sobre a empresa
│   │   ├── Technologies.tsx # Stack tecnológico
│   │   ├── Contact.tsx     # Informações de contato
│   │   └── Footer.tsx      # Rodapé
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Arquivos públicos
├── index.html              # HTML base
├── package.json            # Dependências
├── tailwind.config.js      # Config Tailwind
├── vite.config.ts          # Config Vite
└── vercel.json             # Config Vercel + Redirects
```

## 🔗 Redirects Configurados

- `/beautygest` → redireciona para `beautygest.metaclass.com.br`
- Configurado automaticamente no `vercel.json`

## 📝 Licença

© 2025 Metaclass. Todos os direitos reservados.
