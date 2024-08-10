import { getSubtitles } from 'youtube-captions-scraper';

const importController = {
  youtube : async(req, res) => {
    try{
      // we only need the id not the whole URL
      function extractVideoId(url) {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const matches = url.match(regex);
        console.log(matches ? matches[1] : null)
        return matches ? matches[1] : null;
      }

      const videoId = extractVideoId(req.body.url);
      if (!videoId) {
        res.status(400).send({message: "invalid youtube url"})
      }
      const captions = await getSubtitles({ videoID: videoId, lang: 'en' });
      if (!captions){
        res.status(400).send({error: "no subtitle available"})
      }else{
        const transcript = captions.map(caption => caption.text).join(' ');
        res.status(200).send(transcript);
      }
    }catch(error){
      res.status(400).send({message: error.message})
    }
  }
}

export default importController
