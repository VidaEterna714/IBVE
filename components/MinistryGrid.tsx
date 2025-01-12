const ministries = [
    {
        icon: "🎶",
        title: "Adoración Inspiradora",
        description: "Únete a nosotros todos los domingos para un tiempo de adoración sincera y mensajes poderosos que inspiran y transforman."
    },
    {
        icon: "📖",
        title: "Enseñanza Basada en la Biblia",
        description: "Creemos en el poder de la Palabra de Dios para guiarnos, animarnos y equiparnos en la vida diaria."
    },
    {
        icon: "👨‍👩‍👧‍👦",
        title: "Programas para Todos",
        description: "Desde niños hasta adultos mayores, tenemos ministerios para cada etapa de la vida."
    },
    {
        icon: "❤️",
        title: "Un Lugar para Llamar Hogar",
        description: "Ya sea que estés comenzando en la fe o buscando un nuevo comienzo, eres bienvenido aquí."
    }
]

export default function MinistryGrid() {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {ministries.map((ministry, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-4">{ministry.icon}</div>
                            <h3 className="text-xl font-bold mb-3">{ministry.title}</h3>
                            <p className="text-gray-600">{ministry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 