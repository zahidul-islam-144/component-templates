# component-templates
##Porject setup:
1. npm i
2. "npm run dev" to run project
3. "npm run build" to build for production


##To create project with vite and react:
1. npm create vite@latest projectName --template react (with react) / npm create vite@latest my-vite-app / yarn create vite@latest my-vite-app
2. cd projectName
3. npm i
4. npm run dev to run project
5. npm run build for production use
6. ste up the following codes into vite.config.js given below:
// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});

7. VITE_API_KEY=123456789 to set environment variables
8. import.meta.env.VITE_API_KEY to access environment variables
