const videoController = {
  getVideos: (req, res) => {
    res.send("respond with a resource");
  },
  deleteVideo: (req, res) => {
    res.send("delete video");
  },
  updateVideo: (req, res) => {
    res.send("update video");
  },
  createVideo: (req, res) => {
    res.send("create video");
  },
  getVideoById: (req, res) => {
    res.send("get video by id");
  },
};

module.exports = videoController;
