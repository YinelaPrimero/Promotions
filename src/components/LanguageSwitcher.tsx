import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  // Spanish flag SVG
  const SpainFlag = () => (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480">
      <rect width="640" height="480" fill="#c60b1e"/>
      <rect width="640" height="240" y="120" fill="#ffc400"/>
    </svg>
  );

  // US flag SVG
  const USFlag = () => (
    <svg className="w-5 h-4 rounded-sm" viewBox="0 0 640 480">
      <rect width="640" height="480" fill="#fff"/>
      <g fill="#bf0a30">
        <rect y="37" width="640" height="37"/>
        <rect y="111" width="640" height="37"/>
        <rect y="185" width="640" height="37"/>
        <rect y="259" width="640" height="37"/>
        <rect y="333" width="640" height="37"/>
        <rect y="407" width="640" height="37"/>
      </g>
      <rect width="364" height="259" fill="#002868"/>
    </svg>
  );

  return (
    <div className="flex items-center bg-gray-800 rounded-lg p-1 gap-1">
      <button
        onClick={() => changeLanguage('es')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          currentLanguage === 'es' || currentLanguage.startsWith('es')
            ? 'bg-primary-600 text-white shadow-md'
            : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
        aria-label="Cambiar a Español"
      >
        <SpainFlag />
        <span>ES</span>
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
          currentLanguage === 'en' || currentLanguage.startsWith('en')
            ? 'bg-primary-600 text-white shadow-md'
            : 'text-gray-300 hover:text-white hover:bg-gray-700'
        }`}
        aria-label="Switch to English"
      >
        <USFlag />
        <span>EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
