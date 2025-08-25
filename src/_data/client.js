module.exports = {
    name: "وكالة لمشسة للتصميم الداخلي",
    email: "help@lamssa.app",
    phoneForTel: "+213665598411",
    phoneFormatted: "06 65 59 84 11",
    address: {
        lineOne: "شارع 10 ماي",
        lineTwo: "حي التوزوز",
        city: "بلدية غرداية",
        state: "غرداية",
        country: "الجزائر",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
