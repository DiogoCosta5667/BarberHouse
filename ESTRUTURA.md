# 📂 Estrutura do Projeto BarberHouse

## Visão Geral da Organização

O projeto está organizado de forma modular e intuitiva, facilitando manutenção e escalabilidade.

```
BarberHouse/
│
├── 📂 public/                    → Ficheiros estáticos acessíveis publicamente
│   ├── logo.png                  → Logo da barbearia (ADICIONAR)
│   └── 📂 images/                → Galeria de fotos dos trabalhos
│       ├── gallery1.jpg          → (ADICIONAR 6 FOTOS)
│       ├── gallery2.jpg
│       ├── gallery3.jpg
│       ├── gallery4.jpg
│       ├── gallery5.jpg
│       └── gallery6.jpg
│
├── 📂 src/                       → Código fonte da aplicação
│   │
│   ├── 📂 components/            → Componentes React modulares
│   │   │
│   │   ├── 📁 Header/            → Navegação principal
│   │   │   ├── index.jsx         → Lógica do componente
│   │   │   └── styles.css        → Estilos específicos
│   │   │
│   │   ├── 📁 Hero/              → Seção de boas-vindas (topo)
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │
│   │   ├── 📁 Services/          → Cards de serviços
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │
│   │   ├── 📁 Gallery/           → Galeria de fotos
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │
│   │   ├── 📁 About/             → Informação sobre a barbearia
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │
│   │   ├── 📁 Contact/           → Formulário de contacto
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   │
│   │   └── 📁 Footer/            → Rodapé com links e redes sociais
│   │       ├── index.jsx
│   │       └── styles.css
│   │
│   ├── 📂 styles/                → Estilos globais
│   │   ├── global.css            → Reset CSS, variáveis, animações
│   │   └── App.css               → Estilos do componente App
│   │
│   ├── App.jsx                   → Componente raiz da aplicação
│   └── main.jsx                  → Ponto de entrada React
│
├── index.html                    → HTML base
├── package.json                  → Dependências e scripts
├── vite.config.js                → Configuração do Vite
├── README.md                     → Documentação completa
├── INSTRUÇÕES.md                 → Guia rápido de uso
└── ESTRUTURA.md                  → Este ficheiro (guia da estrutura)
```

---

## 📋 Descrição Detalhada

### 🎯 Pasta `public/`
Contém todos os **ficheiros estáticos** que são servidos diretamente:
- **logo.png** - Logo da barbearia (aparece no header)
- **images/** - Fotos dos trabalhos exibidas na galeria

### 🔧 Pasta `src/`
Código fonte principal da aplicação React.

#### 🧩 `src/components/`
Cada componente tem **sua própria pasta** contendo:
- `index.jsx` - Lógica e estrutura JSX
- `styles.css` - Estilos específicos do componente

**Vantagens desta organização:**
✅ Fácil localizar código relacionado  
✅ Componentes totalmente independentes  
✅ Facilita reutilização  
✅ Manutenção simplificada  

#### 🎨 `src/styles/`
Estilos compartilhados entre componentes:
- **global.css** - Reset, variáveis CSS (:root), animações globais
- **App.css** - Estilos do componente App principal

#### ⚙️ Ficheiros principais
- **App.jsx** - Importa e organiza todos os componentes
- **main.jsx** - Renderiza o App no DOM

---

## 🗂️ Como Navegar no Projeto

### Para adicionar imagens:
```
/public/logo.png           → Logo do header
/public/images/gallery*.jpg → Fotos da galeria
```

### Para editar um componente:
```
/src/components/[Nome]/index.jsx    → Alterar conteúdo/lógica
/src/components/[Nome]/styles.css   → Alterar estilos
```

### Para mudar cores globais:
```
/src/styles/global.css → Variáveis :root (linhas 1-10)
```

### Para adicionar novo componente:
1. Criar pasta em `/src/components/NovoComponente/`
2. Criar `index.jsx` e `styles.css`
3. Importar em `App.jsx`

---

## 🎯 Fluxo de Dados

```
main.jsx
   ↓
App.jsx
   ↓
├── Header
├── Hero
├── Services
├── Gallery
├── About
├── Contact
└── Footer
```

Cada componente é **independente** e pode ser modificado sem afetar os outros.

---

## 💡 Boas Práticas

✅ **Cada componente numa pasta própria**  
✅ **Estilos separados por componente**  
✅ **Nomes de ficheiros consistentes** (index.jsx, styles.css)  
✅ **Variáveis CSS centralizadas** (global.css)  
✅ **Imports relativos claros**  

---

## 🔄 Para Adicionar Novos Componentes

```bash
# Estrutura a criar:
src/components/
  └── NovoComponente/
      ├── index.jsx
      └── styles.css
```

**Em App.jsx:**
```javascript
import NovoComponente from './components/NovoComponente'

function App() {
  return (
    <>
      <Header />
      <NovoComponente /> {/* Adicionar aqui */}
      <Footer />
    </>
  )
}
```

---

**Estrutura criada para facilitar o desenvolvimento e manutenção! 🚀**
