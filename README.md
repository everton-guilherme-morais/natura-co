# Natura E-commerce Clone
<img src="public/images/natura-logo-vector.png" alt="Home Page" width="400">

Este projeto é um clone do site de e-commerce da Natura, desenvolvido em 4 dias. O objetivo é listar produtos, permitir filtragem por categorias (Masculino, Feminino, Infantil) e busca por texto, visualizar detalhes do produto, adicionar produtos ao carrinho e finalizar a compra. O design e algumas informações são inspirados no site oficial da Natura.

## Funcionalidades

- **Listagem de Produtos**: Navegue por uma variedade de produtos com opções de filtragem por categoria e busca por nome do produto.
- **Detalhes do Produto**: Veja informações detalhadas sobre um produto, incluindo nome, marca, preço, avaliações e informações adicionais.
- **Adicionar ao Carrinho**: Adicione produtos ao carrinho e veja a contagem de itens no carrinho atualizar em tempo real.
- **Carrinho de Compras**: Visualize todos os produtos adicionados ao carrinho, com o preço total calculado com base nas quantidades dos produtos.
- **Finalizar Compra**: Complete a compra enviando os itens do carrinho para o backend, que então limpa o carrinho e redireciona para a página inicial.
- **Design Responsivo**: Todas as páginas são responsivas e otimizadas para vários dispositivos.

## Tecnologias Utilizadas

### Frontend
- **React**
- **Next.js**
- **TypeScript**
- **JavaScript**
- **Tailwind CSS**
- **Shadcn**
- **Lucide React**
- **Swiper**
- **Zod**
- **Cloudflare** (para hospedagem das imagens dos produtos)
- **Axios**

### Backend
- **NestJS**
- **Node.js**
- **TypeScript**
- **Prisma**

### Banco de Dados
- **Banco Relacional** hospedado na **Vercel**

## Páginas

### Home (Desk / Tablet)
<img src="public/images/project/home-desk.png" alt="Home Page" width="400">

<img src="public/images/project/home-tablet.png" alt="Home Page" width="400">

### Listagem de Produtos Filtrados (Desk / Tablet)
<img src="public/images/project/listage-produtos-filtrados-desk.png" alt="Home Page" width="400">
<img src="public/images/project/lista-produtos-filtrados-tablet.png" alt="Home Page" width="400">

### Detalhes do Produto (Desk / Tablet)
<img src="public/images/project/detalhes-produto-desk.png" alt="Home Page" width="400">
<img src="public/images/project/detalhes-produto-tablet.png" alt="Home Page" width="400">

### Carrinho (Desk / Tablet)
<img src="public/images/project/carrinho-desk.png" alt="Home Page" width="400">
<img src="public/images/project/carrinho-tablet.png" alt="Home Page" width="400">

## Configuração do Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/seuusuario/natura-ecommerce-clone.git
    ```

2. Instale as dependências do frontend:
    ```bash
    cd frontend
    npm install
    ```

3. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
    ```

4. Configure o banco de dados:
    ```bash
    npx prisma migrate deploy
    ```

5. Inicie o servidor de desenvolvimento do frontend:
    ```bash
    npm run dev
    ```

6. Inicie o servidor de desenvolvimento do backend:
    ```bash
    npm run start:dev
    ```

## Uso

- **Navegar pelos Produtos**: Navegue até a página inicial para ver os produtos. Use os filtros de categoria e a barra de busca para encontrar produtos específicos.
- **Ver Detalhes do Produto**: Clique em um produto para ver suas informações detalhadas.
- **Adicionar ao Carrinho**: Clique no botão "Adicionar ao Carrinho" na página de detalhes do produto para adicioná-lo ao carrinho.
- **Visualizar Carrinho**: Clique no ícone do carrinho no cabeçalho para ver os produtos no seu carrinho.
- **Finalizar Compra**: Clique no botão "Finalizar compra" no carrinho para completar a compra. Isso enviará os itens do carrinho para o backend e limpará o carrinho.

## Conclusão

Este projeto demonstra a implementação de um site de e-commerce simples com funcionalidades essenciais, como listagem de produtos, filtragem, visualização de detalhes, adição ao carrinho e finalização da compra. O projeto é totalmente responsivo e usa tecnologias web modernas para garantir uma experiência de usuário suave.
