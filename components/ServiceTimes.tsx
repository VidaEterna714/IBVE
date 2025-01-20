export default function ServiceTimes() {
    return (
        <section className="w-full bg-white py-20  text-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-center md:text-left p-4  pb-4 rounded-lg hover:shadow-lg transition-all duration-600">
                        <h2 className="text-3xl font-bold mb-6">📅 Horarios de Servicios</h2>
                        <div className="space-y-4 text-xl">
                            <p>Domingos a las 10:00 AM</p>
                            <p>Miércoles a las 7:00 PM</p>
                        </div>
                    </div>
                    <div className="text-center md:text-left  p-4  pb-4 rounded-lg hover:shadow-lg transition-all duration-600">
                        <h2 className="text-3xl font-bold mb-6">📍 Ubicación</h2>
                        <p className="text-xl"><a href="https://www.google.com/maps/place/929+S+Birch+St,+Santa+Ana,+CA+92701/@33.7462222,-117.8962222,15z/data=!4m2!3m1!1s0x0:0x40d7e66987b98f0!5m2!1s0x0:0x40d7e66987b98f0?sa=X&ved=2ahUKEwjF442146L_AhXQ5jgGHYQ5B18Q_BJ6BAhIEAU" target="_blank" rel="noopener noreferrer">929 S Birch St, Santa Ana, CA 92701</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
} 