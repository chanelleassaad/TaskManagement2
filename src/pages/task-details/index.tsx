import Image from "next/image";

export default function TaskDetails({ data }: any) {
  console.log(data.data.result.image);
  const title = data.data.message;
  const imageUrl = data.data.result?.image;

  return (
    <>
      <p>{title}</p>
      <Image
        src={imageUrl}
        width={430}
        height={287}
        alt="Picture of the author"
        priority
      />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874`
  );
  const data = await res.json();

  return { props: { data } };
}
