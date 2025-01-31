// querySelector for Testimonals-data set analyzation 


    document.addEventListener("DOMContentLoaded", function () {
        const testimonials = [
            {
                quote: "ShePlays: Football has helped me connect with players from all over the world. My football family has expanded internationally.",
                name: "Aubrey",
                role: "Football Player, USA"
            },
            {
                quote: "As a coach, it’s incredible to see the way this app has brought together players and coaches from all different cultures. We've collaborated on training techniques, and it’s great to see how the global football community is so interconnected.",
                name: "Emma",
                role: "Football Coach, Mexico"
            },
            {
                quote: "As a woman in football, it’s easy to feel isolated, especially in countries where women’s sports are less recognized. This app has given me the opportunity to meet other female players and advocates from around the world, which has boosted my confidence and passion for the game.",
                name: "Bethany",
                role: "Football Player, Germany"
            }
        ];
    
        const testimonialsContainer = document.querySelector(".testimonials");
        const template = document.querySelector("#testimonial-template");
    
        function createTestimonialCard({ quote, name, role }) {
            const clone = template.content.cloneNode(true);
            clone.querySelector(".testimonial-quote").textContent = `"${quote}"`;
            clone.querySelector(".testimonial-author").textContent = `- ${name}, ${role}`;
            return clone;
        }
    
        function loadTestimonials() {
            testimonials.forEach(testimonial => {
                const card = createTestimonialCard(testimonial);
                testimonialsContainer.appendChild(card);
            });
        }
    
        loadTestimonials();
    });
