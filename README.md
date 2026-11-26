# Aura Sistemas — Landing Page

Landing page responsiva da Aura Sistemas, empresa de soluções em energia limpa. A página apresenta os serviços, as etapas do processo, a rentabilidade, depoimentos, perguntas frequentes e um formulário de contato.

## ✨ Seções da página

| Seção | Componente |
|---|---|
| Navegação | `NavBar` |
| Apresentação | `Hero` |
| Serviços | `Services` |
| Sócios | `SociosSection` |
| Rentabilidade | `Rentability` |
| Prova social | `SocialProof` |
| Etapas do processo | `Steps` |
| Perguntas frequentes | `FAQ` |
| Contato | `ContactSection` |
| Rodapé | `Footer` |

Todos ficam em `src/components/sections/`.

## 🛠️ Stack

| Tecnologia | Função |
|---|---|
| [React](https://react.dev/) 19 e [TypeScript](https://www.typescriptlang.org/) | Interface e tipagem |
| [Vite](https://vite.dev/) 7 | Servidor de desenvolvimento e build |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Estilização responsiva |
| [lucide-react](https://lucide.dev/) | Ícones |
| ESLint | Padronização do código |

## 🚀 Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) LTS.

```bash
git clone https://github.com/LOrleans/AuraSistemas.git
cd AuraSistemas
npm install
npm run dev
```

O Vite mostra no terminal o endereço local, normalmente `http://localhost:5173`.

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Verifica os tipos e gera o build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |
| `npm run lint` | Verifica o código com ESLint |

## 📁 Estrutura

```
.
├── public/                  # Arquivos estáticos
├── src/
│   ├── assets/              # Imagens e logos
│   ├── components/sections/ # Seções da landing page
│   ├── App.tsx              # Composição da página
│   ├── main.tsx             # Ponto de entrada
│   └── index.css            # Estilos globais e Tailwind
├── index.html
└── vite.config.ts
```
