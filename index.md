---
layout: default
title: Automação sem Enrolação
description: Bots e scripts em Python para PMEs brasileiras. Automatize WhatsApp, monitore preços e aumente seu lucro com IA. Veja depoimentos reais e calcule seu ROI.
image: /assets/img/og-cover.jpg
author: Gustavo Ferreira
tags: [automação, whatsapp, pme, python, depoimentos, cases]
---

<!-- Dados estruturados SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Gringo IA Coder",
  "url": "https://<seu-usuario>.github.io/gringo-ia-site",
  "description": "Automação em Python e IA para PMEs brasileiras",
  "telephone": "+55-24-99870-6745",
  "areaServed": "BR",
  "priceRange": "R$2400-R$5800"
}
</script>

<header class="hero">
  <img src="/assets/img/hero.jpg" alt="Empreendedor brasileiro usando automação para PME" loading="eager" srcset="/assets/img/hero.jpg 600w, /assets/img/hero.jpg 1200w" sizes="(max-width: 600px) 100vw, 600px">
  <h1>Automação sem Enrolação para PME</h1>
  <p>Bots e scripts em Python que libertam seu tempo e aumentam sua receita.</p>
  <a href="#planos" class="btn btn-main" aria-label="Ver planos de automação">Ver Planos</a>
</header>

<section id="planos">
  <h2 class="center">Planos Direto ao Ponto</h2>
  <div class="cards">
    {% assign planos = site.data.planos %}
    {% for p in planos %}
    <div class="card">
      <h3><i class="{{ p.icone }}"></i> {{ p.nome }}</h3>
      <p class="price">{{ p.preco }}</p>
      <ul>{% for b in p.bullets %}<li>{{ b }}</li>{% endfor %}</ul>
      <a class="btn btn-main" href="{{ p.cta }}">WhatsApp Agora</a>
    </div>
    {% endfor %}
  </div>
</section>

<section id="depoimentos">
  <h2 class="center">Depoimentos Reais de Clientes</h2>
  <div class="cards">
    {% for d in site.data.depoimentos %}
    <div class="card">
      <img src="{{ d.foto }}" alt="Foto de {{ d.nome }} - {{ d.cargo }} na {{ d.empresa }}" style="width:64px;height:64px;border-radius:50%;margin-bottom:12px;object-fit:cover;">
      <p>“{{ d.texto }}”</p>
      <strong>{{ d.nome }}, {{ d.cargo }} — {{ d.empresa }}</strong><br>
      {% if d.linkedin %}
      <a href="{{ d.linkedin }}" target="_blank" rel="noopener noreferrer" style="font-size:0.9em;color:#16a34a">LinkedIn</a>
      {% endif %}
    </div>
    {% endfor %}
  </div>
</section>

<section id="roi">
  <h2 class="center">Calculadora de ROI para Automação</h2>
  <p class="center tip">ROI = (ganho mensal – custo) ÷ custo. Descubra em quantos meses seu projeto se paga.</p>
  <div class="roi-box">
    <label for="g">Ganho/Economia por mês (R$)</label><input id="g" type="number" placeholder="Ex.: 1500">
    <label for="c">Investimento único (R$)</label><input id="c" type="number" placeholder="Ex.: 2400">
    <button class="btn btn-main" onclick="roi()">Calcular</button>
    <p id="roi-out"></p>
  </div>
</section>

<section id="processo">
  <h2 class="center">Como Funciona a Automação</h2>
  <ol class="steps">
    <li><b>15 min de bate-papo</b> — você mostra a dor.</li>
    <li><b>Proposta fixa</b> — preço, prazo, ROI.</li>
    <li><b>Construção + vídeo-demo</b> — sem código pra você.</li>
    <li><b>Go-live</b> — ajustes grátis 15 dias.</li>
  </ol>
</section>

<section id="faq">
  <h2 class="center">Perguntas Frequentes sobre Automação</h2>
  {% for f in site.data.faq %}
  <details><summary>{{ f.q }}</summary><p>{{ f.a }}</p></details>
  {% endfor %}
</section>

<footer>
  © 2025 Gringo IA Coder ·
  <a href="https://github.com/FuturoDevJunior" target="_blank" rel="noopener noreferrer">GitHub</a> ·
  <a href="https://linkedin.com/in/devferreirag" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <br>
  <a href="#depoimentos" style="font-size:0.9em;color:#16a34a">Veja depoimentos reais</a> ·
  <a href="#planos" style="font-size:0.9em;color:#16a34a">Planos de automação</a>
</footer> 