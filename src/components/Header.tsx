import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./SwitchLanguage";
export default function Header() {
    const { t } = useTranslation();
    return (
        <header>
            <h1>{t("header")}</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <h1>
                {t('headerTitle', { appName: "Gaion" })}
            </h1>
            <LanguageSwitcher />
        </header >
    )
}
