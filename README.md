<h1 align="center">
   <a href="#"> React Social Authenticate </a>
</h1>

<h3 align="center">
    A package to make authentication with social networks using react hooks be simple!
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/victorhcosta/react-social-authenticate?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/victorhcosta/react-social-authenticate">

  <a href="https://twitter.com/victor_min_ts">
    <img alt="Follow me on Twitter" src="https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Ftgmarinho%2FREADME-ecoleta">
  </a>

  <a href="https://github.com/victorhcosta/react-social-authenticate/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/victorhcosta/react-social-authenticate">
  </a>

   <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">

   <a href="https://github.com/victorhcosta/react-social-authenticate/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/victorhcosta/react-social-authenticate?style=social">
  </a>
</p>

<h4 align="center"> Status: In development </h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#example-of-use">Example of use</a> •
 <a href="#contributing">Contributing</a> •
 <a href="#contributors">Contributors</a> •
 <a href="#author">Author</a> •
 <a href="#user-content-license">License</a>

</p>

## About

React Social Authenticate provide hooks to make easy implement login with social networks like Facebook and Linkedin in your react app.

---

## Features

- [x] React hook for login with:
  - [x] Facebook.
  - [x] Google.
  - [x] Linkedin.
  - [] Twitter.
  - [] Spotify.
  - [] Microsoft.
---

## Example of use

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
		appId: `YOUR_FACEBOOK_APP_ID`,
		language: 'pt-BR',
		version: 8.0,
		internalAuthenticateURL: 'http://your.backend.app.address/path-to-authenticate-in-your-app',
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

## Contributing

Thank you for being interested on making this package better. I encourage everyone to help improving this project with some new features, bug fixes and performance issues, transalting the docs for other languages. Please take a little bit of your time to read our guides, so this process can be faster and easier.

## Contributors

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

## How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b feature/my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`
    > If you have any questions check this [guide on how to contribute](./CONTRIBUTING.md)
---

## Author

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

## License

This project is under the license [MIT](./LICENSE).

Made with love by Victor Costa 👋🏽 [Get in Touch!](https://twitter.com/victor_min_ts)

---

## Versions of README

[Portuguese](./README-ptBR.md) | [English](./README.md)
