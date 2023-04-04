import { FC, useEffect, useState } from "react";
import { classNameModule } from "@/utils/className/className";

import styles from "./Unsplash.module.scss";
import { MagnifyingGlass } from "phosphor-react";

const className = classNameModule(styles);

interface TUnsplashProps {
  //
  handleSelectImage: (imageURL: string) => void;
}

export const Unsplash: FC<TUnsplashProps> = ({ handleSelectImage }) => {
  const [images, setImages] = useState(fakeData);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    fetch(`/api/services/unsplash/search`, {
      method: "POST",
      body: JSON.stringify({ searchTerm: search }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => result.json())
      .then(({ images }) => {
        setImages(
          images.map((img: any) => ({
            id: img.id,
            url: img.urls.small,
          }))
        );
      });
  };

  return (
    <div {...className("Unsplash")}>
      <header>
        <span {...className("icon")}>
          <MagnifyingGlass />
        </span>
        <input
          placeholder="Rechercher une image"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </header>

      <div {...className("result")}>
        {images.map(({ id, url }) => (
          <div key={id}>
            <img
              src={url}
              onClick={() => {
                handleSelectImage(url);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Unsplash;

const fakeData = [
  {
    id: "B5PNmw5XSpk",
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwxfHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "OlbCWO7068Y",
    url: "https://images.unsplash.com/photo-1571504211935-1c936b327411?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwyfHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "A7ol2HfnycY",
    url: "https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwzfHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "21DP3hytVHw",
    url: "https://images.unsplash.com/photo-1514539079130-25950c84af65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw0fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "wH7Q603NhmM",
    url: "https://images.unsplash.com/photo-1585231474241-c8340c2b2c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw1fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "z4ky2zXIjDM",
    url: "https://images.unsplash.com/photo-1597466599360-3b9775841aec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw2fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "Ipv_MNTzcQI",
    url: "https://images.unsplash.com/photo-1553434320-e9f5757140b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw3fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "kEP-zO-w4nE",
    url: "https://images.unsplash.com/photo-1508682641856-78948a748357?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw4fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "mDIMJzdu5D0",
    url: "https://images.unsplash.com/photo-1594735514819-6bdb44c65772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHw5fHxjYXN0bGV8ZW58MHx8fHwxNjgwMTg3MzAy&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: "ztOC9vFVbfo",
    url: "https://images.unsplash.com/photo-1571918372905-b98f68fe214a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0Mjk1Mjd8MHwxfHNlYXJjaHwxMHx8Y2FzdGxlfGVufDB8fHx8MTY4MDE4NzMwMg&ixlib=rb-4.0.3&q=80&w=400",
  },
];
