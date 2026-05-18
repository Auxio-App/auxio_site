"use client";

import FadeSection from "./FadeSection";
import s from "./CRMSection.module.css";
import Image from "next/image";


const items = [
    'Timeline cronológica de toda a relação',
    'Notas estruturadas por marcação, com histórico pesquisável',
    'Upload de documentos, ficheiros e imagens por cliente',
    'Preferências de horário e método de contacto',
    'Histórico financeiro completo, com registos e recibos',
];

export default function CRMSection() {
    return (
        <section className={s.section} id="CRM">
            <div className={s.container}>
                <div className={s.split}>

                   {/* ── Coluna esquerda: imagem ── */}
                    <div className={s.imageCol}>
                        <FadeSection>
                            <Image
                                src="/auxio_clientes_desktop.png"
                                alt="Painel de clientes Auxio"
                                width={600}
                                height={400}
                                className={s.mockup}
                                priority
                            />
                        </FadeSection>
                    </div>

                    {/* ── Coluna direita: texto ── */}
                    <div className={s.textCol}>
                        <FadeSection><div className={s.label}>CRM</div></FadeSection>
                        <FadeSection delay={0.1}>
                            <h2 className={s.title}>Perfil 360° de cada cliente</h2>
                        </FadeSection>
                        <FadeSection delay={0.2}>
                            <p className={s.desc}>
                                Histórico completo de cada cliente, num só lugar.
                                Notas, documentos, preferências e interações sempre acessíveis.
                                Chega a cada marcação com contexto, preparado e com controlo total.
                            </p>
                        </FadeSection>
                        <FadeSection delay={0.3}>
                            <h3 className={s.leftTitle}>Conhece cada cliente em profundidade</h3>
                            <ul className={s.list}>
                                {items.map((item, i) => (
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
