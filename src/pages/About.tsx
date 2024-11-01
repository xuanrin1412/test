import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <div>
            <div>{t("aboutPart")}</div>
        </div>
    )
}
