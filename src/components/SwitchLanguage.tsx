
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../features/languageSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const LanguageSwitcher = () => {
    const dispatch = useAppDispatch();
    const { t, i18n } = useTranslation();
    const currentLanguage = useAppSelector((state) => state.language.currentLanguage);
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "vn" : "en";
        dispatch(setLanguage(newLanguage));
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div>
            <button onClick={handleChangeLanguage}>
                {t('switchLanguage')}
            </button>
        </div>
    );
};

export default LanguageSwitcher;
