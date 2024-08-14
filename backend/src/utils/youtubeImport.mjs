import { getSubtitles } from 'youtube-captions-scraper';

function extractVideoId(url) {
  // we only need the id not the whole URL
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  console.log(matches ? matches[1] : null)
  return matches ? matches[1] : null;
}

async function youtubeImport(req, res){
  
    const videoId = extractVideoId(req.body.url);
    if (!videoId) {
      return res.status(400).send({message : "not valid url"})
    }
    const captions = await getSubtitles({ videoID: videoId, lang: 'en' });
    if (!captions){
      return res.status(400).send({message : "no subtitle available"})
    }else{
      const transcript = captions.map(caption => caption.text).join(' ');
      return res.status(200).send(transcript)
    }
  }

export default youtubeImport
