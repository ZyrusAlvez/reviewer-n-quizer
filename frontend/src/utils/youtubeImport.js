import { getSubtitles } from 'youtube-captions-scraper';

function extractVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  console.log(matches ? matches[1] : null)
  return matches ? matches[1] : null;
}

async function youtubeImport(url){
    // we only need the id not the whole URL

    const videoId = extractVideoId(req.body.url);
    if (!videoId) {
      return "invalid youtube url"
    }
    const captions = await getSubtitles({ videoID: videoId, lang: 'en' });
    if (!captions){
      return "no subtitle available"
    }else{
      const transcript = captions.map(caption => caption.text).join(' ');
      return transcript
    }
  }

export default youtubeImport
