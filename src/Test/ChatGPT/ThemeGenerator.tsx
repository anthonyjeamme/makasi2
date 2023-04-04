import { FC, useState } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./ThemeGenerator.module.scss";

const className = classNameModule(styles);

interface TThemeGeneratorProps {
  //
}

type TTheme = {
  id: string;
  backgroundColor: string;
  textColor: string;
  primaryColor: string;
  textOverPrimaryColor: string;
};

export const ThemeGenerator: FC<TThemeGeneratorProps> = () => {
  const [description, setDescription] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const [themes, setThemes] = useState<TTheme[]>([]);

  const handleSend = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setThemes([]);
    const { themes } = await fetch("/api/services/chatgpt/theme", {
      method: "POST",
      body: JSON.stringify({ description }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .finally(() => setIsLoading(false));

    setThemes(themes);
  };

  return (
    <div {...className("ThemeGenerator")}>
      <div>
        <h1>Choisissons ensemble le thème parfait</h1>

        <textarea
          placeholder="Décrivez votre activité"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleSend();
          }}
        >
          {isLoading ? "En cours..." : "Proposez moi !"}
        </button>

        {themes.length > 0 && (
          <div {...className("result")}>
            {themes.map((theme) => (
              <div
                {...className("theme")}
                key={theme.id}
                style={{
                  background: theme.backgroundColor,
                  color: theme.textColor,
                }}
              >
                <p>Texte d{"'"}exemple</p>

                <button
                  style={{
                    backgroundColor: theme.primaryColor,
                    color: theme.textOverPrimaryColor,
                  }}
                >
                  Call to action
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
