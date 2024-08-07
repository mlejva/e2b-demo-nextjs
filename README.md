# E2B Demo - Next.js
This demo shows how to run a Next.js app inside the sandbox via `next dev`, preview it in the browser, and then update the app's code.
Creating and controlling sandboxes is done using a new beta version of the [Core E2B SDK](https://e2b.dev/docs/guide/beta-migration).

## 1. Set E2B API key in `.env
```
cp .env.template .env
```
## 2. Install dependencies
```
npm install
```
## 3. Start the demo
```
npm run starts
```

## Customizing the sandbox
You can customize a sandbox by creating a sandbox template. Here's an official [guide](https://e2b.dev/docs/guide/custom-sandbox).

1. Remove the original `e2b.template` file
1. Customize the e2b.Dockerfile (e.g. install custom libraries)
1. Build the template ([CLI docs](https://e2b.dev/docs/cli/commands))
    ```
    e2b template build -n <your-template-name> --cpu 4 --memory-mb 4096 --cmd "/home/user/compile_page.sh"
    ```