const getShows = async () => {
  const response = await fetch("/api/shows");
  const data = await response.json();
  return data;
};
