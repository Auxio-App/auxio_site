"use client";

import FadeSection from "./FadeSection";
import { useLang } from "@/lib/i18n";
import s from "./CRMSection.module.css";
import Image from "next/image";

const copy = {
    pt: {
        alt: 'Painel de clientes Auxio',
        label: 'CRM',
        title: 'Perfil 360° de cada cliente',
        desc: 'Histórico completo de cada cliente, num só lugar. Notas, documentos, preferências e interações sempre acessíveis. Chega a cada marcação com contexto, preparado e com controlo total.',
        leftTitle: 'Conhece cada cliente em profundidade',
        items: [
            'Timeline cronológica de toda a relação',
            'Notas estruturadas por marcação, com histórico pesquisável',
            'Upload de documentos, ficheiros e imagens por cliente',
            'Preferências de horário e método de contacto',
            'Histórico financeiro completo, com registos e recibos',
        ],
    },
    en: {
        alt: 'Auxio client dashboard',
        label: 'CRM',
        title: 'A 360° profile of every client',
        desc: 'Each client’s full history, in one place. Notes, documents, preferences and interactions always at hand. Arrive at every appointment with context, prepared and in full control.',
        leftTitle: 'Know every client in depth',
        items: [
            'Chronological timeline of the whole relationship',
            'Structured notes per appointment, with searchable history',
            'Upload documents, files and images per client',
            'Schedule and contact preferences',
            'Complete financial history, with records and receipts',
        ],
    },
};

export default function CRMSection() {
    const { lang } = useLang();
    const t = copy[lang];

    return (
        <section className={s.section} id="CRM">
            <div className={s.container}>
                <div className={s.split}>

                   {/* ── Coluna esquerda: imagem ── */}
                    <div className={s.imageCol}>
                        <FadeSection>
                            <Image
                                src="/auxio_clientes_desktop.png"
                                alt={t.alt}
                                width={600}
                                height={400}
                                className={s.mockup}
                                priority
                            />
                        </FadeSection>
                    </div>

                    {/* ── Coluna direita: texto ── */}
                    <div className={s.textCol}>
                        <FadeSection><div className={s.label}>{t.label}</div></FadeSection>
                        <FadeSection delay={0.1}>
                            <h2 className={s.title}>{t.title}</h2>
                        </FadeSection>
                        <FadeSection delay={0.2}>
                            <p className={s.desc}>{t.desc}</p>
                        </FadeSection>
                        <FadeSection delay={0.3}>
                            <h3 className={s.leftTitle}>{t.leftTitle}</h3>
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

                </div>
            </div>
        </section>
    );
}
