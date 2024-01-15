import MainHomeLayout from "@/layouts/MainHomePage/app.home";
import { sendRequest } from "@/services/api";

export default async function HomePage() {
  console.log(process.env.BACKEND_URL);
  const dataProducts = await sendRequest<IBackendRes<IProduct[]>>({
    url: `${process.env.BACKEND_URL}/api/v1/products`,
    method: "GET",
  });
  console.log("🚀 ~ HomePage ~ products:", await dataProducts);
  return (
    <>
      <MainHomeLayout data={dataProducts?.products ?? []} />
    </>
  );
}
