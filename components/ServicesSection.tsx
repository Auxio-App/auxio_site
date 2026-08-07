'use client';

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./ServicesSection.module.css";

const copy = {
    pt: {
        label: 'Catálogo de serviços',
        title: 'Preços e durações definidos uma vez',
        desc: 'Organiza os teus serviços por categoria, define preços, durações e pacotes uma única vez. Depois, cada marcação torna-se mais rápida e tens uma visão clara dos serviços mais procurados e dos que geram mais receita.',
        items: [
            'Define categorias, cores, preços e durações para cada serviço.',
            'Cria pacotes e preços especiais sem fazer contas manualmente.',
            'Descobre quais são os serviços mais procurados e mais rentáveis.',
        ],
        badge: 'Mais popular este mês',
        heroName: 'Fisioterapia — sessão individual',
        heroStats: [
            ['Preço', '45,00 €'],
            ['Duração', '45 min'],
            ['Marcações', '38'],
        ],
        services: [
            { name: 'Avaliação inicial',     cat: 'Fisioterapia', price: '60 €',  dur: '60 min',     tone: 'green' },
            { name: 'Pacote 8 sessões',      cat: 'Fisioterapia', price: '320 €', dur: '8 × 45 min', tone: 'amber' },
            { name: 'Pilates clínico',       cat: 'Movimento',    price: '18 €',  dur: '50 min',     tone: 'blue'  },
            { name: 'Massagem terapêutica',  cat: 'Bem-estar',    price: '40 €',  dur: '50 min',     tone: 'red'   },
        ],
    },
    en: {
        label: 'Service catalogue',
        title: 'Prices and durations set once.',
        desc: 'Organise your services by category and set prices, durations and packs just once. After that every booking gets faster, and you get a clear view of which services are most in demand and which bring in the most revenue.',
        items: [
            'Set categories, colours, prices and durations for each service.',
            'Build packs and special prices without doing the maths by hand.',
            'Find out which services are the most in demand and the most profitable.',
        ],
        badge: 'Most popular this month',
        heroName: 'Physiotherapy — single session',
        heroStats: [
            ['Price', '45.00 €'],
            ['Duration', '45 min'],
            ['Bookings', '38'],
        ],
        services: [
            { name: 'Initial assessment',   cat: 'Physiotherapy', price: '60 €',  dur: '60 min',     tone: 'green' },
            { name: '8-session pack',       cat: 'Physiotherapy', price: '320 €', dur: '8 × 45 min', tone: 'amber' },
            { name: 'Clinical pilates',     cat: 'Movement',      price: '18 €',  dur: '50 min',     tone: 'blue'  },
            { name: 'Therapeutic massage',  cat: 'Wellbeing',     price: '40 €',  dur: '50 min',     tone: 'red'   },
        ],
    },
};

export default function ServicesSection() {
    const { lang } = useLang();
    const t = copy[lang];

    return (
        <section className={s.section} id="servicos">
            <div className={s.container}>
                <div className={s.split}>
                    <div className={s.textCol}>
                        <FadeSection>
                            <div className={s.pill}>
                                <svg viewBox="0 0 16 16" width="13" height="13" fill="none"
                                     stroke="currentColor" strokeWidth="1.4"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2.5" width="8" height="11" rx="1.5" />
                                    <path d="M11.5 4.2l2.3 8.6a1.5 1.5 0 0 1-1 1.8l-1.6.4" />
                                </svg>
                                {t.label}
                            </div>
                        </FadeSection>
                        <FadeSection delay={0.1}>
                            <h2 className={s.title}>{t.title}</h2>
                        </FadeSection>
                        <FadeSection delay={0.2}>
                            <p className={s.desc}>{t.desc}</p>
                        </FadeSection>
                        <FadeSection delay={0.3}>
                            <ul className={s.list}>
                                {t.items.map((item, i) => (
                                    <li key={i}>
                                        <span className={s.check}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </FadeSection>
                    </div>

                    <FadeSection delay={0.25} className={s.mockCol}>
                        <div className={s.hero}>
                            <span className={s.badge}>
                                <svg viewBox="0 0 16 16" width="11" height="11" fill="none"
                                     stroke="currentColor" strokeWidth="1.6"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2 11.5l4-4 2.5 2.5L14 4.5" /><path d="M10.5 4.5H14V8" />
                                </svg>
                                {t.badge}
                            </span>
                            <p className={s.heroName}>{t.heroName}</p>
                            <div className={s.heroStats}>
                                {t.heroStats.map(([k, v]) => (
                                    <div key={k} className={s.heroStat}>
                                        <span className={s.heroLabel}>{k}</span>
                                        <span className={s.heroValue}>{v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={s.grid}>
                            {t.services.map((sv) => (
                                <div key={sv.name} className={`${s.card} ${s[`c_${sv.tone}`]}`}>
                                    <p className={s.cardName}>{sv.name}</p>
                                    <p className={s.cardCat}>{sv.cat}</p>
                                    <p className={s.cardFoot}>
                                        <span className={s.cardPrice}>{sv.price}</span>
                                        <span className={s.cardDur}>{sv.dur}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </FadeSection>
                </div>
            </div>
        </section>
    );
}
