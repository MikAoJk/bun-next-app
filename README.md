# bun-next-app

## Technologies used
* Bun
* TypeScript
* Next.js
* Tailwind

## Getting Started
### Prerequisites
Make sure you have bun installed
See [bun Installation](https://bun.sh/docs/installation) on how to install it locally
You can check which bun version you have installed
```bash
bun --version
```

install deps
```bash
bun install
```

Run tests
```bash
bun test
```

Then, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deployed to github pages 
The application is live at: https://mikaojk.github.io/bun-next-app

## Build the Docker Image
```bash
docker build -t bun-next-app .
```

## Run the Docker Container
```bash
docker run -p 3000:3000 bun-next-app .
```

## Contact

This project is maintained by [CODEOWNERS](CODEOWNERS)

Questions and/or feature requests?
Please create an [issue](https://github.com/MikAoJk/bun-next-app/issues)
