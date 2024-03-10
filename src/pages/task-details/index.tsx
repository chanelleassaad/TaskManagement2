import SectionTitle from "@/components/section-title";
import Image from "next/image";

export default function TaskDetails({ data }: any) {
  console.log(data.data.result.image);
  const title = data.data.message;
  const imageUrl = data.data.result?.image;

  return (
    <>
      <SectionTitle title={"Task Details"}></SectionTitle>

      <h3>{title}</h3>
      <Image src={imageUrl} width={430} height={287} alt="" priority />
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
