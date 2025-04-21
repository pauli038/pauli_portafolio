import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white overflow-hidden mb-10"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img
        src={
          "https://preview.redd.it/data-scientist-wallpaper-1920x1080-v0-nflafw75q6a91.jpg?auto=webp&s=cd9a1d3d66181d651cba95812a119383658c90f7"
        }
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t("hero.name")}
            </h1>
            <p className="text-xl mb-8 font-bold">{t("hero.description")}</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/CV-Maria-Paula-Fernandez.pdf"
                download
                className="bg-white text-teal-900 font-semibold px-8 py-3 rounded-full hover:bg-teal-100 transition duration-300 text-center"
              >
                {t("hero.download_cv")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
