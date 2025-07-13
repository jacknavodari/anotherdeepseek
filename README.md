---
title: DeepSite v2 (Ollama Edition)
emoji: 🐳
colorFrom: blue
colorTo: blue
sdk: docker
pinned: true
app_port: 3000
license: mit
short_description: Generate any application with Ollama
models:
  - ollama/llama2
  - ollama/mistral
  - ollama/codellama
  - ollama/phi
---

# DeepSite 🐳 (Ollama Edition)

DeepSite is a coding platform powered by Ollama, designed to make coding smarter and more efficient with local models. Tailored for developers, data scientists, and AI engineers, it integrates generative AI into your coding projects to enhance creativity and productivity.

## How to use it locally

1.  **Install Ollama**: If you don't have Ollama installed, follow the instructions on the [Ollama website](https://ollama.ai/).

2.  **Download Models**: Pull the desired models using the Ollama CLI. For example:
    ```bash
    ollama pull llama2
    ollama pull mistral
    ollama pull codellama
    ollama pull phi
    ```

3.  **Run the Application**: Navigate to the project directory and run:
    ```bash
    npm install
    npm run dev
    ```

    The application will be available at `http://localhost:3000`.

## Ollama Integration

This version of DeepSite has been modified to exclusively use local Ollama models. The model selection in the UI will now display the models available on your running Ollama instance.

## Modified by jacknavodari

This project has been modified by jacknavodari to integrate local Ollama models and provide a streamlined experience for local AI development.