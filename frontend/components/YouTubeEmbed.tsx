type YouTubeEmbedProps = {
    videoId: string;
    title?: string;
};

export default function YouTubeEmbed({ videoId, title = "YouTube video" }: YouTubeEmbedProps) {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    );
}
