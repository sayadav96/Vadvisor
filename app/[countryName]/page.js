import Country from "@/components/Country";
import countriesData from "./data/countriesData.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { countryName: "uk" },
    { countryName: "ireland" },
    { countryName: "australia" },
    { countryName: "new-zealand" },
    { countryName: "germany" },
    { countryName: "dubai" },
  ];
}

export default async function Page({ params }) {
  let data = "";
  let heroImg = "";
  let dropdownItems = [];

  const heroImgPaths = {
    uk: "/images/countries/uk/hero-img.webp",
    dubai: "/images/countries/dubai/hero-img.webp",
    ireland: "/images/countries/ireland/hero-img.webp",
    australia: "/images/countries/australia/hero-img.webp",
    newZealand: "/images/countries/new-zealand/hero-img.webp",
    germany: "/images/countries/germany/hero-img.webp",
  };

  const param = await params;

  switch (param.countryName) {
    case "uk":
      data = countriesData.uk;
      heroImg = heroImgPaths.uk;
      dropdownItems = data.flagSection.dropdownItems;
      break;

    case "dubai":
      data = countriesData.dubai;
      heroImg = heroImgPaths.dubai;
      dropdownItems = data.flagSection.dropdownItems;
      break;

    case "ireland":
      data = countriesData.ireland;
      heroImg = heroImgPaths.ireland;
      dropdownItems = data.flagSection.dropdownItems;
      break;

    case "australia":
      data = countriesData.australia;
      heroImg = heroImgPaths.australia;
      dropdownItems = data.flagSection.dropdownItems;
      break;

    case "new-zealand":
      data = countriesData.newZealand;
      heroImg = heroImgPaths.newZealand;
      dropdownItems = data.flagSection.dropdownItems;
      break;

    case "germany":
      data = countriesData.germany;
      heroImg = heroImgPaths.germany;
      dropdownItems = data.flagSection.dropdownItems;
      break;

    default:
      return notFound();
  }

  return (
    <Country data={data} heroImg={heroImg} dropdownItems={dropdownItems} />
  );
}
