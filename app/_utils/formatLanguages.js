const formatLanguages = (languages) => {
    return Object.values(languages)
      .map((language) => language)
      .join(", ");
  };

export default formatLanguages;