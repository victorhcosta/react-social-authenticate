<h1 align="center">
   <a href="#"> React Social Authenticate </a>
</h1>

<h3 align="center">
	Um pacote para tornar autenticação com redes sociais usando react hooks ser simples!
</h3>

<p align="center">
  <img alt="Quantidade de linguagens segundo o GitHub" src="https://img.shields.io/github/languages/count/victorhcosta/react-social-authentic	ate?label=linguagens&color=%2304D361">

  <img alt="Tamanho do repositorio" src="https://img.shields.io/github/repo-size/victorhcosta/react-social-authenticate?label=tamanho%20do%20repositorio">

  <a href="https://twitter.com/victor_min_ts">
    <img alt="Me siga no Twitter" src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fvictor_min_ts">
  </a>

  <a href="https://github.com/victorhcosta/react-social-authenticate/commits/master">
    <img alt="Ultimo commit no GitHub" src="https://img.shields.io/github/last-commit/victorhcosta/react-social-authenticate?label=ultimo%20commit%20no%20GitHub">
  </a>

   <img alt="Licença" src="https://img.shields.io/badge/license-MIT-brightgreen?label=licenca">

   <a href="https://github.com/victorhcosta/react-social-authenticate/stargazers">
    <img alt="Estrelas no GitHub" src="https://img.shields.io/github/stars/victorhcosta/react-social-authenticate?label=estrelas%20no%20GitHub&style=social">
  </a>
</p>

<h4 align="center"> Status: em desenvolvimento </h4>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#features">Features</a> •
 <a href="#exemplo-de-uso">Exemplo de uso</a> •
 <a href="#contribuindo">Contribuindo</a> •
 <a href="#contribuidores">Contribuidores</a> •
 <a href="#autor">Autor</a> •
 <a href="#licença">Licença</a>

</p>

## Sobre

React Social Authenticate provê uma forma simples de implementar login com redes sociais como Facebook e Linkedin em sua aplicação react.

---

## Features

- [x] React hook para fazer login com:
  - [x] Facebook.
  - [x] Google.
  - [x] Linkedin.
  - [] Twitter.
  - [] Spotify.
  - [] Microsoft.
---

## Exemplo de uso

```tsx
import { useFacebookLogin } from 'react-social-authenticate';

interface IExampleLogin {
	token: string,
	user: {
		name: string,
		id: string,
		email: string,
		roles: [
			{
				name: string,
				id: number
			}
		]
	}
};

export const MyComponent = () => {
	const facebook = useFacebookLogin<IExampleLogin>({
		appId: `SEU_FACEBOOK_APP_ID`,
		language: 'pt-BR',
		version: 8.0,
		internalAuthenticateURL: 'http://endereço.do.seu.backend/caminho-para-autenticar-no-seu-sistema',
	});

	return (
		<>
			<h1 className="title"> Facebook </h1>
			<div className="content">
				Usuário:
				<p>
					{facebook?.userInfos && <img src={facebook?.userInfos?.picture?.data?.url} alt={`${facebook?.userInfos?.name} profile picture`} />}
				</p>
			</div>
			<footer className="footer">
				<button className="btn btn-success" onClick={facebook?.logIn}> login </button>
				<button className="btn btn-danger" onClick={facebook?.logOut}> logout </button>
			</footer>
		</>
	);
};
```

## Contribuindo
Agradeço a todos que se interessarem em melhorar essa lib, encorajo a todos que quiserem ajudar o projeto com novas funcionalidades, corrigindo bugs, fazendo melhorias de performance, traduzindo o pacote para outras línguas. Peço que tome um pouco do seu tempo para ler os guias, assim o processo vai se tornar mais rápido e mais fácil.

### Como contribuir

1. Faça fork do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b feature/minha-feature`
3. Salve suas alterações e faça um commit com uma mensagem falando o que você fez: `git commit -m" feature: minha nova feature "`
4. Submit your changes: `git push origin my-feature`
    > If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)

---

## Contribuidores

<table>
  <tr>
    <td align="center">
		<a href="https://twitter.com/victor_min_ts">
			<img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/18669568?s=460&u=e14077e1d6d221668fb9c52e1edeaea2c9ea6965&v=4" width="100px;" alt="Victor Costa Github profile picture"/>
			<br />
			<sub>
				<b>
					Victor Costa
				</b>
			</sub>
		</a>
		<br />
	</td>
  </tr>
</table>

---

## Autor

<a href="https://twitter.com/victor_min_ts">
	<img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/18669568?s=460&u=e14077e1d6d221668fb9c52e1edeaea2c9ea6965&v=4" width="100px;" alt="Victor Costa"/>
	<br />
	<sub>
		<b>
			Victor Costa
		</b>
	</sub>
</a>
<br />

[![Twitter Badge](https://img.shields.io/badge/-@victor_min_ts-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/victor_min_ts)](https://twitter.com/victor_min_ts)
[![Linkedin Badge](https://img.shields.io/badge/-Victor-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/victor-hugo-oliveira-da-costa-b5b9a711b/)](https://www.linkedin.com/in/victor-hugo-oliveira-da-costa-b5b9a711b/)
[![Gmail Badge](https://img.shields.io/badge/-victor.v.h.o.c@outlook.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:victor.v.h.o.c@outlook.com)](mailto:victor.v.h.o.c@outlook.com)

---

## Licença

Este projeto esta sob a licença [MIT](./LICENSE).

Feito com amor por Victor Costa 👋🏽 [Get in Touch!](https://twitter.com/victor_min_ts)

---

## Versões do README

[Portuguese](./README-ptBR.md) | [English](./README.md)
