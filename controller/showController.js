const axios = require("axios");

exports.index = (req, res) => {
  res.render("index");
};

exports.showApi = (req, res) => {
  axios
    .get("http://124.41.240.154:9803/api/nowshowinginfo")
    .then(function(response) {
      const AuditoriumList = [];
      response.data.forEach(show => {
        if (
          !AuditoriumList.find(
            aud =>
              aud.id ===
              `${show.Theatre.TheatreId}${show.Auditorium.AuditoriumId}`
          )
        ) {
          AuditoriumList.push({
            id: `${show.Theatre.TheatreId}${show.Auditorium.AuditoriumId}`,
            Theatre: show.Theatre.TheatreName,
            Auditorium: show.Auditorium.AuditoriumName
          });
        }
      });
      res.json({ AuditoriumList, NowShowings: response.data });
    });
};

exports.shows = (req, res) => {
  res.render("shows");
};
