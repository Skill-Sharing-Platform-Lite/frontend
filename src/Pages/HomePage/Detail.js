import { useParams } from "react-router-dom";

const Detail = () => {
  const params = useParams();

  const id = params.id;

  return (
<section className="flex items-center flex-col ">
      <p> This is a detail description for {id}</p>
      <iframe 
        width="1500"
        height="815"
        src="https://www.youtube.com/embed/W6NZfCO5SIk?si=UrDPovyWiD4crFus"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
};
export default Detail;
