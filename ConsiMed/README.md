# ConsiMed

O ConsiMed é um MVP acadêmico de frontend para procurar profissionais de saúde por especialidade e simular o agendamento de uma consulta. O projeto foi desenvolvido para praticar JavaScript, componentes e estados em React, navegação com React Router e estilização com CSS.

## Como executar a partir do ZIP

1. Extraia o ZIP e abra um terminal na pasta que contém este README e o arquivo `package.json`.
2. Com o Node.js e o npm instalados (versão do Node usada no projeto: 22.13.0), execute os comandos abaixo. A instalação das dependências requer acesso à internet.

   ```sh
   npm ci
   npm run dev
   ```

3. Abra no navegador o endereço indicado por **Local** no terminal. Mantenha o terminal aberto enquanto usa o site. Para encerrar, pressione Ctrl+C.

## Roteiro de demonstração

1. Na página inicial, observe o mural e selecione **Dermatologia** no filtro. Os cards dos profissionais aparecem no lugar do mural.
2. Abra a agenda da **Dra. Maria Souza**, escolha um dia e um horário e confirme. Ao reabrir a mesma agenda e selecionar o mesmo dia, o horário reservado deixa de aparecer entre as opções disponíveis.
3. Acesse **Triagem** para ver um exemplo de conversa sobre agendamento. As mensagens são fictícias e foram definidas no frontend.
4. Em **Minha conta**, clique em **Editar perfil**, preencha a cidade e o estado e salve para conferir os dados no cartão. As alterações ficam no estado do React enquanto a tela está aberta.

Os profissionais, as agendas e o perfil são demonstrativos. Login e cadastro são telas de protótipo. A aplicação funciona localmente sem configurar um banco de dados, uma API ou um serviço de IA.

## Build de produção

Para gerar a pasta `dist` e conferir a versão de produção no navegador, execute:

```sh
npm run build
npm run preview
```

## Equipe
- [Daniel Torres Machado]
- [Naheli Silva de Carvalho]
- [Matheus Vianna Gondin]
- [Luiza Aiglê Francisco Castilho Freitas]
- [Christian Neves de Amorim]

## Demonstração online
https://consimed.onrender.com/

## Código-fonte
https://github.com/DanielTMzz/ConsiMed