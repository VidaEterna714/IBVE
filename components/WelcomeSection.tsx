import TextCursorProximity from "./fancy/text-cursor-proximity";
import { useRef } from "react";

export default function WelcomeSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <section className="w-full pt-20">
            <div ref={containerRef} className="max-w-7xl mx-auto text-center leading-loose">
                <TextCursorProximity label="Descubre Esperanza y Comunidad"
                    className="cursor-pointer text-3xl md:text-4xl font-bold "
                    styles={{
                        transform: {
                            from: "scale(1)",
                            to: "scale(1.4)",
                        },
                        color: { from: "#000", to: "#87c1ff" },
                    }}
                    falloff="gaussian"
                    radius={100}
                    containerRef={containerRef as React.RefObject<HTMLDivElement>}

                />
                <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg py-4">
                    ¿Buscas un lugar donde pertenecer? <strong>Iglesia Bautista Vida Eterna</strong> es más que una iglesia: ¡es una familia!
                    Ubicada en el corazón de Santa Ana, somos una comunidad vibrante comprometida a compartir el amor de Dios
                    y construir relaciones duraderas.
                </p>
            </div>
        </section>
    )
} 