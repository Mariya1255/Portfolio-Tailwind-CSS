import React from "react";

const About = () => {
    return (
        <section className="about h-screen flex items-center justify-start bg-cover bg-center text-gray px-10" style={{ backgroundImage: "url('/about-page.png')" }}>
            <div className="bg-red-100 bg-opacity-60 p-8 rounded-md max-w-lg">
                <h2 className="text-4xl font-bold mb-4" data-aos="fae-in">About Us</h2>
                <p>Welcome to Perfume Brand, where we believe a fragrance is more than just a scent—it is an 
                  expression of personality, elegance, and unforgettable moments. Our mission is to bring you a diverse
                  collection of premium perfumes from around the world, each chosen for its exceptional quality and unique composition.
                  Whether you are a connoisseur of fine fragrances or simply enjoy the allure of a captivating aroma, we are here to help you 
                  find the perfect perfume to complement your individuality and leave a lasting impression.</p>
            </div>
        </section>
    );
};

export default About;