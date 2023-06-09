import type { NextApiRequest, NextApiResponse } from "next";

type TData = any;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  const { description } = req.body;

  try {
    const result = await messageTurbo(description);

    console.log(result.choices[0].message);

    res.status(200).json({
      themes: JSON.parse(result.choices[0].message.content),
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
}

const fakeData = {
  id: "chatcmpl-70Ck6GPUA2IG1vqDEWUmMozKIrxeL",
  object: "chat.completion",
  created: 1680283338,
  model: "gpt-3.5-turbo-0301",
  usage: {
    prompt_tokens: 124,
    completion_tokens: 299,
    total_tokens: 423,
  },
  choices: [
    {
      message: {
        role: "assistant",
        content:
          '{\n  "sections": [\n    {\n      "title": "Découvrez le parapente",\n      "text": "Bienvenue sur notre site dédié à l\'activité de parapente. Nous vous proposons une expérience unique en plein air, pour découvrir des sensations fortes et profiter de vues à couper le souffle. Que vous soyez débutant ou confirmé, notre équipe de professionnels vous accompagne pour un vol en toute sécurité."\n    },\n    {\n      "text": "Nous proposons des vols en parapente adaptés à tous les niveaux, du baptême de l\'air découverte aux vols techniques pour les plus aguerris. Nos moniteurs expérimentés vous guident pour vous faire vivre une expérience inoubliable."\n    },\n    {\n      "title": "Des vols sur mesure",\n      "text": "Nous proposons également des vols sur mesure pour les groupes, les événements d\'entreprise ou les anniversaires. Contactez-nous pour en savoir plus sur nos offres personnalisées."\n    },\n    {\n      "text": "Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans votre projet de vol en parapente. N\'hésitez pas à nous contacter pour réserver votre prochain vol."\n    }\n  ]\n}',
      },
      finish_reason: "stop",
      index: 0,
    },
  ],
};

const formatQuestion = (description: string) => {
  return `
    Je veux 6 themes différents pour un site. Chaque thème doit avoir des couleurs différentes. La réponse doit etre au format JSON, en suivant le type typescript suivant : 

    '
    type Themes = {
      id: string; // Un identifiant unique
      backgroundColor: string;
      textColor: string;
      primaryColor: string;
      textOverPrimaryColor: string;
    }[]
    '

    Le site est pour une activité. Voici la description de cette activité :

    "
    ${description}
    "

    Veille bien à ce que les couleurs "textOverPrimaryColor" soit bien visibles sur le fond "primaryColor".
    Merci de renvoyer la réponse sous forme JSON uniquement.
    `;
};

const messageTurbo = async (question: string) => {
  const result = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.OPENAI_SECRET_KEY,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: formatQuestion(question),
        },
      ],
      temperature: 0.7,
    }),
  }).then((result) => result.json());

  return result;
};

const messageADA = async (question: string) => {
  const result = await fetch(
    "https://api.openai.com/v1/engines/ada/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPENAI_SECRET_KEY,
      },
      body: JSON.stringify({
        prompt: formatQuestion(question),
        temperature: 0.7,
      }),
    }
  ).then((result) => result.json());

  console.log(result);

  return result;
};

const messageCurie001 = async (question: string) => {
  const result = await fetch(
    "https://api.openai.com/v1/engines/babbage/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.OPENAI_SECRET_KEY,
      },
      body: JSON.stringify({
        prompt: formatQuestion(question),
        temperature: 0.7,
        max_tokens: 1000,
      }),
    }
  ).then((result) => result.json());

  return result.choices[0].text;
};
