import { useTranslation } from 'react-i18next';
import aboutPic from '../../assets/1740494381377.jpeg';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <img
              src={aboutPic}
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
              {t('about.paragraph1')}
            </p>
            <p className="text-lg text-gray-600 mb-6">
              {t('about.paragraph2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
