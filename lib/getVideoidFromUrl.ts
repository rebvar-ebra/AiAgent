export function getVideoIdFromUrl(url: string): string | null {
//   let videoId: string | null = null;
//   if (url.includes("youtube.be/")) {
//     videoId = url.split("youtube.be/")[1]?.split(/[?#]/)[0] || null;
//   }
//   return videoId;
	const regex =
	  /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

	const match = url.match(regex);
	return match ? match[1] : null;
  }

 