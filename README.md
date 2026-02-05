# BarberHouse - Site da Barbearia

Site moderno e profissional para barbearia, desenvolvido com React e Vite.

## 🚀 Tecnologias

- **React 18** - Framework JavaScript
- **Vite** - Build tool rápido
- **React Icons** - Ícones modernos
- **CSS3** - Animações e design responsivo
- **Google Fonts** - Tipografia premium

## 📁 Estrutura do Projeto (Organizada)

```
BarberHouse/
├── public/                          📂 Ficheiros públicos
│   ├── logo.png                     ← COLOCA O TEU LOGO AQUI
│   └── images/                      📂 Fotos da galeria
│       ├── gallery1.jpg             ← COLOCA AS FOTOS DOS TRABALHOS AQUI
│       ├── gallery2.jpg
│       ├── gallery3.jpg
│       ├── gallery4.jpg
│       ├── gallery5.jpg
│       └── gallery6.jpg
│
├── src/                             📂 Código fonte
│   ├── components/                  📂 Componentes React
│   │   ├── Header/                  📁 Navegação fixa
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── Hero/                    📁 Seção inicial
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── Services/                📁 Serviços oferecidos
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── Gallery/                 📁 Galeria de fotos
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── About/                   📁 Sobre a barbearia
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   ├── Contact/                 📁 Formulário de contacto
│   │   │   ├── index.jsx
│   │   │   └── styles.css
│   │   └── Footer/                  📁 Rodapé
│   │       ├── index.jsx
│   │       └── styles.css
│   │
│   ├── styles/                      📂 Estilos globais
│   │   ├── global.css               - Reset e variáveis CSS
│   │   └── App.css                  - Estilos do App principal
│   │
│   ├── App.jsx                      - Componente principal
│   └── main.jsx                     - Ponto de entrada
│
├── index.html                       - HTML base
├── package.json                     - Dependências do projeto
├── vite.config.js                   - Configuração do Vite
├── README.md                        - Documentação completa
└── INSTRUÇÕES.md                    - Guia rápido
```

**Organização:**
- ✅ Cada componente tem sua própria pasta
- ✅ CSS separado por componente (styles.css)
- ✅ Estilos globais numa pasta dedicada
- ✅ Estrutura clara e fácil de navegar
- ✅ Imagens organizadas em public/

## 🎨 Características

✅ **Design Moderno** - Interface elegante com tema escuro/dourado
✅ **Totalmente Responsivo** - Funciona perfeitamente em mobile e desktop
✅ **Animações Suaves** - Transições e efeitos visuais profissionais
✅ **Navegação Fluida** - Scroll suave entre seções
✅ **Galeria Interativa** - Lightbox para visualizar fotos
✅ **Formulário de Contacto** - Para marcações e informações
✅ **Menu Mobile** - Menu hamburger para dispositivos móveis

## 📋 Instalação e Execução

### 1. Instalar Dependências

```bash
npm install
```

### 2. Adicionar Imagens

Antes de executar, adiciona:
- **Logo**: Coloca o ficheiro `logo.png` na pasta `/public/`
- **Fotos**: Coloca 6 fotos dos trabalhos na pasta `/public/images/` com os nomes:
  - gallery1.jpg
  - gallery2.jpg
  - gallery3.jpg
  - gallery4.jpg
  - gallery5.jpg
  - gallery6.jpg

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: `http://localhost:5173`

### 4. Build para Produção

```bash
npm run build
```

Os ficheiros otimizados estarão na pasta `/dist/`

## 🎯 Seções do Site

### 1. **Header** (Navegação)
- Logo da barbearia
- Menu com links para todas as seções
- Menu mobile responsivo
- Efeito de scroll (fica opaco ao rolar)

### 2. **Hero** (Seção Inicial)
- Título impactante
- Botões de ação (Marcar Horário / Ver Serviços)
- Indicador de scroll animado

### 3. **Services** (Serviços)
- Corte de Cabelo
- Barba & Bigode
- Lavagem Completa
- Tratamentos
- Cards animados com hover effects

### 4. **Gallery** (Galeria)
- Grid de fotos dos trabalhos
- Lightbox para visualização ampliada
- Hover effects elegantes

### 5. **About** (Sobre)
- Texto sobre a barbearia
- Estatísticas (clientes, anos, dedicação)
- Cards informativos

### 6. **Contact** (Contacto)
- Informações de contacto
- Formulário de marcação
- Campos: Nome, Email, Telefone, Serviço, Mensagem

### 7. **Footer** (Rodapé)
- Links rápidos
- Informações de contacto
- Redes sociais
- Copyright

## 🎨 Personalização

### Cores

Edita as variáveis CSS em [src/styles/global.css](src/styles/global.css):

```css
:root {
  --primary-color: #d4a574;      /* Dourado principal */
  --secondary-color: #8b6f47;    /* Dourado secundário */
  --dark-bg: #1a1a1a;            /* Fundo escuro */
  --light-bg: #2a2a2a;           /* Fundo claro */
}
```

### Informações de Contacto

Edita em:
- [src/components/Contact/index.jsx](src/components/Contact/index.jsx)
- [src/components/Footer/index.jsx](src/components/Footer/index.jsx)

Campos a alterar:
- Morada
- Telefone
- Email
- Horários
- Links de redes sociais

### Serviços e Preços

Edita em [src/components/Services/index.jsx](src/components/Services/index.jsx) o array `services`:

```javascript
const services = [
  {
    icon: <FaCut />,
    title: 'Corte de Cabelo',
    description: 'Descrição do serviço',
    price: 'Desde 15€'
  },
  // ...
]
]
```

## 📱 Responsividade

O site adapta-se automaticamente a todos os tamanhos de ecrã:
- **Desktop**: Layout completo com múltiplas colunas
- **Tablet**: Layout adaptado com 2 colunas
- **Mobile**: Layout vertical de coluna única

## 🌟 Próximos Passos

- [ ] Adicionar sistema de marcações online
- [ ] Integrar com Google Maps
- [ ] Adicionar mais idiomas
- [ ] Sistema de avaliações de clientes
- [ ] Blog de dicas de estilo

## 💡 Dicas

1. **Imagens**: Usa fotos de alta qualidade (recomendado: 800x800px mínimo)
2. **Logo**: Formato PNG com fundo transparente funciona melhor
3. **Otimização**: Comprime as imagens antes de adicionar ao site
4. **Testes**: Testa em diferentes dispositivos e browsers

## 📞 Suporte

Se precisares de ajuda ou personalização adicional, estou disponível!

---

**Desenvolvido com ❤️ para BarberHouse**
