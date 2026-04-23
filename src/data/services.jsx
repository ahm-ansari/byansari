import React from 'react';

/* Inline SVG icons — no external icon lib needed */
const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
  </svg>
);
const AppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2"/>
    <path d="M12 18h.01"/>
  </svg>
);
const DataIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
  </svg>
);
const MLIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
    <path d="M12 7v5M12 12l-5.5 5.5M12 12l5.5 5.5"/>
  </svg>
);
const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2a10 10 0 110 20A10 10 0 0112 2z"/>
    <path d="M12 8v4l3 3"/>
    <path d="M8.5 8.5l7 7"/>
  </svg>
);
const RAGIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 6h16M4 12h16M4 18h16"/>
    <circle cx="20" cy="12" r="3" fill="currentColor" stroke="none" opacity=".25"/>
    <circle cx="20" cy="12" r="1.5"/>
  </svg>
);

export const SERVICES_DATA = [
  {
    icon: <WebIcon />,
    title: 'Website Development',
    tagline: 'Fast · Responsive · SEO-first',
    accent: 'blue',
    desc: 'We build scalable, high-performance websites using React and Next.js — optimized for search engines, mobile devices, and conversion rates. From portfolios to corporate sites, every pixel is crafted with purpose.',
    keywords: ['React', 'Next.js', 'SEO', 'Responsive Design', 'CMS'],
    fullDesc: `Professional website development that combines beautiful design with technical excellence. Using modern React architecture and Next.js, we deliver sites that rank on Google, load in milliseconds, and convert visitors into customers. Every project includes semantic HTML5, structured data, and Core Web Vitals optimization to ensure maximum organic reach.`,
    benefits: [
      'Google-first architecture with semantic HTML & structured data',
      'Core Web Vitals optimization for top search rankings',
      'Mobile-first responsive design for all screen sizes',
      'CMS integration for easy content management',
    ],
  },
  {
    icon: <AppIcon />,
    title: 'Web Application Development',
    tagline: 'Scalable · Secure · Production-ready',
    accent: 'teal',
    desc: 'Full-stack web applications built with React, Node.js, and cloud-native architectures. From SaaS dashboards to enterprise platforms — engineered for scale, security, and long-term maintainability.',
    keywords: ['React', 'Node.js', 'REST API', 'PostgreSQL', 'Docker'],
    fullDesc: `End-to-end web application development covering frontend (React/TypeScript), backend (Node.js/FastAPI), and cloud infrastructure (AWS/GCP). We follow best practices in authentication, API design, database modeling, and DevOps to deliver production-grade applications that scale with your business needs.`,
    benefits: [
      'Full-stack development from UI to database',
      'RESTful & GraphQL API design',
      'CI/CD pipelines and automated testing',
      'Cloud deployment on AWS, GCP, or Azure',
    ],
  },
  {
    icon: <DataIcon />,
    title: 'Data Analysis',
    tagline: 'Insights · Visualization · Decisions',
    accent: 'gold',
    desc: 'Transform raw data into actionable business intelligence. Using Python, Pandas, and modern BI tools, we uncover trends, build interactive dashboards, and deliver insights that drive real decisions.',
    keywords: ['Python', 'Pandas', 'Tableau', 'Power BI', 'SQL'],
    fullDesc: `Comprehensive data analysis services including exploratory data analysis (EDA), statistical modeling, and interactive visualization. We work with structured and unstructured data to identify patterns, build KPI dashboards, and deliver reports that help stakeholders make data-driven decisions quickly and confidently.`,
    benefits: [
      'Exploratory data analysis & statistical modeling',
      'Interactive dashboards with Tableau or Power BI',
      'Automated reporting pipelines',
      'Data cleaning, transformation & ETL workflows',
    ],
  },
  {
    icon: <MLIcon />,
    title: 'Machine Learning',
    tagline: 'Predictive · Intelligent · Automated',
    accent: 'violet',
    desc: 'Custom ML model development and deployment using TensorFlow, PyTorch, and scikit-learn. We build predictive models, recommendation engines, and intelligent automation systems tailored to your specific business challenges.',
    keywords: ['TensorFlow', 'PyTorch', 'scikit-learn', 'MLOps', 'Prediction'],
    fullDesc: `From model design to production deployment, we deliver end-to-end Machine Learning solutions. Our ML engineering covers classification, regression, clustering, NLP, computer vision, and time-series forecasting. We also implement MLOps pipelines for model versioning, monitoring, and retraining to keep your AI systems accurate over time.`,
    benefits: [
      'Custom model development for classification, regression & NLP',
      'MLOps pipelines for continuous model improvement',
      'Model explainability and performance monitoring',
      'Integration with existing business workflows',
    ],
  },
  {
    icon: <AIIcon />,
    title: 'Generative AI',
    tagline: 'GPT-4 · Claude · LLM Integration',
    accent: 'rose',
    desc: 'Integrate cutting-edge Generative AI into your products using OpenAI, Anthropic Claude, and open-source LLMs. We build AI copilots, content generators, and intelligent assistants that amplify your team\'s productivity.',
    keywords: ['OpenAI', 'LLM', 'Prompt Engineering', 'Fine-tuning', 'AI Agents'],
    fullDesc: `Leverage the power of large language models (LLMs) to automate content creation, build AI assistants, and unlock new product capabilities. We specialize in prompt engineering, fine-tuning, function calling, and multi-agent systems. From customer support bots to AI writing assistants — we build Generative AI features that deliver real business value.`,
    benefits: [
      'LLM integration with GPT-4, Claude, Gemini & Llama',
      'Custom AI assistants and chatbot development',
      'Advanced prompt engineering & chain-of-thought techniques',
      'AI agent frameworks with tool use and memory',
    ],
  },
  {
    icon: <RAGIcon />,
    title: 'RAG Solutions',
    tagline: 'Semantic Search · Knowledge Grounding',
    accent: 'green',
    desc: 'Retrieval-Augmented Generation (RAG) systems that ground AI responses in your proprietary data. We architect vector databases, embedding pipelines, and retrieval systems that make LLMs accurate, trustworthy, and domain-specific.',
    keywords: ['LangChain', 'Pinecone', 'Vector DB', 'Embeddings', 'Knowledge Base'],
    fullDesc: `RAG (Retrieval-Augmented Generation) is the gold standard for building AI systems that answer questions accurately from your internal knowledge base. We design and build end-to-end RAG pipelines using LangChain, LlamaIndex, Pinecone, Weaviate, or pgvector — connecting your documents, databases, and APIs to powerful LLMs for reliable, citation-backed answers.`,
    benefits: [
      'End-to-end RAG pipeline design and implementation',
      'Vector database setup (Pinecone, Weaviate, pgvector)',
      'Document ingestion, chunking & embedding strategies',
      'Hybrid search combining semantic and keyword retrieval',
    ],
  },
];
