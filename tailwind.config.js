module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url(../assets/images/header.jpg)",
        train: "url(../assets/images/train-a-dog.jpg)",
        sweetheart: "url(../assets/images/need-a-sweetheart.jpg)",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      height: {
        "80vh": "80vh",
      },
    },
  },
  plugins: [],
}
