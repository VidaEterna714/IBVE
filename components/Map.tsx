export default function Map() {
    return (
        <div>
            <div className=" relative mt-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Nuestra Ubicación</h2>
            </div>
            <div className="rounded-lg hue-rotate-180 overflow-hidden shadow-lg shadow-black">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.9557863437584!2d-117.87291068479242!3d33.74179798068894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9c5d9a2d3c3%3A0x8b9f4b3d4d4d4d4d!2s929%20S%20Birch%20St%2C%20Santa%20Ana%2C%20CA%2092701!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}
